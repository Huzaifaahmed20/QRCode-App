import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import firebase from 'react-native-firebase';
import Signup from '../Sign Up/Signup';

var collection = firebase.firestore().collection('users')


export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        // this.unsubscribe = null;
        // this.state = {

        // }
    }

    // componentDidMount() {
    //     // var user = firebase.auth().currentUser;
    //     // console.warn(user.email)
    //     // console.warn(user.uid)
    //     // console.warn(typeof (user.uid))
    //     // this.unsubscribe = collection.where('uid', '==', user.uid).onSnapshot(this.onCollectionUpdate)
    // }
    // componentWillUnmount() {
    //     // this.unsubscribe();
    // }
    // onCollectionUpdate(snap) {
    //     // snap.forEach(doc => {
    //     //     console.warn(doc.data());
    //     // });
    // }

    render() {
        return (
            <View >
                <Text>Dashboard with drawer</Text>
                {/* <Button
                    onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    title="Open Drawer"
                /> */}
            </View >
        )
    }

}

