import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";
import { selectPosts } from "../redux/posts/selectors";
import { getAllPosts } from "../redux/posts/thunk";
import { db } from "../config";
import { collection, onSnapshot, query } from "firebase/firestore";
import { setActualPosts } from "../redux/posts/slice";

export const usePosts = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const posts = useSelector(selectPosts);

  useEffect(() => {
    const q = query(collection(db, "posts"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
      });
      dispatch(setActualPosts(posts));
    });
    dispatch(getAllPosts());

    return () => unsubscribe();
  }, [dispatch]);

  return { user, posts };
};
