import {Pressable, Text, View} from "react-native";
import {Link, useNavigation, useRouter} from "expo-router";
import styles from "../components/stylesheet/defaults"
import {backgroundColor} from "@/assets/constants";
import AnimButton from "@/components/interactable/AnimButton";


export default function Index() {

    const router = useRouter();

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
            <Text style={[styles.p, styles.textCentered, {fontSize: 14}]}>The solution to all your writing needs</Text>

            <View style={{
                justifyContent: "space-around",
                alignItems: "center",
                rowGap: 20,
                paddingTop: 50,
                minWidth: '10%'
            }}>
                <AnimButton content="Sign In" runWhenPressed={() => {
                    router.push('/signin');
                }} addedStyles={{width: '100%'}}/>


                <AnimButton content="Sign Up" runWhenPressed={() => {
                    router.push('/signup');
                }} addedStyles={{width: '100%'}}/>
            </View>

        </View>

    )
}
