import { StyleSheet } from 'react-native';

export const ThemeStyle = StyleSheet.create({
    viewConatiner: {
        flex: 1
    },
    customButtonStyle: {
        borderRadius: 5,
        shadowColor: '#f1c40f',
        shadowOpacity: 1,
        elevation: 10,
        shadowRadius: 25
    },
    btnTextStyle: {
        textAlign: 'center'
    },
    buttonLoading: {
        position: "absolute",
        marginTop: 13,
        left: 20
    },
});