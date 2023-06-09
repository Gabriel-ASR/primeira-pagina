import CategoryNews from "../components/CategoryNews"
import { articleList } from "../services/DbRead"

const HealthFilter = () => {
    return (
        <div className="normalWidth mx-auto mt-5 d-flex flex-column gap-4">

            {articleList.map((object) => {
                return(object.category == "saude" && <CategoryNews path={`/${object.id}`} title={object.title} author={`${object.author} | ${object.publishDate}`} content={object.contents}/>)
            })}

            <CategoryNews path="/estudo-revela-avanco" title="Estudo revela avanços promissores no tratamento de doença cardíaca" author="Gabriela Silva | 10/04/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?" />
            <CategoryNews path="/vacina-contra-coronavirus" title="Vacina contra nova variante do vírus é desenvolvida por equipe de pesquisadores" author="Lucas Almeida | 20/06/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?" />
            <CategoryNews path="/pesquisa-indica-relacao" title="Pesquisa indica relação entre alimentação saudável e redução de riscos de câncer" author="Camila Oliveira | 05/08/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?" />
            <CategoryNews path="/terapia-inovadora-oferece-esperanca" title="Terapia inovadora oferece esperança para pacientes com doença rara" author="Rafaela Costa | 15/10/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?" />
            <CategoryNews path="/estudo-revela-beneficios" title="Estudo revela os benefícios da prática regular de exercícios físicos para a saúde mental" author="Pedro Fernandes | 28/12/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?" />
        </div>
    )
}

export default HealthFilter