import { Link } from "react-router-dom";

interface Props{
    user: string;
}

export const Sidebar = ({user}:Props ) => {


    return (
        <div className="sidebar col-lg-10">
    
            <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        En AuditaDocs puedes realizar muchas cosas cosas con tus documentos de investigación
                    </div>
                    <div className="dropdown mt-3">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link  className="nav-link active" to="#">
                                    <i className="bi bi-house-door"></i> 
                                    Perfil: <> </> 
                                    { user }
                                </Link >
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" to="/dashboard/docs">
                                    <i className="bi bi-file-earmark-text"></i> Documentos
                                </Link >
                            </li>
                            
                            <li className="nav-item">
                                <Link  className="nav-link" to="#">
                                    <i className="bi bi-envelope"></i> Mensajes
                                </Link >
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" to="#">
                                    <i className="bi bi-gear"></i> Configuración
                                </Link >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
