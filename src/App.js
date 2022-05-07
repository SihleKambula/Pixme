import React from "react";
import { Routes, Route } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path=':imageId' element={<DetailsPage />} />
      </Routes>
    </div>
  );
}
