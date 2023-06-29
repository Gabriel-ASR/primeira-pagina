import { createContext, useState } from "react";

const SecondaryContext = createContext(
    {
        newsID: 1,
        newsTitle: '',
        newsContent: '',
        newsAuthor: '',
        newsDate: '',
    }
)

export function SecondaryContextProvider(props) {

    const [NewsInfo, setNewsInfo] = useState({
        newsTitle: 'Brasil Ganha Ouro em Atletismo',
        newsContent: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius reprehenderit vero omnis nemo doloribus exercitationem praesentium quidem autem tempora beatae, provident ad vitae?',
        newsAuthor: 'Domingues Rodrigues',
        newsDate: '23/05/2023',
    })

    const contexto = 
        {
            newsTitle: NewsInfo.newsTitle,
            newsContent: NewsInfo.newsContent,
            newsAuthor: NewsInfo.newsAuthor,
            newsDate: NewsInfo.newsDate,
        }
    
    return(
        <SecondaryContext.Provider value={contexto}>
            {props.children}
        </SecondaryContext.Provider>
    )
}

export default SecondaryContext