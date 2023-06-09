import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import { ControleEditora } from '../classes/controle/ControleEditora';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/Home.module.css';

const baseURL = 'http://localhost:3000/api/livros';

interface Livro {
  codigo: number;
  titulo: string;
  resumo: string;
  autores: string[];
  codEditora: number;
}

async function incluirLivro(livro: Livro) {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(livro),
  });
  return response.ok;
}

const LivroDados: React.FC = () => {
  const controleEditora = new ControleEditora();
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(1);
  const router = useRouter().push;

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const livro: Livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora,
    };

    const sucesso = await incluirLivro(livro);
    
      router('/Livrolista');
    
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Livro - Dados</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main>
        <h1>Dados do Livro</h1>
        <form onSubmit={incluir}>
            <div className='mb-3'>
          <label className="form-label" htmlFor="titulo">Título:</label>
          <input className="form-control"
            type="text"
            id="titulo"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
          />
          </div>

             <div className='mb-3'>
          <label className="form-label" htmlFor="resumo">Resumo:</label>
          <textarea className="form-control"
            id="resumo"
            value={resumo}
            onChange={(event) => setResumo(event.target.value)}    
          >

          </textarea></div>

             <div className="mb-3">
          <label className="form-label" htmlFor="autores">Autores:</label>
          <textarea className="form-control"
            id="autores"
            value={autores}
            onChange={(event) => setAutores(event.target.value)}
          ></textarea></div>
             
             <div className="mb-3">
          <label className="form-label" htmlFor="editora">Editora:</label>
          <select className="form-control" id="editora" value={codEditora} onChange={tratarCombo}>
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
          </div>
          <button className="btn btn-primary" type="submit">Incluir</button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
