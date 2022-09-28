import { useState, useEffect } from "react"
import './stylePU.css'

export function HeadeTools() {
  const url = "https://guarded-brook-10489.herokuapp.com/api/v1/products";
  const [productos, setProductos] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setProductos(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      {!productos
        ? "Cargando..."
        : productos.map((producto) => {
            return (
              <div className="box-container">
                <div className="box">
                  <i className="fab fa-angular"></i>
                  <h3>{producto.name}</h3>
                  <p>{producto.price}</p>
                </div>
              </div>
            );
          })}
    </>
  );
}
