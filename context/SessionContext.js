import { useContext, createContext, useState, useEffect } from 'react';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { auth, db } from '../FirbaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'expo-router';

const AuthContext = createContext();

export function useSession() {
  const value = useContext(AuthContext);
  if (!value) {
     throw new Error('useSession must be wrapped in a <SessionProvider />');
  }
  
  return value;
}

export function SessionProvider({ children }) {
  const [user, setUser] =useState(null);
  const [isAuth, setIsAuth] = useState(undefined);

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth, (user)=>{
      if(user){
        setIsAuth(true);
        setUser(user);
      }else{
        setIsAuth(false);
        setUser(null);
      }
    })
   return unsub;
  },[isAuth])

  const SignIn= async (email, password) => {
      
    try {

      const response = await signInWithEmailAndPassword(auth, email, password);
      //console.log('response user:', response?.user);

      return {success: true, data: response?.user};

    } catch (error) {

      let message = error.message;
      if(message.includes('(auth/invalid-email)')) message = 'Invalid email';
      if(message.includes('(auth/invalid-credential)')) message = 'Incorrect password';
      return {success: false, message};

    }
  }
  const SignUp = async (email, password, username)=> {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      //console.log('response user:', response?.user);

      setDoc(doc(db, 'users', response?.user?.uid),{ username, userId: response?.user?.uid });

      return { success: true, data: response?.user};

    } catch (error) { 
      let message = error.message;
      if(message.includes('(auth/invalid-email)')) message = 'Invalid email';
      if(message.includes('(auth/weak-password)')) message = 'Password should be at least 6 characters';
      return { success: false, message};
    }
 
  }

  const SignOut = async ()=> {
    
    try {
      await signOut(auth);
      return {success: true};
    } catch (error) {
      return {success: false, message: error.message};
    }
    
  }

  return (
    <AuthContext.Provider value={{ SignIn, SignUp, SignOut, isAuth, user}}>
      {children}
    </AuthContext.Provider>
  );
}
