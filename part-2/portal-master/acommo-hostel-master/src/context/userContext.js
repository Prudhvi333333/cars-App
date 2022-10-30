// import { createContext, useState } from "react";
// import { createUserWithEmailAndPassword,
//     sendPasswordResetEmail,
//     signInwithEmailAndPassword
// }
// from "firebase/auth";
// import {auth} from "../firebase"
// const usercontex=createContext({});
// export const userContext ={}=>userContext(usercontex);

// export const userContext=({children})=>{
//     const [user,setUser]=useState(null);
//     const [loading,setLoading]=useState();
//     const [error,setError]=useState("");

//     const signInUser=(email,name,passowrd)=>{
//         setLoading(true)
//         signInwithEmailAndPassword(auth,email,passowrd)
//         .then((res)=>//console.log(res))
//         .catch((err)=>setError(err.messsage))
//         .finally(() =>setLoading(false))
//     }

//     const forgotpass=(email)=>{
//         return sendPasswordResetEmail(auth,email)
//     }

//     const contextvalue={
//         user,
//         loading,
//         error,
//         signInUser,I
//         forgotpass,
//     }

// }
