import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../../assets/logo.svg";
// import {ReactComponent as Crown} from "../../assets/crown.svg"
import "./navigation.scss"

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo' to="/">
          <Logo className='Logo'/>
          {/* <Crown className='Logo'/> */}
        </Link>
        <div className='links'>
          <Link className='link' to='/shop'>
            Shop
          </Link>
          <Link className='link' to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
