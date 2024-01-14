import React, { useContext, useEffect} from 'react'
import Logo from "./imgs/logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const Header = () => {
  const navigate = useNavigate();
  const {userInfo, setUserInfo} = useContext(UserContext);
  useEffect(()=>{
    fetch('https://secret-room-backend.onrender.com/profile',{
      credentials:'include',
    }).then(response=>{
      response.json().then(userInfo=>{
          setUserInfo(userInfo);
      })
    })
  },[setUserInfo])

  function logout(){
      fetch('https://secret-room-backend.onrender.com/logout',{
      credentials:'include',
      method:'POST',
    });
    setUserInfo(null);
    navigate('/');
  } 

  const username = userInfo?.username;

  return (
    <>
      <nav className="navbar max-width m-auto">
        <div className="left">
           <Link to="/"> <img src={Logo} alt="logo"/> </Link>
        </div>
        
        <div className="right">
              <ul>
                {username && (
                  <>
                    <li><Link to="/create">SHARE YOUR SECRET</Link></li>
                    <li onClick={logout}><Link>LOGOUT</Link></li>
                    {/* <li onClick={logout}>LOGOUT</li> */}
                  </>
                )}
                {!username && (
                  <>
                    <li><Link to="/login">LOGIN</Link></li>
                    <li><Link to="/register">REGISTER</Link></li>
                  </>
                )}
            </ul>
        </div>
      </nav>
      <div className='max-width m-auto'>
        <hr/>
      </div>
    </>
  )
}

export default Header;
