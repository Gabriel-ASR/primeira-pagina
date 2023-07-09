import { useForm } from "react-hook-form"
import { addArticleToFirebase } from "../services/DbManipulation"
import { useNavigate } from "react-router-dom"
import { error } from "../services/DbManipulation"
import frown from '../assets/triste.png'
import { useState } from "react"

const NewArticle = () => {

    const {register, handleSubmit, formState: { errors }} = useForm()

    const [errorMessage, setErrorMessage] = useState()

    const navigate = useNavigate()

    async function handleActionSubmit(data) {
        await addArticleToFirebase(data)

        if (error) {
            setErrorMessage("Já há uma notícia cadastrada com este título!")
        }

        else {
            navigate(`/${data.newsCategory}-lista-noticias`)
            location.reload()
        }

    }

    if (sessionStorage.getItem("Logged") == null) {
        return (
            <div className="smallWidth mx-auto mt-5 text-center">
                <p className="m-0 " style={{fontFamily: "'Montserrat', sans-serif", fontWeight: "bold", fontSize: "clamp(1em, 1.2vw, 3em)"}}>ops...</p>
                <h1 style={{fontFamily: "'Montserrat', sans-serif", fontWeight: "bold"}}>Você deve estar logado para postar uma nova notícia!</h1>
                <img src={frown} className="mt-4" width="150px"/>
            </div>   
        )
    }

    return(
        <div>
            <h1 className="text-center mt-4 " style={{fontFamily: "'Montserrat', sans-serif", fontWeight: "bold"}}>Nova Notícia</h1>
            <form className='d-flex flex-column smallWidth mx-auto mt-3 gap-5' onSubmit={handleSubmit(handleActionSubmit)}>
                <div className="d-flex flex-column">
                    {errorMessage && <p className="text-center text-danger">{errorMessage}</p>}
                    <label htmlFor="newsTitle" className="formLabel">Título da notícia:</label>
                    <input {...register("newsTitle", {required: true})} type="text" name="newsTitle" className="textInput p-2 rounded"/>
                    {errors.newsTitle?.type === "required" && <p className="text-danger">O título da notícia é obrigatório!</p>}
                </div>
                <div className="d-flex flex-column">
                    <label htmlFor="newsCategory" className="formLabel">Selecione a categoria da notícia:</label>
                    <select {...register("newsCategory", {required: true})} name="newsCategory" className="textInput p-2 rounded">
                        <option value=""></option>
                        <option value="esportes">Esportes</option>
                        <option value="educacao">Educação</option>
                        <option value="economia">Economia</option>
                        <option value="politica">Política</option>
                        <option value="entretenimento">Entretenimento</option>
                        <option value="saude">Saúde</option>
                        <option value="tecnologia">Tecnologia</option>
                        <option value="ciencia">Ciência</option>
                        <option value="turismo">Turismo</option>
                        <option value="negocios">Negócios</option>
                        <option value="moda">Moda</option>
                        <option value="alimentacao">Alimentação</option>
                        <option value="jogos">Jogos</option>
                    </select>
                    {errors.newsCategory?.type === "required" && <p className="text-danger">Selecione a categoria!</p>}
                </div>
                    
                

                <div className="d-flex flex-column">
                <label htmlFor="newsContent" className="formLabel">Conteúdo da notícia:</label>
                <textarea {...register("newsContent", {required: true,  minLength: 10})} name="newsContent" className="textInput p-2" cols="30" rows="10"/>
                {errors.newsContent?.type === "required" && <p className="text-danger">Digite o conteúdo da notícia!</p>}
                </div>
                {errors.newsContent?.type === "minLength" && <p className="text-danger">A notícia deve ter ao menos 10 caracteres!</p>}
                <button type="submit" className="submitButton mx-sm-auto rounded">SALVAR</button>
            </form>
        </div>
    )
}

export default NewArticle