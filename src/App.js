import React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";

export default function App() {
  // react query client
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path=':imageId' element={<DetailsPage />} />
      </Routes>
    </QueryClientProvider>
  );
}
