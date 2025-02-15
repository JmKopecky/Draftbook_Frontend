import {Pressable, Text, View} from "react-native";
import {Link} from "expo-router";
import styles from "../components/stylesheet/defaults"
import {backgroundColor} from "@/assets/constants";


export default function Index() {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: backgroundColor,
            paddingTop: '10%',
            paddingBottom: '10%',
            rowGap: 10
        }}>
            <Text style={[styles.h1, styles.textCentered, {fontWeight: 'bold'}]}>Welcome to Draftbook!</Text>
            <Text style={[styles.h6, styles.textCentered]}>The solution to all your writing needs</Text>

            <View style={{
                justifyContent: "space-around",
                alignItems: "center",
                rowGap: 20,
                paddingTop: 50,
                minWidth: '10%'
            }}>
                <Link href="/signin" asChild style={{width: '100%'}}>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </Pressable>
                </Link>


                <Link href="/signup" asChild style={{width: '100%'}}>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </Pressable>
                </Link>
            </View>

        </View>

    )
}
