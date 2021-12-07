import { getAuth, signInWithPopup } from "@firebase/auth";
import { googleAuth } from "../../firebase/firebase-config";
import { types } from "../../types/types"



export const startLoginEmailPassword=(email,password)=>{
    return(dispatch)=>{
        setTimeout(() => {
            dispatch(login(123,'choli'))
        },3500 );
    }
}

export const startGoogleLogin=()=>{
    return(dispatch)=>{
        const auth = getAuth();
        signInWithPopup(auth,googleAuth)
        .then(({user})=>{
           dispatch(
               login(user.uid,user.displayName)
           )
        })
    }
}
export const login=(uid,displayName)=>{
    return {
        type:types.login,
        payload:{
            uid,
            displayName
        }
    }
}