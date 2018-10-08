import React, { Component } from 'react';
import { Text, TextInput, View, ScrollView, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ViewContainer, IconButton, CustomButton } from '../../Themes/Themes';
import { LoginStyle } from './LoginStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Kohana } from 'react-native-textinput-effects';
import firebase from 'react-native-firebase';




export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errorCode: '',
      disable: true,
      editable: true,
      loading: false,
    }
  }
  handleLogIn() {
    this.setState({
      editable: false,
      disable: true,
      loading: true,
    })
    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password).then(() => {
      this.setState({
        email: '',
        errorCode: '',
        password: '',
        editable: true,
        disable: true,
        loading: true
      })
      this.props.navigation.navigate('Dashboard')
    }).catch(error => {
      console.warn('Error: ', error);
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
      <ViewContainer ViewStyles={LoginStyle.mainContainer}>
        <ScrollView>
          <KeyboardAvoidingView behavior='position'>
            <IconButton iconName='angle-left' iconSize={40} iconColor='#ffffff' IconStyle={LoginStyle.backIcon} />
            <Text style={LoginStyle.loginText}>Log In</Text>
            <Kohana
              style={LoginStyle.inputStyle}
              keyboardType='email-address'
              returnKeyType='next'
              onSubmitEditing={() => this.passwordInput.focus()}
              autoCapitalize='none'
              label={'Email'}
              iconClass={Icon}
              iconName={'at'}
              iconColor={'#341f97'}
              labelStyle={{ color: '#91627b' }}
              inputStyle={{ color: '#91627b' }}
              onChangeText={email => this.setState({ email })}
              useNativeDriver
            />
            {
              this.state.errorCode === 'invalid-email' || this.state.errorCode === 'user-not-found' ?
                <Text style={LoginStyle.errorView}>{this.state.errorCode}</Text> : null
            }
            <Kohana
              style={LoginStyle.inputStyle}
              secureTextEntry={true}
              label={'Password'}
              iconClass={Icon}
              iconName={'key'}
              iconColor={'#ee5253'}
              labelStyle={{ color: '#91627b' }}
              inputStyle={{ color: '#91627b' }}
              ref={input => this.passwordInput = input}
              onChangeText={password => this.setState({ password, disable: false })}
              onSubmitEditing={this.handleLogIn.bind(this)}
              useNativeDriver
            />
            {
              this.state.errorCode === 'wrong-password' ?
                <Text style={LoginStyle.errorView}>{this.state.errorCode}</Text> : null
            }
            <CustomButton
              loading={this.state.loading}
              disabled={this.state.disable}
              buttonTextStyle={LoginStyle.textStyle}
              buttonStyle={[LoginStyle.loginButton, this.state.disable && LoginStyle.disableButtonStyle]}
              onBtnPress={this.handleLogIn.bind(this)}
              textToBeShown='Log In' />

            <View style={LoginStyle.noteContainer}>
              <Text style={LoginStyle.noteTextStyle}>New Here ? </Text>
              <TouchableOpacity onPress={() => navigate('Signup')}>
                <Text style={LoginStyle.noteTextStyle}> Sign Up</Text>
              </TouchableOpacity>
            </View>


          </KeyboardAvoidingView>
        </ScrollView>
      </ViewContainer>
    );
  }
}

