import './barra.css';

export function Barrita() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <a href="./productos.html">
              <i class="bi bi-shop"></i>
              <p>Productos</p>
            </a>
          </li>
          <li>
            <a href="./Usuarios.html">
              <i class="bi bi-people"></i>
              <p>Usuarios</p>
            </a>
          </li>
          <li>
            <a href="./Pedidos.html">
              <i class="bi bi-send"></i>
              <p>Pedidos</p>
            </a>
          </li>
          {/* <li>
            <a href="./Categories.html">
              <i class="bi bi-journal-text"></i>
              <p>Categoria</p>
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
