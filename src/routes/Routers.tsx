import React from "react";
import { Dashboard } from "@/pages/Dashboard";
import { Route, Routes } from "react-router-dom";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};
