import React from "react";
import './assets/image/react.svg';
import './components/styles/App.css'
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import article1Img from './assets/image/article1.png';
import article2Img from './assets/image/article2.jpg';
import article3Img from './assets/image/article3.avif';

// Componente em classe é uma classe que herda a classe Componentes do React, e retorna HTML dentro método render.
class App extends React.Component {

  // Método responsável por renderizar o contéudo HTML do nosso componente.
   render() {
      return (
      <>
        <Navbar />          
        <section id="articles">
          <Article 
            title="Designing Dashboard"
            provider="Nasa"
            description="Amet minim nom deserunt ullamco est sit aligua dolor do ameat sint. Velft officia consequat duis enim velt mollit. Exercitation venim consequet sunt nostrud amet"
            thumbnail={article1Img}
            />

          <Article 
            title="Vibrant Portraits of 2020"
            provider="SpaceNews"
            description="Amet minim nom deserunt ullamco est sit aligua dolor do ameat sint. Velft officia consequat duis enim velt mollit. Exercitation venim consequet sunt nostrud amet"
            thumbnail={article2Img}
            />

          <Article 
            title="36 Days of Malayalam type" 
            provider="SpaceFligth Now" 
            description="Amet minim nom deserunt ullamco est sit aligua dolor do ameat sint. Velft officia consequat duis enim velt mollit. Exercitation venim consequet sunt nostrud amet"
            thumbnail={article3Img}  
            />

          <Article
           title="Designing Dashboard"
           provider="Nasa"
           description="Amet minim nom deserunt ullamco est sit aligua dolor do ameat sint. Velft officia consequat duis enim velt mollit. Exercitation venim consequet sunt nostrud amet" 
           thumbnail={article1Img}
           />
        </section>
         
       
        
        
        
      </>
    )
  }
}

export default App;
