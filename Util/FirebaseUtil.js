import React from 'react';

import auth from '@react-native-firebase/auth';
export const signIn = async( text, password ) => {
        
    const t = await auth().signInWithEmailAndPassword( text, password );
    console.log( t )
        return t
        
};
    export const signUp= async(text,password)=>{
        const t = await auth().createUserWithEmailAndPassword( text, password );
        console.log( t )
        return t
   };
    export const signout= async()=>{
    const t = await auth().signout();
    console.log( t )
        return t
};
