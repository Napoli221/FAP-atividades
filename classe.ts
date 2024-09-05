class Musica {
nome: string;
genero: string;

constructor(nome:string, genero:string) {
    this.nome = nome;
    this.genero = genero;
}

apresentar(): void {
    console.log(`A musica é ${this.nome} do genero ${this.genero}`);

    const musicas = new Musica ("Sim", "Pop");
    console.log (musicas.apresentar())

}
}


class Artista {
    artista: string;
    idade: number;
    profissao: string;

constructor(artista:string, idade:number, profissao:string) {
    this.artista = artista
    this.idade = idade
    this.profissao = profissao
}
apresentar(): void {
    console.log(`Artista ${this.artista} que tem a idade ${this.idade} que trabalha com ${this.profissao}`)

    const artistas = new Artista ("Jao", 29, "Cantor")
    console.log (artistas.apresentar())
}


}
    
    class Filme{
    titulo: string;
    lançamento: number;
    }