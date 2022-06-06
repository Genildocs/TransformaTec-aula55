import './App.css';
import HelloWord from './components/HelloWord';
import CarroClass from './components/CarroClass';
import PessoaRegistro from './components/PessoaRegistro';

function App() {
  return (
    <div className="App">
      <h1>
        Trabalhando com ReactJs
      </h1>
      <p>
        Entendendo Class Component.
      </p>
      <HelloWord 
      name="Genildo"
      />
      <CarroClass 
      dono="Arivaldo"
      />
      <PessoaRegistro 
      nome="Marcos" 
      idade= {21} 
      sobrenome="Mendes" 
      trabalho="Desenvolvedor"
      />
    </div>
  );
}

export default App;
