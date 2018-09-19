import React from "react";

const styles = {
  contenedor: {
    marginTop: "1.4rem"
  },
  boton: {
    background: "none",
    border: "none",
    boxShadow: "none",
    outline: "none",
    backgroundColor: "orange",
    color: "#333",
    fontSize: "1.3rem",
    cursor: "pointer",
    marginRight: "1rem"
  }
};

class Acciones extends React.Component {
  render() {
    return (
      <section style={styles.contenedor}>
        <button style={styles.boton} onClick={this.props.onSuma}>
          Suma +
        </button>
        <button style={styles.boton} onClick={this.props.onReset}>
          RESET
        </button>
      </section>
    );
  }
}

export default Acciones;
