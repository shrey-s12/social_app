import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { loadPosts } from "./slices/postSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadPosts());
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
