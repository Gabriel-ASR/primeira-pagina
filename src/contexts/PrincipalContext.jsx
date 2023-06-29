import { createContext, useState } from "react";

const PrincipalContext = createContext(
    {
        newsID: 1,
        newsTitle: '',
        newsContent: '',
        newsAuthor: '',
        newsDate: '',
    }
)

export function PrincipalContextProvider(props) {

    const [NewsInfo, setNewsInfo] = useState({
        newsTitle: 'CEO do Facebook publica nova declaração sobre o recente vazamento de dados',
        newsContent: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti optio libero facere modi corporis veniam neque, quasi, minima laudantium est quisquam possimus quae ea alias repudiandae nisi harum dolores odit cumque magnam tempora nihil blanditiis voluptatem aspernatur! Eaque assumenda cum.',
        newsAuthor: 'José da Silva',
        newsDate: '26/04/2023',
    })

    const contexto = 
        {
            newsTitle: NewsInfo.newsTitle,
            newsContent: NewsInfo.newsContent,
            newsAuthor: NewsInfo.newsAuthor,
            newsDate: NewsInfo.newsDate,
        }
    
    return(
        <PrincipalContext.Provider value={contexto}>
            {props.children}
        </PrincipalContext.Provider>
    )
}

export default PrincipalContext