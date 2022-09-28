import'../Usuarios/styExcel.css'
import { useState,useEffect } from 'react';


function ButtonHT({ name }) {
  return (
      <li>
        <button>
          <i className='material-icons'>{name}</i>
          </button>
      </li>
  );
}

export function HeaderTools() {
  return (
    <div className="datatable-container">
      <div className="header-tools">
        <div className="tools">
          <ul>
            <li>
              <span>
                <input type="checkbox" />
              </span>
            </li>
            <ButtonHT name="Crear" />
            <ButtonHT name="Actualizar" />
            <ButtonHT name="Eliminar" />
          </ul>
          <div className="search">
          <input type="text" className="search-input"/>
          </div>
        </div>
      </div>
      <Table/>
    </div>
  );
}

export function Table() {
  return (
    <>
      <table className="datatable">
        <thead>
          <tr>
            <th></th>
            <th>Id</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <InfTable/>
        </tbody>
      </table>
      <Footer />
    </>
  );
}



function InfTable() {
  const url = 'https://guarded-brook-10489.herokuapp.com/api/v1/ordenes'
  const [ordenes, setOrdenes] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setOrdenes(responseJSON)
  }
  useEffect(() => {
    fetchApi()
  }, [])
  
  return (
    <>
    { !ordenes ? 'Cargando...':
      ordenes.map((ordenen)=>{
        return(
          <tr>
          <td className="table-chekbox">
            <input type="checkbox"></input>
          </td>
          <td>{ordenen.ordenId}</td>
          <td>{ordenen.userId}</td>
          <td>{ordenen.number}</td>
          <td>{ordenen.name}</td>
        </tr>
        )
      })
    }
    </>
  );
}

function Footer() {
  return (
    <div className="footer-tools">
      <div className="list-items">
      Show
      <select>
        <option value="15">5</option>
        <option value="10" >
          10
        </option>
        <option value="15">15</option>
      </select>
      entries
      <div className="pages">
      <ul>
        <li>
          <span className="active">1</span>
        </li>
        <li>
          <button>2</button>
        </li>
        <li>
          <button>3</button>
        </li>
        <li>
          <button>4</button>
        </li>
        <li>
          <button>...</button>
        </li>
        <li>
          <button>9</button>
        </li>
        <li>
          <button>10</button>
        </li>
      </ul>
      </div>
      
    </div>
    </div>
    
  );
}
