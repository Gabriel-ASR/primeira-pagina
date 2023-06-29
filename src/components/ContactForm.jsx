import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

useForm

const ContactForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        navigate("/thankyou")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-4 gap-sm-5 justify-content-center smallWidth mx-auto">
            <div className="d-flex flex-column justify-content-center">
                <label className="formLabel"  htmlFor="name">Nome:</label>
                <input type="text" {...register("name", {required: true})} className="textInput p-2 rounded" name="name" id="name"/> 
                {errors.name?.type === "required" && <p className="text-danger">O nome é necessário!</p>}
            </div>
            <div className="d-flex flex-column justify-content-center">
                <label className="formLabel" htmlFor="email">E-mail:</label>
                <input type="email" {...register("email", {required: true})} className="textInput p-2 rounded" name="email" id="email"/>
                {errors.email?.type === "required" && <p className="text-danger">O email é necessário!</p>}
            </div>
            <div className="d-flex flex-column justify-content-center">
                <label className="formLabel" htmlFor="case">Sua Solicitação:</label>
                <textarea name="case" {...register("case", {required: true, minLength: 3})} id="case" cols="30" rows="10" className="textInput rounded"></textarea>
                {errors.case?.type === "required" && <p className="text-danger">Digite sua solicitação!</p>}
                {errors.case?.type === "minLength" && <p className="text-danger">Sua solicitação deve ter mais de 3 caracteres!</p>}
            </div>
            <button type="submit" className="rounded submitButton mx-sm-auto">ENVIAR</button>
        </form>
    )
}

export default ContactForm