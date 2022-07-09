import { async } from "@firebase/util";
import { collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { User } from "../src/interface";


export const getAllUser = async () => {
    const newAllUsers: any[] = []
    const docRef = collection(db, 'users');
    const docSnap = await query(docRef);

    const allUsers = await getDocs(docSnap)
    // console.log();
    allUsers.forEach((doc: any) => {
        newAllUsers.push(doc.data())
        // console.log(doc.id, " => ", doc.data());
    });
    console.log(newAllUsers);

    return newAllUsers

    // return allUsers
}



export const getOneUser = async (Collection: string, Id: string) => {
    const docRef = doc(db, Collection, Id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // console.log("Document data:",docSnap.data());
        return docSnap.data()
    } else {
        console.log("No such document!");
    }
}



export const deleteUser = async (Collection: string, Id: string) => {
    const docRef = doc(db, Collection, Id);
    await deleteDoc(docRef);
    console.log('success');
}


export const createUser = async (Collection: string, data: User) => {
    const userCollection = collection(db, Collection)
    await setDoc(doc(userCollection, data.no.toString()), data);
    console.log('success');
}

export const updateUser = async (Collection: string, Id: string, data: any) => {
    const userCollection = doc(db, Collection, Id)
    await updateDoc(userCollection, data);
    console.log('success');
}