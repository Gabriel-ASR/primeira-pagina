import { useForm } from 'react-hook-form'
import dbUserQuery, { errorMessage } from '../../services/DbRead'
import { useNavigate } from 'react-router-dom'
import perfil from '../../assets/perfil.png'
import { Link } from 'react-router-dom'
import AlreadyLogged from '../../components/AlreadyLogged'


const Login = () => {

    const navigate = useNavigate()

    async function handleActionSubmit(data) {

        await dbUserQuery(data)

        if (sessionStorage.getItem("Logged") == "true") {
            navigate("/")
        }    
        
    }
    
    if (sessionStorage.getItem("Logged") == "true") {
        return(
            <AlreadyLogged/>
    )
    }

    const { register, handleSubmit, formState: { errors } } = useForm()

    return(
        <div className="mx-auto d-flex justify-content-center align-items-center authContainer">
            <form className="d-flex flex-column authCard p-4 justify-content-between justify-content-xxl-around rounded" onSubmit={handleSubmit(handleActionSubmit)}>
                <div className="d-flex justify-content-center flex-column align-items-center gap-3 mt-3">
                    <h1 className="text-center actionTitle">Login</h1>
                    <img src={perfil} className="actionIcon"/>
                </div>
                <div className="d-flex flex-column mb-4 gap-4">
                    <div className="d-flex flex-column">
                        {errorMessage  == "Usuário não cadastrado." ? <p className="m-0 text-center text-danger mb-2">{errorMessage} <Link to="/registro">Realizar cadastro</Link></p> : errorMessage && <p className="m-0 text-center text-danger mb-2">{errorMessage}</p>}
                        <label htmlFor="email" className="formLabel">E-mail:</label>
                        <input {...register("email", {required: true})} type="text" className="textInput rounded" />
                        {errors.email?.type === "required" && <p className="text-danger m-0">O e-mail é necessário!</p>}
                    </div>
                    <div className="d-flex flex-column">
                        <label htmlFor="password" className="formLabel">Senha:</label>
                        <input {...register("password", {required: true})} type="password" className="textInput rounded"/>
                        {errors.password?.type === "required" && <p className="text-danger m-0">A senha é necessária!</p>}
                    </div>
                    <button type="submit" className="submitButton rounded mx-sm-auto">Entrar</button>
                </div>
            </form>
        </div>
    )
}

export default Login