import { Link } from "react-router-dom"
import '../styles/ErrorPage.css'

export const ErrorPage = () => {
  return (
    <div className="error-page" >
        <h1 id="codigo-error">404</h1>
        <p id="msg-not-found">Page Not Found</p>
        <br />
          <Link className="btn btn-outline-danger btn-gohome" to="/">Go Home</Link>
    </div>
  )
}
