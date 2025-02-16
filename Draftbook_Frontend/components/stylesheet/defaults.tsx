import {StyleSheet} from 'react-native';
import {textColor} from '@/assets/constants';
import * as Constants from "@/assets/constants";


const style = StyleSheet.create({
    p: {
        fontSize: 12,
        fontFamily: 'Roboto Mono',
        color: textColor
    },
    h1: {
        fontSize: 38,
        fontFamily: 'Space Mono',
        color: textColor
    },
    h2: {
        fontSize: 34,
        fontFamily: 'Space Mono',
        color: textColor
    },
    h3: {
        fontSize: 30,
        fontFamily: 'Space Mono',
        color: textColor
    },
    h4: {
        fontSize: 26,
        fontFamily: 'Space Mono',
        color: textColor
    },
    h5: {
        fontSize: 22,
        fontFamily: 'Space Mono',
        color: textColor
    },
    h6: {
        fontSize: 18,
        fontFamily: 'Space Mono',
        color: textColor
    },
    textCentered: {
        textAlign: "center"
    },
    textInput: {
        backgroundColor: `rgba(${Constants.backgroundColorArr[0]},${Constants.backgroundColorArr[1]},${Constants.backgroundColorArr[2]},0)`,
        borderRadius: 15,
        padding: 10,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: Constants.accentColor,
        fontSize: 12,
        fontFamily: 'Roboto Mono',
        color: Constants.textColor,
        transitionProperty: 'color',
        transitionDuration: '0.5s'
    },
    textInputInvalid: {
        color: 'red'
    }
})

export default style