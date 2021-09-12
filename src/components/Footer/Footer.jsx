import React from 'react';
import './Footer.scss';
export default function Footer() {
  return (
    <footer className="footer">
      <div>Movie App</div>
      <div>&copy;{new Date().getFullYear()} Movie, Inc. or its affiliates</div>
    </footer>
  );
}
