import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, collection, getDocs } from 'firebase/firestore';


// Initialize Firebase from .env file
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

// Initialize app
const app = initializeApp(firebaseConfig);
// Get firestore instance
const firestore = getFirestore();

const data = []

const __handleGetAllQualifications = async (myCollection) => {

    const querySnapshot = await getDocs(collection(firestore, myCollection));

    querySnapshot.forEach((doc) => {

        const response = doc.data()

        const dataToPush = {
            start: response.start,
            end: response.end,
            name: response.name,
            description: response.description,
        }
        data.push(response)
    });
    return data
}



export default __handleGetAllQualifications 