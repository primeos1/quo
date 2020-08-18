import React from 'react';
import ClickButton from './Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';


const QuoteBox = ({ selectedQuote, assignNewQuoteIndex }) => {
  return (
    <>
      <div id="quote">
        <div id="text">
          <div className="marks" id="mark-left">
            <FontAwesomeIcon icon = {faQuoteLeft} /> 
          </div>
          {selectedQuote.quote}
          <div className="marks" id="mark-right">
          <FontAwesomeIcon icon = {faQuoteRight} className="i"/> 
          </div>
        </div>
        <div id="author">
          - {selectedQuote.author}
        </div>
      </div>
      <div className="Row">
        <div id="tweet-quote">
          <a target = "_blank" 
            href={`https://twitter.com/intent/tweet?text=${selectedQuote.quote}`}>
            <Button className="btn" buttonDisplayName = "">
              <FontAwesomeIcon icon = { faTwitter } size = "lg" />
            </Button>
         </a>
        </div>
        <ClickButton className="btn" id ="new-quote" clickHandler={assignNewQuoteIndex} buttonDisplayName ="New Quote" />
      </div>
    </>
  )
}

export default QuoteBox;