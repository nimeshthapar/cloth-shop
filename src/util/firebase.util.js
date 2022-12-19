import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, getDoc, doc, setDoc } from 'firebase/firestore';
/*const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DB_URL,
	projectId: process.env.REACT_APP_PID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MSG_SID,
	appId: process.env.REACT_APP_APP_ID,
};*/

const firebaseConfig = {
	apiKey: 'AIzaSyCGgjh1bAtPyTPoO5SY5LnT1ftBJTbB6Wo',
	authDomain: 'product-a7a2c.firebaseapp.com',
	databaseURL: 'https://product-a7a2c-default-rtdb.firebaseio.com',
	projectId: 'product-a7a2c',
	storageBucket: 'product-a7a2c.appspot.com',
	messagingSenderId: '63329167825',
	appId: '1:63329167825:web:0dfb9d101a9bccf683d8f0',
};

export const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(app);

export const createUserDocHandler = async (userData, config = {}) => {
	const userDocRef = doc(db, 'users', userData.uid);

	const userSnapshot = await getDoc(userDocRef);
	if (!userSnapshot.exists()) {
		const { displayName, email } = userData;
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...config,
			});
		} catch (err) {
			console.log('There is error: ', err.message);
		}
	}
	return userDocRef;
};

export const createUserWithEmailHandler = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmailAndPasswordHandler = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthListenerChange = (callback) =>
	onAuthStateChanged(auth, callback);
