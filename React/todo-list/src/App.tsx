import { useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";
import './styles/global.css';

function App() {

  useEffect(() => {
    console.log('Teste do useEffect');
  }, []);

  return (
      <>
        <Header />
        <Tasks />
      </>
  )
  
}

export default App;