import CategoryNews from "../components/CategoryNews"
import { articleList } from "../services/DbRead"

const FoodFilter = () => {
    return (
        <div className="normalWidth mx-auto mt-5 d-flex flex-column gap-4">

            {articleList.map((object) => {
                return(object.category == "alimentacao" && <CategoryNews path={`/${object.id}`} title={object.title} author={`${object.author} | ${object.publishDate}`} content={object.contents}/>)
            })}

            <CategoryNews path="/estudo-revela-beneficios-organicos" title="Novo estudo revela os benefícios do consumo regular de alimentos orgânicos" author="Isabela Santos | 15/03/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?" />
            <CategoryNews path="/chef-renomado-receitas-saudaveis" title="Chef renomado apresenta receitas saudáveis e saborosas em novo livro de culinária" author="Lucas Almeida | 28/06/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?" />
            <CategoryNews path="/alimentos-funcionais-popularidade" title="Alimentos funcionais ganham popularidade como aliados da saúde e bem-estar" author="Mariana Oliveira | 12/09/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?" />
            <CategoryNews path="/pesquisa-revela-impacto-dieta" title="Pesquisa revela os impactos da dieta vegetariana na saúde e no meio ambiente" author="Gustavo Fernandes | 24/11/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?" />
            <CategoryNews path="/tendencia-gastronomica" title="Nova tendência gastronômica promove a valorização de ingredientes regionais" author="Carolina Mendes | 30/12/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?" />
        </div>
    )
}

export default FoodFilter