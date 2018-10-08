import { StyleSheet } from 'react-native';

export const LoginStyle = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#222f3e'
    },
    backIcon: {
        flexDirection: 'row',
        marginHorizontal: 40,
        marginVertical: 20
    },
    loginText: {
        color: '#ffffff',
        fontFamily: 'sans-serif-condensed',
        fontWeight: '900',
        fontSize: 30,
        marginHorizontal: 40,
        marginVertical: 30,
    },
    inputStyle: {
        borderRadius: 5,
        width: 'auto',
        marginHorizontal: 30,
        marginVertical: 20,
    },
    loginButton: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        backgroundColor: '#c0392b',
        marginHorizontal: 30,
        marginVertical: 20,
    },
    disableButtonStyle: {
        backgroundColor: '#ff7675'
    },
    textStyle: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '900',
        fontSize: 20,
    },
    iconStyle: {
        marginBottom: 30,
    },
    noteContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
    },
    noteTextStyle: {
        color: '#ffffff'
    },
    errorView: {
        alignSelf: 'center',
        fontWeight: '900',
        color: '#f1c40f'
    }
})