import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Main from './pages/Main';
import Login from './pages/Login';
import Navbar from './components/Navbar';

// 공통 Layout
const Layout = () => {
  return (
    <>
      {/* 공통 스타일 적용 하기 위함 */}
      <Navbar />
      {/* router dom 적용 element */}
      <Outlet />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Main router */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="main" element={<Main />} />
        </Route>
        
        {/* login이라고 하면 바로 루트경로로 옮겨주기 위함 */}
        <Route path="/login" element={<Layout />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
