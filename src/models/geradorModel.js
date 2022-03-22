class GeradorModel{
    constructor(codigo, razao, endereco){
        this.codigo = codigo;
        this.razao = razao;
        this.endereco = endereco;
    }

    getCodigo(){
        return this.codigo;
    }

    getRazao(){
        return this.razao;
    }   

    getEndereco(){
        return this.endereco;
    }

    setCodigo(codigo){
        this.codigo = codigo;
    }

    setRazao(razao){
        this.razao = razao;
    }

    setEndereco(endereco){
        this.endereco = endereco;
    }
}

module.exports = GeradorModel;