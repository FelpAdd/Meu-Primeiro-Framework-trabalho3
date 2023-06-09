import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    const codigo = req.query.codigo;
    if (typeof codigo === 'string') {
      controleLivro.excluir(Number(codigo));
      res.status(200).json({ mensagem: 'Livro excluído com sucesso.' });
    } else {
      res.status(400).json({ mensagem: 'Código inválido.' });
    }
  } else {
    res.status(405).json({ mensagem: 'Método não permitido.' });
  }
};
