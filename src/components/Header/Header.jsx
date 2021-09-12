import React from 'react';
import { Link } from 'react-router-dom';
import user from 'images/user.jpeg';
import './Header.scss';
import Search from 'components/Search/Search';
export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="header-right">
        <div>
          <Search />
        </div>
        <div className="user-image">
          <img src={user} alt="user" />
        </div>
      </div>
    </header>
  );
}
