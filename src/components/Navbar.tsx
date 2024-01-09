import { Link } from "react-router-dom"
import { useValidLogged } from "../hooks";
import { useQueryClient } from "@tanstack/react-query";

export const Navbar = () => {

    const client = useQueryClient();
    const logged = useValidLogged();
    
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">AuditaDocs</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="#">¿Quienes Somos?</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link " to="/" >Contactanos</Link>
                        </li>
                        {
                            (logged) && <li className="nav-item ">
                                            <Link className="nav-link " to="/dashboard" >Dashboard</Link>
                                        </li>
                        }
                        

                    </ul>

                    {
                    (!logged)
                        ? <Link className="btn btn-outline-success"
                            to='./auth/login'>
                            Iniciar Session
                          </Link>
                        : <Link className="btn btn-outline-success"
                            to='./auth/login'
                            onClick={ ()=>{  
                                client.setQueryData(['user'], ()=>{
                                return;
                              });
                              }}>
                            Cerrar Sesión
                          </Link>
                    }


                </div>
            </div>
        </nav>
    )
}
