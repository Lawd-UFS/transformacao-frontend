import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Header/Header';
import { Footer } from '../Footer/Footer';
import './BaseLayout.css';

export const BaseLayout: React.FC = () => {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
