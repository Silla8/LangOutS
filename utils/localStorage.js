import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store"; 
import { useEffect, useState } from "react";

export async function setItemLocalAsync(key, value = null) {
    if (Platform.OS === 'web') {
      try {
        if (value === null) {
          localStorage.removeItem(key);
        } else {
          localStorage.setItem(key, value);
        }
      } catch (e) {
        console.error('Local storage is unavailable:', e);
      }
    } else {
      if (value == null) {
        await SecureStore.deleteItemAsync(key);
      } else {
        await SecureStore.setItemAsync(key, value);
      }
    }
  }

  export function getItemLocalAsync(key) {
    
    const [state, setState] = useState(null);
    
    useEffect(() => {
      if (Platform.OS === 'web') {
        try {
          if (typeof localStorage !== 'undefined') {
            setState(localStorage.getItem(key));
          }
        } catch (e) {
          console.error('Local storage is unavailable:', e);
        }
      } else {
        SecureStore.getItemAsync(key).then(value => {
          setState(value);
        });
      }
    }, [key]);
  
   
   
  
    return state;
  }