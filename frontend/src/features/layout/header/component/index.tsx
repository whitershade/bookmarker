import React from 'react';
import { Link } from "react-router-dom";

const Component = ({ isAuthenticated, logout }: any) => (
  <header>
    <Link to="/">Articles</Link>
    <Link to="/articles/add">Add new</Link>

    { isAuthenticated ? (
        <button onClick={logout}>
            Logout
        </button>
    ): null }
  </header>
);

export default Component;