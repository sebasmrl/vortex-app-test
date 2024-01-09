import { useValidLogged } from "../hooks"
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}: React.PropsWithChildren) => {

    const logged = useValidLogged();
      return (
    <>
        {
          (logged)
            ?  children  
            : <Navigate to="/" replace />
        }
    </>
  )
}
