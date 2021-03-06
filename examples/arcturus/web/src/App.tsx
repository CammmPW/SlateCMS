import './pages';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ContextProviders, Client, DataPolling, Router } from 'slate-frontend';

export function App() {
  return (
    <ContextProviders>
      <Router />
      <Client/>
      <DataPolling/>
      <ToastContainer />
    </ContextProviders>
  );
}
