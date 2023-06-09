import Editora from "../modelo/Editora";

const editoras: Array<Editora> = [
  new Editora(1, "Alta Books"),
  new Editora(2, "Pearson"),
  new Editora(3, "Addison Wesley")
];

export class ControleEditora {
  public getEditoras = (): Editora[] => {
    return editoras;
  };

  public getNomeEditora = (codEditora: number): string => {
    const editoraEncontrada = editoras.find(
      (editora) => editora.codEditora === codEditora
    );
    if (editoraEncontrada) {
      return editoraEncontrada.nome;
    } else {
      console.log(codEditora)
      return ""
    }
  };

  public getEditora = (codEditora: number): Editora | undefined => {
    return editoras.find((editora) => editora.codEditora === codEditora);
  };
}