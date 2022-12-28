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
import {
	getFirestore,
	getDoc,
	doc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
} from 'firebase/firestore';

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

export const addCollectionAndDoc = async (collectionKey, dataArr, field) => {
	const collectionRef = collection(db, collectionKey);
	//transactions
	const batch = writeBatch(db);
	console.log(dataArr);
	dataArr.forEach((data) => {
		const docRef = doc(collectionRef, data[field]);
		batch.set(docRef, data);
	});

	await batch.commit();
	console.log('done');
};

export const getCategoriesAndDocs = async () => {
	const collectionRef = collection(db, 'categories');
	const q = query(collectionRef);
	const querySnapshot = await getDocs(q);
	const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
		const { title, items } = docSnapshot.data();
		acc[title.toLowerCase()] = items;
		return acc;
	}, {});

	return categoryMap;
};

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
	return userSnapshot;
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

export const getCurrentUser = () =>
	new Promise((resolve, reject) => {
		const unsubscribe = onAuthStateChanged(
			auth,
			(user) => {
				unsubscribe();
				resolve(user);
			},
			reject
		);
	});
