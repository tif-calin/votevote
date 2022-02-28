import 'react-app-polyfill/stable';
import 'core-js/features/array/at';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/layout';
import './styles/index.css';
import { MemoizedChangelogPage } from './views/changelog';
import { MemoizedHomePage } from './views/home';

const App = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    const element = document.querySelector('header');
    if (element) element?.scrollIntoView();
  }, [pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MemoizedHomePage />} />
        <Route path="/changelog" element={<MemoizedChangelogPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

