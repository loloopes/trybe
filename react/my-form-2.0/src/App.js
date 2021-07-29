import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <fieldset>
          <input type="text" id="name"/>
          <label htmlFor="name">Nome</label>

          <input type="email" id="email"/>
          <label htmlFor="email">Email</label>

          <input type="text" id="CPF" />
          <label htmlFor="CPF">CPF</label>

          <input type="text" id="endereco"/>
          <label htmlFor="endereco">Endereco</label>

          <input type="text" id="cidade"/>
          <label htmlFor="cidade">Cidade</label>

          <h3>Estado</h3>
          <select>
            <option>Op1</option>
            <option>Op2</option>
          </select>
          
          <h3>Tipo de residencia</h3>
          <input type="radio" id="Apartamento" name="residencia"/>
          <label htmlFor="Apartamento">Apartamento</label>
          <input type="radio" id="Casa" name="residencia"/>
          <label htmlFor="Casa">Casa</label>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
