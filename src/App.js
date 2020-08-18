import React from 'react';
import './App.css';
import { random } from 'lodash';
import QuoteBox from './components/Quotebox'; 
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null 
    }
    this.selectQuoteIndex = this.generateNewQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  } 

  // fetch json file containing readymade list of quotes   
  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(
        quotes => this.setState(
          {quotes: quotes}, this.assignNewQuoteIndex
        )
      )
  }

  // gets the quote from array this.state.quotes
  // "selectedQuote can then be accessed and used as a variable"
  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)){
      return undefined;
    } 
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  // Returns an integer in this.state.quote, if empty returns undefined 
  generateNewQuoteIndex() {
    if(!this.state.quotes.length){
      return undefined;
    }
    return random(0, this.state.quotes.length-1);
  }

  // sets state of selectedQuoteIndex to new generated integer
  assignNewQuoteIndex(){
    this.setState({selectedQuoteIndex: this.generateNewQuoteIndex()})
  }
  render() {
    console.log(this.state.selectedQuoteIndex);
    return (
      <div className ="App container-fluid">
        <h1 className="text-align-center">Random Quotes App</h1>
        <div id="quote-box">
          { 
            this.selectedQuote ? 
              <QuoteBox selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex}/> 
            : null
          }
        </div>
      </div>
    )
  }
} 

export default App;
