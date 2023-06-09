import { useState } from "react";
import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";
import { useNavigate } from "react-router-dom";
import './App.css';

const controleLivros = new ControleLivro();
const controleEditora = new ControleEditora();

const LivroDados = () => {
  const opcoes = controleEditora.getEditoras();
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].codEditora);
  const navigate = useNavigate();

  const handleEditoraChange = (event) => {
    setCodEditora(Number(event.target.value));
  };

  const handleIncluir = (event) => {
    event.preventDefault();
    const livro = {
      codigo: 0,
      codEditora: codEditora,
      titulo: titulo,
      resumo: resumo,
      autores: autores.split("\n"),
    };
    controleLivros.incluir(livro);
    navigate("/");
  };

  return (
    <main className="container">
      <h2>Dados do Livro</h2>
      <form onSubmit={handleIncluir}>
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input
            id="titulo"
            className="form-control"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="resumo">Resumo</label>
          <textarea
            id="resumo"
            className="form-control"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="editora">Editora</label>
          <select
            id="editora"
            className="form-control"
            value={codEditora}
            onChange={handleEditoraChange}
          >
            {opcoes.map((item) => (
              <option key={item.codEditora} value={item.codEditora}>
                {item.nome}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="autores">Autores</label>
          <textarea
            id="autores"
            className="form-control"
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Salvar Livro
        </button>
      </form>
    </main>
  );
};

export default LivroDados;
