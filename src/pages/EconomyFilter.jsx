import CategoryNews from "../components/CategoryNews"
import { articleList } from "../services/DbRead"

const EconomyFilter = () => {

    return (
        <div className="normalWidth mx-auto mt-5 d-flex flex-column gap-4">

            {articleList.map((object) => {
                return(object.category == "economia" && <CategoryNews path={`/${object.id}`} title={object.title} author={`${object.author} | ${object.publishDate}`} content={object.contents}/>)
            })}

            <CategoryNews path="/mercado-atinge-novo-recorde" title="Mercado de criptomoedas atinge novo recorde de capitalização em meio à crescente adoção" author="Gustavo Almeida | 30/11/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?"/>
            <CategoryNews path="/medidas-economicas-setores-produtivos" title="País anuncia medidas econômicas para impulsionar setores produtivos e estimular o crescimento" author="Fernanda Silva | 18/06/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?"/>
            <CategoryNews path="/alta-historica-da-bolsa" title="Bolsa de Valores registra alta histórica após divulgação de resultados financeiros positivos" author="André Santos | 05/09/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?"/>
            <CategoryNews path="/inflacao-estavel-no-ultimo-trimestre" title="Inflação permanece estável no último trimestre, trazendo alívio aos consumidores" author="Renata Rodrigues | 23/07/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?"/>
            <CategoryNews path="/relatorio-economico-crescimento-pib" title="Novo relatório econômico prevê crescimento robusto do PIB no próximo ano" author="Leonardo Costa | 10/05/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda beatae natus quaerat adipisci a explicabo ratione voluptatum, laboriosam, repellat eligendi eius aut libero in quis voluptatibus veniam asperiores molestias nesciunt tempora mollitia? Debitis pariatur sapiente quisquam. Asperiores magni nobis nemo corporis, reprehenderit velit omnis eos sed, est voluptatibus similique?"/>
        </div>
    )
}

export default EconomyFilter