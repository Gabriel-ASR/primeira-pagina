import CategoryNews from "../components/CategoryNews"
import { articleList } from "../services/DbRead"


const BusinessFilter = () => {
    return (
        
        <div className="normalWidth mx-auto mt-5 d-flex flex-column gap-4">

            {articleList.map((object) => {
                return(object.category == "negocios" && <CategoryNews path={`/${object.id}`} title={object.title} author={`${object.author} | ${object.publishDate}`} content={object.contents}/>)
            })}

            <CategoryNews path="/fintech-alcanca-investimento" title="Startup brasileira de fintech alcança investimento recorde em rodada de financiamento" author="Lucas Menezes | 15/03/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod accusamus maiores qui aut, temporibus ut quae odio ratione esse nostrum dolore ea architecto non eveniet cupiditate assumenda placeat"/>
            <CategoryNews path="/gigante-do-varejo-plataforma" title="Gigante do varejo lança plataforma de comércio eletrônico inovadora" author="Camila Oliveira | 02/07/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod accusamus maiores qui aut, temporibus ut quae odio ratione esse nostrum dolore ea architecto non eveniet cupiditate assumenda placeat, ullam velit quasi dicta inventore a. At facere in inventore eaque modi. Illo, animi. Nihil doloremque porro eveniet repellat amet tempora sapiente."/>
            <CategoryNews path="/empresa-de-tecnologia-parceria" title="Empresa de tecnologia anuncia parceria estratégica para expansão internacional" author="Marcelo Santos | 19/04/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod accusamus maiores qui aut, temporibus ut quae odio ratione esse nostrum dolore ea architecto non eveniet cupiditate assumenda placeat, ullam velit quasi dicta inventore a. At facere in inventore eaque modi. Illo, animi. Nihil doloremque porro eveniet repellat amet tempora sapiente."/>
            <CategoryNews path="/estudo-revela-tendencias-consumo" title="Estudo revela as tendências de consumo que estão impulsionando o mercado global" author="Juliana Rodrigues | 08/06/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod accusamus maiores qui aut, temporibus ut quae odio ratione esse nostrum dolore ea architecto non eveniet cupiditate assumenda placeat, ullam velit quasi dicta inventore a. At facere in inventore eaque modi. Illo, animi. Nihil doloremque porro eveniet repellat amet tempora sapiente."/>
            <CategoryNews path="/ceo-renomado-assume-lideranca" title="CEO renomado assume liderança em conglomerado após escândalo financeiro" author="Rodrigo Almeida | 30/05/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod accusamus maiores qui aut, temporibus ut quae odio ratione esse nostrum dolore ea architecto non eveniet cupiditate assumenda placeat, ullam velit quasi dicta inventore a. At facere in inventore eaque modi. Illo, animi. Nihil doloremque porro eveniet repellat amet tempora sapiente."/>
        </div>
    )
}



export default BusinessFilter