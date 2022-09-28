import React from 'react'
import ReactDOM from 'react-dom/client'
import { Barrita } from '../Barra/Barra';
import { Card,} from '../Categorias/Categories';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Barrita/>
    <div className="card">
    <Card />
    </div>
  </React.StrictMode>
)