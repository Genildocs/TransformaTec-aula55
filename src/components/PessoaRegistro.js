import React from 'react';

class PessoaRegistro extends React.Component{

    constructor(props){
        super(props);

        this.state={
            nome: this.props.nome,
            idade: this.props.idade,
            sobrenome: this.props.sobrenome,
            trabalho: this.props.trabalho,


        }
    }
    render(){
        return(
            <>
                <h4>
                    Registro de Pessoa:
                </h4>

                <p>
                    Nome: {this.state.nome}
                </p>

                <p>
                    Idade: {this.state.idade} anos
                </p>

                <p>
                    Sobrenome: {this.state.sobrenome}
                </p>

                <p>
                    Trabalho: {this.state.trabalho}
                </p>

            </>
        )
    }

}

export default PessoaRegistro;