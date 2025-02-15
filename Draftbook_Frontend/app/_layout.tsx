import { Slot } from 'expo-router';
import { useMediaQuery } from 'react-responsive'
import {View, Text} from "react-native";

export default function RootLayout() {

  return (<>

    <Slot/>

    </>);
}
