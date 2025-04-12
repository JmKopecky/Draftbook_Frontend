import {Text, TextInput, View, Platform} from "react-native"
import * as Constants from "@/assets/constants"
import * as Util from "@/assets/functions"
import styles from "@/components/stylesheet/defaults"
import React from "react";
import AnimButton from "@/components/interactable/AnimButton";
import * as Auth from "@/components/networking/authentication";
import {Router, useRouter} from "expo-router";


const SignUpScreen = () => {
    const router = useRouter();

    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [confirmPassword, onChangeConfirmPassword] = React.useState('');

    const usernameRegex = /^[a-zA-Z-0-9]{6,36}$/
    const passwordRegex = /^[\w\S]{8,64}$/
    const [usernameValid, setUsernameValid] = React.useState(true as boolean);
    const [passwordValid, setpasswordValid] = React.useState(true as boolean);
    const [confirmPasswordValid, setconfirmPasswordValid] = React.useState(true as boolean);
    const [passwordsMatch, setpasswordsMatch] = React.useState(true as boolean);
    const [hasUserSubmitted, setHasUserSubmitted] = React.useState(false as boolean);


    return (
        <View //main/bg area
            style={{
                backgroundColor: Constants.backgroundColor,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 50
            }}>
            <View style={{ //sign in area
                padding: 50,
                borderRadius: 25,
                backgroundColor: Util.darken(Constants.backgroundRGBA, "1%"),
                justifyContent: "center",
                alignItems: "center",
                gap: 20
            }}>
                <Text style={[styles.h1, {paddingBottom: 20}]}>Sign Up</Text>
                <TextInput
                    style={[styles.textInput, usernameValid || !hasUserSubmitted ? null : styles.textInputInvalid, Platform.OS === 'web' && ({ outlineStyle: 'none' } as any)]}
                    placeholder={'Username'}
                    underlineColorAndroid={'transparent'}
                    value={username}
                    onChangeText={text => {
                        onChangeUsername(text);
                        setUsernameValid(usernameRegex.test(text))
                    }}
                ></TextInput>
                <TextInput
                    style={[styles.textInput, passwordValid || !hasUserSubmitted ? null : styles.textInputInvalid, Platform.OS === 'web' && ({ outlineStyle: 'none' } as any)]}
                    placeholder={'Password'}
                    underlineColorAndroid={'transparent'}
                    value={password}
                    onChangeText={text => {
                        onChangePassword(text);
                        setpasswordValid(passwordRegex.test(text));
                        setconfirmPasswordValid(passwordRegex.test(text));
                        setpasswordsMatch(text === confirmPassword);
                    }}
                ></TextInput>
                <TextInput
                    style={[styles.textInput, confirmPasswordValid && passwordsMatch || !hasUserSubmitted ? null : styles.textInputInvalid, Platform.OS === 'web' && ({ outlineStyle: 'none' } as any)]}
                    placeholder={'Confirm Password'}
                    underlineColorAndroid={'transparent'}
                    value={confirmPassword}
                    onChangeText={text => {
                        onChangeConfirmPassword(text);
                        setconfirmPasswordValid(passwordRegex.test(text));
                        setpasswordsMatch(password === text);
                    }}
                ></TextInput>
                <AnimButton content="Sign Up" runWhenPressed={() => {
                    setUsernameValid(usernameRegex.test(username));
                    setpasswordValid(passwordRegex.test(password));
                    setconfirmPasswordValid(passwordRegex.test(confirmPassword));
                    setpasswordsMatch(password === confirmPassword);
                    setHasUserSubmitted(true);
                    if (usernameValid && passwordValid && confirmPasswordValid && passwordsMatch) {
                        attemptSignUp(username, password, router);
                    }
                }} addedStyles={{width: '100%'}}/>
            </View>
        </View>
    )
}

export default SignUpScreen;



function attemptSignUp(username:string, password:string, router:Router) {
    Auth.signUp(username, password).then((result) => {
        if (result) {
            console.log("Signed up successfully");
            router.push('/dashboard');
        } else {
            console.log("Failed to sign up");
        }
    });
}