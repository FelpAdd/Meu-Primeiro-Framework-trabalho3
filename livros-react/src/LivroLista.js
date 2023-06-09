import { useState, useEffect } from "react";
import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";
import './App.css';

const controleLivros = new ControleLivro();
const controleEditora = new ControleEditora();

const LinhaLivro = ({ livro, excluir }) => {
  const [nomeEditora, setNomeEditora] = useState("");

  useEffect(() => {
    const obterNomeEditora = async () => {
      const nome = await controleEditora.getNomeEditora(livro.codEditora);
      setNomeEditora(nome);
    };

    obterNomeEditora();
  }, [livro.codEditora]);

  return (
    <tr>
      <td>
        <p>{livro.titulo}</p>
        <button type="button" className="btn btn-danger" onClick={() => excluir(livro.codigo)}>Excluir</button>
      </td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const obterLivros = async () => {
      const livrosObtidos = await controleLivros.obterLivros();
      setLivros(livrosObtidos);
      setCarregado(true);
    };

    obterLivros();
  }, []);

  const excluir = (codigo) => {
    controleLivros.excluir(codigo);
    setCarregado(false);
  };

  return (
    <main className="container">
      <h1>Catálogo de Livros</h1>
      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro
              key={livro.codigo}
              livro={livro}
              excluir={excluir}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
