import React from 'react';
import { Button } from 'react-bootstrap';

const ClickButton = ({buttonDisplayName, clickHandler}) => {
  
  return (
        <Button onClick={clickHandler}>
              {buttonDisplayName}
        </Button>
  )

}

export default ClickButton 