// Function-based component
import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (

        <header>
            <h1 style={headerStyle}>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )    
}

const linkStyle = {
    textDecoration: 'none'
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;


