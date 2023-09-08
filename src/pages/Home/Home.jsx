import React, { useContext } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import LOGO from "../../assets/logo.png";
import DataContext from "../../context/DataContext";

const Home = () => {
  const { loggedUser } = useContext(DataContext);
  return (
    <div className='home'>
      <header>
        <div className='img__container'>
          <img
            src={LOGO}
            alt='..'
            className='logo'
          />
        </div>
        <div className='home__button'>
          <button className='btn btn-primary'>Support The Developer</button>
          {loggedUser ? (
            <>
              <Link
                to='/dashboard'
                className='btn btn-primary scale transition'
              >
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link
                to='/login'
                className='btn btn-primary scale transition'
              >
                Login
              </Link>
              <Link
                to='/signup'
                className='btn btn-primary scale transition'
              >
                Register
              </Link>
            </>
          )}
        </div>
      </header>
      <main>
        <div className='text-center'>
          Welcome to Invetory app.
          <br /> In this app You can manage Stock Inventory.
        </div>
      </main>
    </div>
  );
};

export default Home;
