import React, { useEffect, useState } from "react";
import Layout from "./components/Layout/layout";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return <Layout currentId={currentId} setCurrentId={setCurrentId} />;
};

export default App;
