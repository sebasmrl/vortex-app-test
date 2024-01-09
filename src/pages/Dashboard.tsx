import { Link, Outlet } from "react-router-dom"
import { Sidebar } from "../components"
import { useQueryClient } from "@tanstack/react-query"
import { User } from "../hooks";

export const Dashboard = () => {

  const client = useQueryClient();
  const user= client.getQueryData<User>(['user']);
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
        <a className="btn btn-primary m-2" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
              |||
            </a>
          <Link className="navbar-brand" to="/dashboard ">AuditaDocs</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/docs">Mis Documentos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/document-editor">Editor</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Configuración</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={ ()=>{ 
                  client.setQueryData(['user'], ()=>{
                    return {};
                  });
                }}>Cerrar Sesión</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <Sidebar user={ user?.email || 'Usuario'}/>

          {/* Contenido principal */}
          <main className="col-lg-12 ">  
                <div className="container">
                  <h1 className="h2">Dashboard</h1>
                  <p>Bienvenido al panel administrativo.</p>
                </div>
              
                <Outlet />
          </main>
        </div>
      </div>
    </>
  )
}
