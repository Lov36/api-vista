import './stylecategories.css';
import { useState, useEffect } from 'react';

async function loader() {
  const res = await fetch(URL);
  const data = await res.json();
  const vec = Object.values(data);
}

export function Card() {
  const url = 'https://guarded-brook-10489.herokuapp.com/api/v1/categories'
  const [categories, setCategories] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setCategories(responseJSON)
  }
  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <>
    { !categories ? 'Cargando...':
      categories.map((categorie)=>{
        return(
              <>
              <div className="flip-card-back">
            <h2>
              Mas detalles
              <span> -- </span>
            </h2>
          </div>
          <div className="image_container"></div>
          <div className="text_back">
            <div>
              <h1 > {categorie.name}  </h1>
              <h5 > {categorie.categoryId} </h5>
              <p>
                A pesar de que una marca no define la calidad del producto, las
                marcas tienen sus propias caracteristicas, ya sean en software como
                hardware
              </p>
              <span> See more -- </span>
            </div>
          </div>
          </>
        )
      })
    } 
    </>
    
  );
}



