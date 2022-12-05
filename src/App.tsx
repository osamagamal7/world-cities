import { useEffect } from "react";

import { getPosts } from "./features/posts/actions";
import { useAppDispatch, useAppSelector } from "./hooks/useTypedSelector";
import { Navigator } from "./Navigation/Navigator";

function App() {
  const dispatch = useAppDispatch();
  const { loading, postsData } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading || postsData === null) {
    return null;
  }

  return (
    <Navigator />
  );
}

export default App;
