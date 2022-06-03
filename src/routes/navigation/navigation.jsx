import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import { UserContext } from '../../contexts/user';

import { signOutUser } from '../../utils/firebase/firebase';
// import {ReactComponent as Crown} from "../../assets/crown.svg"
import './navigation.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  // console.log(currentUser);


  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo' to='/'>
          <Logo className='Logo' />
          {/* <Crown className='Logo'/> */}
        </Link>
        <div className='links'>
          <Link className='link' to='/shop'>
            Shop
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className='link' to='/auth'>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
