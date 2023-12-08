import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";
import { selectPosts } from "../redux/posts/selectors";
import { getAllPosts } from "../redux/posts/thunk";

export const usePosts = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return { user, posts };
};
