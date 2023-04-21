import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { amsSlice } from './service/amsSlice'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider api={amsSlice}>
        <App />
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
