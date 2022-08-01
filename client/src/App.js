import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CompanyPage, MainPage } from "./page";
import Format from './layout/format';

const App = () => {
  return (
    <Routes>
      <Route element={<Format></Format>}>
        <Route path="/" element={<MainPage />} />
        <Route path="/company" element={<CompanyPage />} />
      </Route>
    </Routes>
  );
}

export default App;
