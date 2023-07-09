import CategoryNews from "../components/CategoryNews"
import { articleList } from "../services/DbRead"

const SportsFilter = () => {
    return(
        <div className="normalWidth mx-auto mt-5 d-flex flex-column gap-4">

            {articleList.map((object) => {
                return(object.category == "esportes" && <CategoryNews path={`/${object.id}`} title={object.title} author={`${object.author} | ${object.publishDate}`} content={object.contents}/>)
            })}

            <CategoryNews  path="/medalha-de-ouro-no-futebol" title="Equipe brasileira conquista medalha de ouro em torneio internacional de futebol" author="Gabriel Silva | 05/08/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod accusamus maiores qui aut, temporibus ut quae odio ratione esse nostrum dolore ea architecto non eveniet cupiditate assumenda placeat, ullam velit quasi dicta inventore a. At facere in inventore eaque modi. Illo, animi. Nihil doloremque porro eveniet repellat amet tempora sapiente."/>
            <CategoryNews  path="/atleta-quebra-recorde-nacional" title="Atleta recordista mundial de natação quebra seu próprio recorde em competição nacional" author="Isabela Santos | 12/09/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod accusamus maiores qui aut, temporibus ut quae odio ratione esse nostrum dolore ea architecto non eveniet cupiditate assumenda placeat, ullam velit quasi dicta inventore a. At facere in inventore eaque modi. Illo, animi. Nihil doloremque porro eveniet repellat amet tempora sapiente."/>
            <CategoryNews  path="/torneio-grand-slam" title="Jovem promessa do tênis vence torneio de Grand Slam e se destaca no cenário mundial" author="Rafael Lima | 19/07/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod accusamus maiores qui aut, temporibus ut quae odio ratione esse nostrum dolore ea architecto non eveniet cupiditate assumenda placeat, ullam velit quasi dicta inventore a. At facere in inventore eaque modi. Illo, animi. Nihil doloremque porro eveniet repellat amet tempora sapiente."/>
            <CategoryNews  path="/feito-inedito-no-basquete-feminino" title="Equipe de basquete feminino realiza feito inédito e garante vaga nas Olimpíadas" author="Juliana Pereira | 27/06/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod accusamus maiores qui aut, temporibus ut quae odio ratione esse nostrum dolore ea architecto non eveniet cupiditate assumenda placeat, ullam velit quasi dicta inventore a. At facere in inventore eaque modi. Illo, animi. Nihil doloremque porro eveniet repellat amet tempora sapiente."/>
            <CategoryNews  path="/recorde-sul-americano-em-maratona" title="Corredor brasileiro quebra recorde sul-americano de maratona em prova desafiadora" author="Lucas Ferreira | 04/11/2023" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod accusamus maiores qui aut, temporibus ut quae odio ratione esse nostrum dolore ea architecto non eveniet cupiditate assumenda placeat, ullam velit quasi dicta inventore a. At facere in inventore eaque modi. Illo, animi. Nihil doloremque porro eveniet repellat amet tempora sapiente."/>
        </div>
    )
}

export default SportsFilter