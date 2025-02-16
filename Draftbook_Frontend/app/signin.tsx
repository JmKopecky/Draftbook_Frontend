import {Text, TextInput, View, Platform} from "react-native"
import * as Constants from "@/assets/constants"
import * as Util from "@/assets/functions"
import styles from "@/components/stylesheet/defaults"
import React from "react";
import AnimButton from "@/components/interactable/AnimButton";


const SignOnScreen = () => {
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');


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
                <Text style={[styles.h1, {paddingBottom: 20}]}>Sign In</Text>
                <TextInput
                    style={[styles.textInput, Platform.OS === 'web' && ({ outlineStyle: 'none' } as any)]}
                    placeholder={'Username'}
                    underlineColorAndroid={'transparent'}
                    value={username}
                    onChangeText={text => onChangeUsername(text)}
                ></TextInput>
                <TextInput
                    style={[styles.textInput, Platform.OS === 'web' && ({ outlineStyle: 'none' } as any)]}
                    placeholder={'Password'}
                    underlineColorAndroid={'transparent'}
                    value={password}
                    onChangeText={text => onChangePassword(text)}
                ></TextInput>
                <AnimButton content="Sign In" runWhenPressed={() => {
                    console.log("SIGNING IN!");//todo implement
                }} addedStyles={{width: '100%'}}/>
            </View>

        </View>
    )
}

export default SignOnScreen;