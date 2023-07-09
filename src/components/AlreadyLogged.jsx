import { Link, useNavigate } from "react-router-dom"

const AlreadyLogged = () => {

    const navigate = useNavigate()

    return(
    <div className="authContainer d-flex align-items-center">
            <div className="alreadyLoggedBackground mx-auto rounded d-flex flex-column justify-content-center">
                <h1 className="text-center">Você já está logado!</h1>
                <p className="text-center">para realizar o login em outra conta, faça <span className="text-danger" style={{cursor: "pointer"}} onClick={() => {

                    sessionStorage.removeItem("Logged")
                    sessionStorage.removeItem("UserId")

                    navigate("/")

                }}>Logout</span> e realize o login novamente.</p>
                <p className="text-center">Se isso foi um erro, clique <Link to="/" className="text-danger text-decoration-none">aqui</Link> para retornar.</p>
            </div>
        </div>
    )
}

export default AlreadyLogged