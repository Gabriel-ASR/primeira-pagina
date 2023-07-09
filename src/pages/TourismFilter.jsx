import CategoryNews from "../components/CategoryNews"
import { articleList } from "../services/DbRead"

const TourismFilter = () => {
    return (
        <div className="normalWidth mx-auto mt-5 d-flex flex-column gap-4">

            {articleList.map((object) => {
                return(object.category == "turismo" && <CategoryNews path={`/${object.id}`} title={object.title} author={`${object.author} | ${object.publishDate}`} content={object.contents}/>)
            })}

            <CategoryNews path="/destino-nacional-e-eleito-melhor" title="Destino turístico nacional é eleito um dos melhores do mundo em pesquisa internacional" author="Juliana Oliveira | 12/03/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?"/>
            <CategoryNews path="/cidade-patrimonio-da-unesco" title="Cidade histórica recebe reconhecimento como Patrimônio Mundial da UNESCO" author="Lucas Mendes | 25/06/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?"/>
            <CategoryNews path="/atracao-turistica-experiencia-unica" title="Nova atração turística oferece experiência única em meio à natureza exuberante" author="Mariana Silva | 08/09/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?"/>
            <CategoryNews path="/pesquisa-revela-mais-procurados" title="Pesquisa revela os destinos mais procurados por viajantes aventureiros" author="Pedro Fernandes | 17/11/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?"/>
            <CategoryNews path="/resort-de-luxo-inaugurado" title="Resort de luxo é inaugurado em local paradisíaco, oferecendo experiências exclusivas" author="Gabriela Santos | 29/12/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?"/>
        </div>
    )
}

export default TourismFilter