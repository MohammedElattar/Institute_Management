import React from "react";
import { useOutlet } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Dashboard from "./Dashboard";

const Home = () => {
  const outlet = useOutlet();
  return (
    <>
      <Header />
      <main>
        <Navbar />
        {outlet ? outlet : <Dashboard />}
      </main>
    </>
  );
};

export default Home;
