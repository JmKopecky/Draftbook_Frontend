import React, { useState } from 'react';
import {Pressable, Text, StyleSheet, Animated, useAnimatedValue, StyleProp, View} from "react-native";
import {accentColor, textColor} from "@/assets/constants";


type AnimButtonProps = {
    content: string;
    runWhenPressed: any;
    addedStyles: any;
}

const AnimButton = (props: AnimButtonProps) => {
    const bgAnimValue = new Animated.Value(0);
    const textAnimValue = new Animated.Value(0);

    let bgColor = bgAnimValue.interpolate({
        inputRange: [0,1],
        outputRange: ['rgba(231,72,13,0)', 'rgba(231,72,13,255)']
    });
    let textColor = textAnimValue.interpolate({
        inputRange: [0,1],
        outputRange: ['rgba(231,72,13,255)', 'rgba(8,8,16,255)']
    });


    return (
        <Pressable
        onHoverIn={() => {
            Animated.parallel([
                Animated.timing(bgAnimValue, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(textAnimValue, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                    delay: 0
                })
            ]).start();
        }}
        onHoverOut={() => {
            Animated.parallel([
                Animated.timing(bgAnimValue, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(textAnimValue, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                })
            ]).start();
        }}
        onPress={() => {
            props.runWhenPressed();
        }}>
            <Animated.View style={[styles.button, {backgroundColor: bgColor}, props.addedStyles]}>
                <Animated.Text style={[styles.buttonText, {color: textColor}]}>
                    {props.content}
                </Animated.Text>
            </Animated.View>


        </Pressable>
    )
}

export default AnimButton;


const styles = StyleSheet.create({
    button: {
        borderRadius: 15,
        padding: 10,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: accentColor
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'Space Mono',
        textAlign: "center",
    }
});