import React from "react";
import Pantalla from "./Pantalla";
import Acciones from "./Acciones";

const styles = {
  contenedor: {
    backgroundColor: "#c7f4da"
  }
};

class Contador extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0
    };
  }

  suma() {
    this.setState({ contador: this.state.contador + 1 });
  }

  reset() {
    this.setState({ contador: 0 });
  }

  render() {
    return (
      <main style={styles.contenedor}>
        <header>
          <h1>Contador ReactJS</h1>
        </header>
        <Pantalla valor={this.state.contador} />
        <Acciones onSuma={() => this.suma()} onReset={() => this.reset()} />
      </main>
    );
  }
}

export default Contador;
