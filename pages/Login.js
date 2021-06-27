import React from 'react';
import { useState } from 'react';
import {
    signIn,
    signout,
    signUp
} from '../Util/FirebaseUtil';
// import firebase from "@react-native-firebase/app";
import firebase from 'firebase'
require('firebase/auth')

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

export default function LoginScreen(){
    const[text,setText]=useState(null);
    const[password,setPassword]=useState(null);
    const[create,setCreate]=useState(false);
    // const signIn=()=>{FirebaseAuth.signIn(text,password)}
    // const signUp = () => { FirebaseAuth.signUp( text, password ) }

    
    return(
        <View>
            <TextInput 
                placeholder="usename"
                onChangeText={setText}
                value={text}
            />
            <TextInput
               placeholder="enter password"
                onChangeText={setPassword}
               value={password}
               secureTextEntry={true}
             />
             {create ? (
                 <>
                  <Button title="sign up" onPress={()=>signUp(text,password)} />
                  <Text onPress={()=>setCreate(false)}>sign in</Text>
                  {/* console.log(text) */}
                 </>
             ):(
                 <>
                    <Button title="sign in" onPress={()=>signIn(text,password)} />
                    <Text onPress={()=>setCreate(true)}>create an account</Text>
                 </>

             )}

            


 
        </View>

    )
}