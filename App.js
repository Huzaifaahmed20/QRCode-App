
import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

// import { Auth, Drawer } from './/Routing/Routing';
// import firebase from 'react-native-firebase';

// import { ViewContainer, Loading } from './src/theme/Theme'
// import SplashScreen from 'react-native-smart-splash-screen';


export default class App extends Component {
  onSuccess(e) {
    Linking
      .openURL(e.data)
      .catch(err => console.warn('An error occured', err));
  }
  render() {
    return (
      <QRCodeScanner
        // ref={(node) => { this.scanner = node }}
        topContent={
          <Text style={{textAlign:'center',fontSize:20}}>
            Scan Any QRCode You Want
          </Text>
        }
        reactivate={true}
        showMarker={true}
        onRead={this.onSuccess.bind(this)}
      />
    )
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     return (
    //       <div>
    //         <Drawer />
    //       </div>
    //     )
    //   }

    //   else {
    //     return (
    //       <div>
    //         <Auth />
    //       </div>
    //     )
    //   }
    // })

  }
}