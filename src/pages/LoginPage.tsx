import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../hooks";
import { useQueryClient } from "@tanstack/react-query";

export const LoginPage = () => {

    const navigate = useNavigate();
    const client = useQueryClient();

    const { formData, handleChange, handleSubmit } = useForm({ email:'', password:'' });
  
    return (
        <>
      <Link className="btn btn-primary" to="/">Ir a home</Link>

      <div className="container py-4 ">
        <div className="row justify-content-center ">

          <div className="col-10  col-sm-8  col-md-6  mt-5  border border-primary rounded-3">
            <h3 className="display-8  mb-0 p-2  text-primary">AuditaDocs</h3>
            <hr className="bg-info  mt-0" />

            <div className="container">
              <form  onSubmit={ (e)=> handleSubmit(e, async()=>{
                    
                    //TODO Execute fetch to login endpoint 
                    console.log(formData)
                    // se usaría useMutation pero no se tiene backend
                    client.setQueryData(['user'], ()=>{
                      return formData;
                    });

                    navigate( '/dashboard', { state: { key: "value"}} );
              }
              )} >
                <div className="mb-3">
                 
                    <div className="mb-3">
                                    <label htmlFor="email" className="col-form-label">Correo</label>
                                    <div className="col-12">
                                        <input type="email" name="email" value={ formData.email } onChange={ handleChange}
                                            id="email" className="form-control" aria-describedby="emailHelp" required />
                                    </div>
                    </div>

                    <div className="mb-3 mt-3">
                      <label htmlFor="exampleInputPassword1"
                        className="form-label">Contraseña</label>
                      <input type="password" className="form-control" name="password" value={ formData.password}
                        id="exampleInputPassword1"   onChange={ handleChange } />
                    </div>
                    <div className="mb-3">
                      <p>Aún no tiens una cuenta, registrate <Link to={ `${location.origin}/auth/register` }>aquí</Link></p>
                      <a href="#">Olvide mi contraseña</a>
                    </div>
                    <button type="submit" className="btn btn-primary  mb-3">Iniciar Sesión</button>

                </div>
              </form>
            </div>

          </div>

        </div>
      </div>

      </>
    )
}
