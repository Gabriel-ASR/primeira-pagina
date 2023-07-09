import CategoryNews from "../components/CategoryNews"
import { articleList } from "../services/DbRead"


const PoliticsFilter = () => {
    return (
        <div className="normalWidth mx-auto mt-5 d-flex flex-column gap-4">

            {articleList.map((object) => {
                return(object.category == "politica" && <CategoryNews path={`/${object.id}`} title={object.title} author={`${object.author} | ${object.publishDate}`} content={object.contents}/>)
            })}

            <CategoryNews path="/reforma-sistema-eleitoral" title="Novo projeto de lei visa promover reformas no sistema eleitoral do país" author="Carlos Mendes | 10/02/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?" />
            <CategoryNews path="/acordo-de-cooperacao-pais-vizinho" title="Presidente assina acordo de cooperação bilateral durante visita oficial a país vizinho" author="Ana Santos | 25/05/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?" />
            <CategoryNews path="/partidos-fazem-alianca" title="Partidos políticos anunciam aliança para as próximas eleições presidenciais" author="Marcelo Oliveira | 08/08/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?" />
            <CategoryNews path="/supremo-tribunal-constitucionalidade" title="Supremo Tribunal decide sobre constitucionalidade de lei controversa" author="Renata Silva | 17/10/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?" />
            <CategoryNews path="/camara-dos-deputados-projeto-de-lei" title="Câmara dos Deputados aprova projeto de lei para investimentos em infraestrutura" author="Gustavo Almeida | 29/12/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?" />
        </div>
    )
}

export default PoliticsFilter