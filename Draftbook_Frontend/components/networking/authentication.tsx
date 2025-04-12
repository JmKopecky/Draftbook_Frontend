import AsyncStorage from '@react-native-async-storage/async-storage';
import {tSVoidKeyword} from "@babel/types";


const targetURL = 'https://draftbook.jkopecky.dev/api/auth/';


export async function signUp(username: string, password: string):Promise<boolean> {
    //make sure we aren't creating an account that already exists
    try {
        if (await doesExist(username)) {
            console.log("Username already exists");
            await clearStoredData();
            return false;
        }
    } catch (e) {
        console.log("Encountered error determining if username exists: authentication.signUp()");
        console.log(e);
        await clearStoredData();
        return false;
    }

    //attempt to create account (send request)
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

    //attempt to create account (read response)
    const data = await response.json();
    if (data["error"] !== undefined) {
        if (data["error"] === "authenticate_parse") {
            await clearStoredData();
            return false;
        }
        if (data["error"] === "username_taken") {
            await clearStoredData();
            return false;
        }
        if (data["error"] === "none" && data["authenticated"]) { //success!
            let token:string = data["token"];
            const storeData = async (token:string) => {
                try {
                    const test = await AsyncStorage.setItem("token", token);
                } catch (e) {
                    // saving error
                    console.log("Error encountered in saving data");
                    console.log(e);
                    await clearStoredData();
                    return false;
                }
            };
            await storeData(token);
            return true;
        }
    }
    await clearStoredData();
    return false;
}



export async function signIn(username:string, password:string) {
    try {
        if (!await doesExist(username)) {
            console.log("Username does not exist"); //todo logic to inform the user that the account does not exist
            await clearStoredData();
            return false;
        }
    } catch (e) {
        console.log("Encountered error determining if username exists: authentication.signIn()");
        console.log(e);
        await clearStoredData();
        return false;
    }

    //send request to sign in
    const response = await fetch(targetURL + 'authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        }),
    });

    //parse response data
    const data = await response.json();
    if (data["error"] !== undefined) {
        if (data["error"] === "authenticate_parse") {
            await clearStoredData();
            return false;
        }
        if (data["error"] === "account_nonexistent") {
            await clearStoredData();
            return false;
        }
        //store sign in data if successful
        if (data["error"] === "none" && data["authenticated"]) { //success!
            console.log(data);
            let token:string = data["token"];
            console.log(token)
            const storeData = async (token:string) => {
                try {
                    await AsyncStorage.setItem('token', token);
                } catch (e) {
                    // saving error
                    console.log("Error encountered in saving data");
                    console.log(e);
                    await clearStoredData();
                    return false;
                }
            };
            await storeData(token);
            return true;
        }
    }
    await clearStoredData();
    return false;
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


async function clearStoredData() {
    await AsyncStorage.removeItem('token');
}