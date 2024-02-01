import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';
import '../styles/mainSection.css';

const Motorcycles = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  if (!currentUser) return (<Navigate to="/login" />);
  return (
    <>
      <section className="mainUi">
        <Navbar />
        <Main />
      </section>
    </>
  );
};

export default Motorcycles;
