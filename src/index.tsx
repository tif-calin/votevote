import 'react-app-polyfill/stable';
import 'core-js/features/array/at';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import './styles/index.css';
import { MemoizedChangelogPage } from './views/changelog';
import { MemoizedHomePage } from './views/home';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MemoizedHomePage />} />
          <Route path="/changelog" element={<MemoizedChangelogPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

