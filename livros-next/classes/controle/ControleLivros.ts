import Livro from "../modelo/Livro";

const livros: Array<Livro> = [
  new Livro(1, 1, "Use a Cabeça: Java", "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos(OO) e Java.", ["Bert Bates. Kathy Sierra."]),
  new Livro(2, 2, "Java, como Programar", "Milhoes de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel.", ["Paul Deitel. Harvey Deitel"]),
  new Livro(3, 3, "Core Java for the impatient", "Readers familiar with Horstmann's original, two-volume Core Java books who are looking for comprehensive, but condensed guide to all of the new features and functions of java SE 9 will learn how these new features impact the language and core libraries. ", ["Cay Horstmann."])
];

class ControleLivros {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...livros.map(livro => livro.codigo)) + 1;
    livro.codigo = novoCodigo;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const indiceLivro = livros.findIndex(livro => livro.codigo === codigo);
    if (indiceLivro !== -1) {
      livros.splice(indiceLivro, 1);
    }
  }
}

export default ControleLivros;
