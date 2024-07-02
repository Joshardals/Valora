import { initializeApp } from "firebase/app";

interface firebaseConfigProps {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

export function getApp() {
  const firebaseConfig: firebaseConfigProps = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN as string,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET as string,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID as string,
    appId: process.env.NEXT_PUBLIC_APP_ID as string,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID as string,
  };

  return new Promise((resolve, reject) => {
    try {
      const app = initializeApp(firebaseConfig);
      resolve(app);
    } catch (error: any) {
      resolve(null);
    }
  });
}
