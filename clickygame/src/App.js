import React, { Component, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FlowerCard from "./components/FlowerCard/image";
import flowers from "./flowers.json";



class App extends React.Component {
  state = {
    count: 0

  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    console.log('Was clicked!');

  };

  render() {

    return (
      <div>
              <nav className="navbar navbar-dark bg-dark navnav">
                <span className="navbar-brand navFont">
                    <h1>Clicky Game</h1>
                </span>
                <span className="navbar-brand navFont">
                    <h1>Click and Image to Begin</h1>
                </span>
                <span className="navbar-brand navFont">
                    <h1>Score: {this.state.count} | Top Score:</h1>
                </span>
            </nav>
        {/* <Navbar /> */}
        <FlowerCard>
          <button onClick={this.handleIncrement}>
            <FlowerCard
              image={flowers[0].image}
            />
          </button>
          <button onClick={this.handleIncrement}>
            <FlowerCard
              image={flowers[1].image}
            />
          </button>
          <button onClick={this.handleIncrement}>
            <FlowerCard
              image={flowers[2].image}
            />
          </button>
          <button onClick={this.handleIncrement}>
            <FlowerCard
              image={flowers[3].image}
            />
          </button>
          <button onClick={this.handleIncrement}>
            <FlowerCard
              image={flowers[4].image}
            />
          </button>
          <button onClick={this.handleIncrement}>
            <FlowerCard
              image={flowers[5].image}
            />
          </button>
          <button onClick={this.handleIncrement}>
            <FlowerCard
              image={flowers[6].image}
            />
          </button>
          <button onClick={this.handleIncrement}>
            <FlowerCard
              image={flowers[7].image}
            />
          </button>
          <button onClick={this.handleIncrement}>
            <FlowerCard
              image={flowers[8].image}
            />
          </button>
          <button onClick={this.handleIncrement}>
            <FlowerCard
              image={flowers[9].image}
            />
          </button>

        </FlowerCard>


      </div>
    )
  }
}


export default App;
