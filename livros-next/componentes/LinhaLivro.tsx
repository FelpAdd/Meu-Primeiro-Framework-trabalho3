import { ControleEditora } from '../classes/controle/ControleEditora';
import Livro from '../classes/modelo/Livro'

interface LinhaLivroProps {
  livro: Livro;
  excluir: (index:number) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
  const controleEditora = new ControleEditora();

  return (
    <tr>
      <td>{livro.titulo}<button className="btn btn-danger" onClick={() => excluir(livro.codigo)} >
          Excluir
        </button></td>
      <td>{livro.resumo}</td>
      <td>{controleEditora.getNomeEditora(livro.codEditora)}</td>
      <td>
        <ul>
            {livro.autores.map((autor,index) => (
                <li key={index}>{autor}  </li>
            ))}
            
        </ul>
        
      </td>
    </tr>
  );
};
