import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import React from 'react';
import { Component } from 'react';

class App extends Component {
  
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; // ... clonar
    const index = counters.indexOf(counter); // para localizar qual o counter em que estamos a clicar
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters }); //refresh
  };

  // em vez de dar delete, vamos criar um novo array sem o counter que queremos remover
  // depois a pagina vai dar refresh sem o counter
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters: counters }); //refresh
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar 
          totalCounters={this.state.counters.filter(counter => counter.value > 0).length}
        />
        <main className="container"> 
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          /> 
        </main>
      </React.Fragment>
    );
  }
}

export default App;
