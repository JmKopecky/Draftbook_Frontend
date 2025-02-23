import AsyncStorage from '@react-native-async-storage/async-storage';
import {tSVoidKeyword} from "@babel/types";


const targetURL = 'https://draftbook.jkopecky.dev/api/auth/'



export async function signUp(username: string, password: string):Promise<boolean> {
    try {
        if (await doesExist(username)) {
            console.log("Username already exists");
            return false;
        }
    } catch (e) {
        console.log("Encountered error determining if username exists: authentication.signUp()");
        console.log(e);
        return false;
    }


    const response = await fetch(targetURL + 'create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        }),
    });

    const data = await response.json();
    if (data["error"] !== undefined) {
        if (data["error"] === "authenticate_parse") {
            return false;
        }
        if (data["error"] === "username_taken") {
            return false;
        }
        if (data["error"] === "none" && data["authenticated"]) {
            let usr: string = data["username"];
            let pw: string = data["password"];
            const storeData = async (usr: string, pw: string) => {
                try {
                    await AsyncStorage.setItem('username', usr);
                    await AsyncStorage.setItem('password', pw);
                } catch (e) {
                    // saving error
                    console.log("Error encountered in saving data");
                    console.log(e);
                    return false;
                }
            };
            storeData(usr, pw);
            return true;
        }
    }
    return false;
}



export function signIn(username:string, password:string) {
    try {
        if (!doesExist(username)) return; //todo: logic for user indication when provided info does not exist.
    } catch (e) {
        console.log("Encountered error determining if username exists: authentication.signIn()");
        console.log(e);
        return;
    }

    //todo implement sign in
}



async function doesExist(username:string):Promise<boolean> {
    const response = await fetch(targetURL + 'exists', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username
        }),
    });


    const data = await response.json();
    if (data["exists"] !== undefined) {
        if (data["exists"]) {
            return true;
        } else {
            return false;
        }
    } else {
        console.log("Error in authentication.doesExist(), dumping...");
        console.log(data);
        throw new Error("Error in assessing whether user exists");
    }
}