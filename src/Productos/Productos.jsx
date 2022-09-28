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
            <th>CategoriaId</th>
            <th>Id</th>
            <th>name</th>
            <th>Price</th>
            <th>URL</th>
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
  const url = 'https://guarded-brook-10489.herokuapp.com/api/v1/products'
  const [productos, setProductos] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setProductos(responseJSON)
  }
  useEffect(() => {
    fetchApi()
  }, [])
  
  return (
    <>
    { !productos ? 'Cargando...':
      productos.map((producto)=>{
        return(
          <tr>
          <td className="table-chekbox">
            <input type="checkbox"></input>
          </td>
          <td>{producto.categoryId}</td>
          <th>{producto.id}</th>
          <td>{producto.name}</td>
          <td>{producto.price}</td>
          <td>{producto.image}</td>
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
