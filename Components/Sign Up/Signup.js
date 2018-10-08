import React, { Component } from 'react';
import { Text, TextInput, View, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { ViewContainer, IconButton, CustomButton } from '../../Themes/Themes';
import { SignupStyle } from './SignupStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Kohana } from 'react-native-textinput-effects';
import firebase from 'react-native-firebase'




export default class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      email: '',
      password: '',
      disable: true,
      editable: true,
      loading: false,
      errorCode: '',
      uid: ''
    }
  }

  handleSignUp() {
    this.setState({
      editable: false,
      disable: true,
      loading: true,
    })
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password).then(() => {
      var user = firebase.auth().currentUser;
      firebase.firestore().collection('users').add({
        email: this.state.email,
        name: this.state.userName,
        uid: user.uid
      });
      this.setState({
        userName: '',
        email: '',
        password: '',
        editable: true,
        disable: true,
        loading: false
      })
      this.props.navigation.navigate('Dashboard')

    }).catch(error => {
      var errorCodes = error.code;
      var errorCode = errorCodes.slice(5)
      this.setState({
        errorCode,
        editable: true,
        loading: false
      })
    })
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <ViewContainer ViewStyles={SignupStyle.mainContainer}>
        <ScrollView>
          <KeyboardAvoidingView behavior='position'>
            <IconButton onBtnPress={() => navigate('Login')} iconName='angle-left' iconSize={40} iconColor='#ffffff' IconStyle={SignupStyle.backIcon} />
            <Text style={SignupStyle.loginText}>Sign Up</Text>
            <Kohana
              style={SignupStyle.inputStyle}
              label={'Username'}
              iconClass={Icon}
              returnKeyType='next'
              iconName={'user'}
              iconColor={'#f1c40f'}
              labelStyle={{ color: '#91627b' }}
              inputStyle={{ color: '#91627b' }}
              onSubmitEditing={() => this.emailInput.focus()}
              useNativeDriver
              onChangeText={userName => this.setState({ userName })}
              editable={this.state.editable}
            />

            <Kohana
              style={SignupStyle.inputStyle}
              keyboardType='email-address'
              returnKeyType='next'
              onSubmitEditing={() => this.passwordInput.focus()}
              ref={input => this.emailInput = input}
              autoCapitalize='none'
              label={'Email'}
              iconClass={Icon}
              iconName={'at'}
              iconColor={'#341f97'}
              labelStyle={{ color: '#91627b' }}
              inputStyle={{ color: '#91627b' }}
              useNativeDriver
              onChangeText={email => this.setState({ email })}
              editable={this.state.editable}
            />

            {
              this.state.errorCode === 'invalid-email' || this.state.errorCode === 'email-already-in-use' ?
                <Text style={SignupStyle.errorView}>{this.state.errorCode}</Text> : null
            }
            <Kohana
              style={SignupStyle.inputStyle}
              secureTextEntry={true}
              label={'Password'}
              iconClass={Icon}
              iconName={'key'}
              iconColor={'#ee5253'}
              labelStyle={{ color: '#91627b' }}
              inputStyle={{ color: '#91627b' }}
              ref={input => this.passwordInput = input}
              useNativeDriver
              onChangeText={password => this.setState({ password, disable: false })}
              returnKeyType='done'
              onSubmitEditing={this.handleSignUp.bind(this)}
              editable={this.state.editable}
            />
            {
              this.state.errorCode === 'weak-password' ?
                <Text style={SignupStyle.errorView}>{this.state.errorCode}</Text> : null
            }
            <CustomButton
              loading={this.state.loading}
              disabled={this.state.disable}
              buttonTextStyle={SignupStyle.textStyle}
              buttonStyle={[SignupStyle.signUpButton, this.state.disable && SignupStyle.disableButtonStyle]}
              onBtnPress={this.handleSignUp.bind(this)}
              textToBeShown='Sign Up' />
          </KeyboardAvoidingView>
        </ScrollView>
      </ViewContainer>
    );
  }
}

