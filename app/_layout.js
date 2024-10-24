import { Slot, Stack, Tabs, useRouter, useSegments } from "expo-router";
import { SessionProvider, useSession } from "../context/SessionContext";
import { useEffect } from "react";

const  AppLayout = () =>{

    const {isAuth} = useSession();
    const router = useRouter();
    const segments = useSegments();

    useEffect(()=>{
        if(typeof isAuth === 'undefined') return; 
        if(isAuth && segments[0]!== '(tabs)') router.replace('Home');
        if(isAuth ){
            router.replace('Home')
        }else if(!isAuth){
            router.replace('Onboarding');
        }
        
    },[isAuth]);

    return (
        <Slot />
    );
};


export default function RootLayout(){

    return (
        <SessionProvider>
            <AppLayout />
        </SessionProvider>
    );
}
