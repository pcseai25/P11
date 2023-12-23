import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../resourses/logo.png"

const Header = () => {
  return (
    <nav>
        {/* <h1>SyncHub</h1> */}
        <img src={logo} alt="sync-hub-logo" />
        <main>
            <Link to={"/"}>Home</Link>
            <Link to={"/Editorform"}>Live Editor</Link>
            <Link to={"/#Contact"}>Contact</Link>
            <Link to={"/#About"}>About</Link>
        </main>
    </nav>
  )
}

export default Header