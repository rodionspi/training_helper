import { db } from "../../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import User from "@/types/User";
import { getAuth } from "firebase/auth";

const addUser = async (formValues: User) => {
  const {name, email, password} = formValues;
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: name,
      email: email,
      password: password
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

const getUser = async (formValues: User) => {
  const {email, password} = formValues;
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    for (const doc of querySnapshot.docs) {
      const data = doc.data();
      if (data.password === password && data.email === email) {
        return data; 
      }
    }
    return null
  } catch (error) {
      console.error("Ошибка при получении коллекции:", error);
      return null
  }
}

export {addUser, getUser};