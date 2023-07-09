import { useForm } from 'react-hook-form'
import addUserToFirebase, { error } from '../../services/DbManipulation'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import registro from '../../assets/entrar.png'
import AlreadyLogged from '../../components/AlreadyLogged'


const Register = () => {

    const [errorMessage, setErrorMessage] = useState()
    const navigate = useNavigate()

    async function handleActionSubmit(data) {
        await addUserToFirebase(data)

        if (error) {
            setErrorMessage("Já existe um usuário cadastrado com este e-mail!")
        }

        else {
            navigate("/login")
        }
    } 

    if (sessionStorage.getItem("Logged") == "true") {
        return(
            <AlreadyLogged/>
    )
    }


    const { register, handleSubmit, formState: { errors } } = useForm()

    return(
        <div className="authContainer d-flex align-items-center">
            <form className="d-flex flex-column authCard mx-auto p-4 justify-content-between rounded" onSubmit={handleSubmit(handleActionSubmit)}>
                <div className="d-flex justify-content-center flex-column align-items-center gap-3 mt-3">
                    <h1 className="text-center actionTitle">Registro</h1>
                    <img src={registro} className="actionIcon"/>
                </div>
                <div className="d-flex flex-column mb-2 gap-1">
                    <div className="d-flex flex-column">
                    {errorMessage && <p className="m-0 text-center text-danger mb-2 p-0">{errorMessage} <Link to="/login">Realizar login</Link></p>}
                        <label htmlFor="userName" className="formLabel">Seu nome:</label>
                        <input className="textInput registerInput rounded" {...register("userName", {required: true})} type="text" name="userName"/>
                        {errors.userName?.type === "required" && <p className="text-danger p-0 m-0 registerErrorInfo">O nome de usuário é necessário!</p>}
                    </div>
                    <div className="d-flex flex-column">
                        <label htmlFor="email" className="formLabel">E-mail:</label>
                        <input className="textInput registerInput rounded" {...register("email", {required: true})} type="email" name="email"/>
                        {errors.email?.type === "required" && <p className="text-danger p-0 m-0 registerErrorInfo">O E-mail é necessário!</p>}
                    </div>
                    <div className="d-flex flex-column">
                        <label htmlFor="passWord" className="formLabel">Senha:</label>
                        <input className="textInput registerInput rounded" {...register("passWord", {required: true})} type="password" name="passWord"/>
                        {errors.passWord?.type === "required" && <p className="text-danger p-0 m-0 registerErrorInfo">A senha é necessária!</p>}
                        <button type="submit" className="submitButton rounded mx-sm-auto mt-3">Registrar</button>
                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default Register