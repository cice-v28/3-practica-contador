import React from "react";

const styles = {
  pantalla: {
    backgroundColor: "#222",
    color: "#fafafa",
    padding: "2rem 1rem",
    fontSize: "2rem"
  }
};

class Pantalla extends React.Component {
  render() {
    return (
      <section style={styles.pantalla}>
        <p>{this.props.valor || 0}</p>
      </section>
    );
  }
}

export default Pantalla;
