import {db} from '../config/firebase';
import { updateDoc,doc } from 'firebase/firestore';
import { actions } from "../store";
export const setRevisionHistory = async (revisionHistory,dispatch,user,title,desc) => { 
  const item = `The post titled "${title}" is ${desc} on ${new Date()}`;
  const newRevisionHistory = [item, ...revisionHistory];
  dispatch(actions.changeCurrentUserRevisionHistory(newRevisionHistory));
  const userRef = doc(db, "users", user.id);
  const newUser = { ...user, revisionHistory: newRevisionHistory };
  //console.log(newRevisionHistory,user);
  await updateDoc(userRef, newUser);
};
