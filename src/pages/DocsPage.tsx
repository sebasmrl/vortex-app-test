import { Link } from "react-router-dom"

export const DocsPage = () => {
  return (
    <div className="container">
      <h1>Mis Documentos</h1>

      <div className="row">
        <div className="col-md-12"></div>

        <div className="list-group">
          <Link to="/dashboard/document-editor" className="list-group-item list-group-item-action" aria-current="true">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Prototipo de Niveles de Gestion</h5>
              <small><b>Última Actividad: </b> 3 dias </small>
            </div>
            <p className="mb-1">Autor: Pedro Castañeda</p>
            <small><b>Última Actividad: </b> 1 día </small>
          </Link>
          <Link to="/dashboard/document-editor" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Registro Regional de Fuentes Hidricas Sostenibles</h5>
              <small className="text-body-secondary"><b>Última Actividad: </b> 3 dias </small>
            </div>
            <p className="mb-1">Autor: Juan Lopez Lorena</p>
            <small className="text-body-secondary"><b>Ultima Actividad: </b> 3 dias </small>
          </Link>
          <Link to="/dashboard/document-editor" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Implementacion de modelo de IA para la prediccion de transacciones fraudulentas</h5>
              <small className="text-body-secondary"><b>Ultima Actividad: </b> 6 dias </small>
            </div>
            <p className="mb-1">Autor: Sebastian Morales</p>
            <small className="text-body-secondary"><b>Ultima Actividad: </b> 6 dias </small>
          </Link>
        </div>
      </div>
    </div>
  )
}
