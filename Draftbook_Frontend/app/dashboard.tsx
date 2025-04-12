import * as Constants from "@/assets/constants";
import {Text, View, StyleSheet} from "react-native"
import styles from "@/components/stylesheet/defaults";
import React, {useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Util from "@/assets/functions";


const dashboardScreen = () => {
    const [token, onChangeToken] = React.useState('no_token');
    const [mode, onChangeMode] = React.useState('Works');

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
                <View style={[dashboardStyles.dashboardSidebarElement,
                    mode == "Works" ?
                        dashboardStyles.sidebarElementSelected : dashboardStyles.sidebarElementUnselected]}>
                    <Text style={[styles.h6]}>Works</Text>
                </View>
                <View style={[dashboardStyles.dashboardSidebarElement,
                    mode == "Goals" ?
                        dashboardStyles.sidebarElementSelected : dashboardStyles.sidebarElementUnselected]}>
                    <Text style={[styles.h6]}>Goals</Text>
                </View>
                <View style={[dashboardStyles.dashboardSidebarElement,
                    mode == "Stats" ?
                        dashboardStyles.sidebarElementSelected : dashboardStyles.sidebarElementUnselected]}>
                    <Text style={[styles.h6]}>Stats</Text>
                </View>
                <View style={[dashboardStyles.dashboardSidebarElement,
                    mode == "Account" ?
                        dashboardStyles.sidebarElementSelected : dashboardStyles.sidebarElementUnselected]}>
                    <Text style={[styles.h6]}>Account</Text>
                </View>
                <View style={[dashboardStyles.dashboardSidebarElement,
                    mode == "Settings" ?
                        dashboardStyles.sidebarElementSelected : dashboardStyles.sidebarElementUnselected]}>
                    <Text style={[styles.h6]}>Settings</Text>
                </View>
            </View>
            <View style={{
                backgroundColor: Util.darken(Constants.backgroundRGBA, "1%"),
                height: "100%",
                width: "80%"
            }}>

            </View>
        </View>
    )
}

export default dashboardScreen;


const dashboardStyles = StyleSheet.create({
    dashboardSidebarElement: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 15,
        width: "100%",
        borderStyle: "solid",
        borderWidth: 5,
        borderColor: Util.darken(Constants.backgroundRGBA, "1%")
    },
    sidebarElementSelected: {
        backgroundColor: Util.darken(Constants.backgroundRGBA, "1%")
    },
    sidebarElementUnselected: {
        backgroundColor: Constants.backgroundColor
    },
    test: {
        borderColor: "#ff0000"
    }
})