import React from 'react'
import ReactDOM from 'react-dom/client'
import {HeaderTools, Table} from './Users'
import { Barrita } from '../Barra/Barra';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Barrita />
    <HeaderTools />
  </React.StrictMode>
)
