import {Pressable, Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Link} from "expo-router";


export default function Index() {
    return (
        <View style={{
            flex: 1,
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "blue"
        }}>
            <Text>Welcome to Draftbook!</Text>

            <Link href="/signin" asChild>
                <Pressable>
                    <Text>Sign In</Text>
                </Pressable>
            </Link>


            <Link href="/signup" asChild>
                <Pressable>
                    <Text>Sign Up</Text>
                </Pressable>
            </Link>
        </View>

    )
}
