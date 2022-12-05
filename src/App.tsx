import { useEffect } from "react";

import { getPosts } from "./features/posts/actions";
import { useAppDispatch } from "./hooks/useTypedSelector";
import { Navigator } from "./Navigation/Navigator";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Navigator />
  );
}

export default App;
