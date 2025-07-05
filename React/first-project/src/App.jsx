import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import './components/styles/App.css'


// Componente em classe é uma classe que herda a classe Componentes do React, e retorna HTML dentro método render.
function App() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const response = await     axios.get('https://api.spaceflightnewsapi.net/v4/articles');
      const newsData = response.data.results;
      setNews(newsData);
    }

    loadNews();
  }, []);

  // Método responsável por renderizar o contéudo HTML do nosso componente.
    return (
    <>
      <Navbar />          
      <section id="articles">
      { news.map((article) => {
          return(
            <Article 
              key={article.id}
              title={article.title}
              provider={article.news_site}
              description={article.summary}
              thumbnail={article.image_url}
            />
          )
        }) }
      </section>
    </>
  )
}

export default App;
