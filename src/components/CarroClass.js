import React from 'react';

class CarroClass extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            color: "red",
            model: "vectra",
            velocidade: 185,
            dono: this.props.dono

        }
    }
        render(){
            return(
            <>
                <h4>
                    Classe Carro: 
                </h4>

                <p>
                    Dono: {this.state.dono}
                </p>

                <p>
                    Cor: {this.state.color}
                </p>

                <p>
                    Model: {this.state.model}
                </p>

                <p>
                    Velocidade: {this.state.velocidade} Km/h
                </p>
                
            </> 
            )
           

        }    
    
}

export default CarroClass;