import {StyleSheet} from 'react-native';
import {textColor} from '@/assets/constants';


const style = StyleSheet.create({
    p: {
        fontSize: 12,
        color: textColor
    },
    h1: {
        fontSize: 38,
        color: textColor
    },
    h2: {
        fontSize: 34,
        color: textColor
    },
    h3: {
        fontSize: 30,
        color: textColor
    },
    h4: {
        fontSize: 26,
        color: textColor
    },
    h5: {
        fontSize: 22,
        color: textColor
    },
    h6: {
        fontSize: 18,
        color: textColor
    },
    button: {
        borderRadius: 15,
        padding: 10,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: textColor
    },
    buttonText: {
        fontSize: 16,
        textAlign: "center",
        color: textColor
    },
    textCentered: {
        textAlign: "center"
    }
})

export default style