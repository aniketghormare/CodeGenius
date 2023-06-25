import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
    // let links=[
    //     { to:"/", text:"Home"},
    //     { to:"/login", text:"Login"},
    //     { to:"/register", text:"Signup"}
    // ]
  return (
    <DIV>
     <div>
     <Link  to={'/'}>Home</Link>
     </div>
     <div id='menu'>
     <Link  to={'/login'}>Login</Link>
     <Link  to={'/register'}>Signup</Link>
     <Link  to={'/interview'}>Interview</Link>
     </div>
    </DIV>
  )
}

const DIV=styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
    padding-left: 30px;
    background-image: linear-gradient(to right, #8360c3, #2ebf91);

    #menu{
        display: flex;
        width: 200px;
        justify-content: space-between;
        padding-right: 30px;
    }
`

export default NavBar
