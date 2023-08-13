import {db} from '../config/firebase';
import { deleteDoc,doc } from 'firebase/firestore';
export const deletePostHandler = async (postId) => {
    const articleDoc = doc(db, "articles", postId);
    await deleteDoc(articleDoc);
  };