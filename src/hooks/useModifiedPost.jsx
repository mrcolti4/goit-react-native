import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot, query } from "firebase/firestore";

import { selectCurrentPost } from "../redux/posts/selectors";
import { selectUser } from "../redux/auth/selectors";
import { setPost } from "../redux/posts/slice";

import { db } from "../config";

export const useModifiedPost = () => {
  const dispatch = useDispatch();
  const post = useSelector(selectCurrentPost);
  const user = useSelector(selectUser);

  useEffect(() => {
    const q = query(collection(db, "posts"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.docChanges().forEach((doc) => {
        if (doc.type === "modified") {
          dispatch(setPost({ ...doc.doc.data(), id: doc.doc.id }));
        }
      });
    });
    return () => unsubscribe();
  }, [dispatch]);

  return { post, user };
};
