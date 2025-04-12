import * as Constants from "@/assets/constants";
import {Text, View} from "react-native"
import styles from "@/components/stylesheet/defaults";
import React, {useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


const dashboardScreen = () => {
    const [token, onChangeToken] = React.useState('no_token');

    useEffect(() => {
        const firstLoad = async () => {
            try {
                const savedToken = await AsyncStorage.getItem("token");
                if (savedToken) {
                    onChangeToken(savedToken);
                }
            } catch (err) {
                console.log(err);
            }
        };
        firstLoad();
    }, []);


    return (
        <View style={{
            backgroundColor: Constants.backgroundColor,
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: 50,
            height: "100%",
            width: "100%"
        }}>
            <View style={{
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                height: "90%",
                width: "15%"
            }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: 5,
                    width: "100%"
                }}>
                    <Text style={[styles.h6]}>Account</Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: 5,
                    width: "100%"
                }}>
                    <Text style={[styles.h6]}>Goals</Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: 5,
                    width: "100%"
                }}>
                    <Text style={[styles.h6]}>Works</Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: 5,
                    width: "100%"
                }}>
                    <Text style={[styles.h6]}>Stats</Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: 5,
                    width: "100%"
                }}>
                    <Text style={[styles.h6]}>Settings</Text>
                </View>
            </View>
            <Text style={[styles.p, {paddingBottom: 20}]}>{token}</Text>
        </View>
    )
}

export default dashboardScreen;