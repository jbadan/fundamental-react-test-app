import FormGroup from 'fundamental-react/Forms/FormGroup';
import FormInput from 'fundamental-react/Forms/FormInput';
import FormItem from 'fundamental-react/Forms/FormLabel';
import FormLabel from 'fundamental-react/Forms/FormLabel';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">Create React App with Fundamental React</header>
      <div className="App-container">
        <FormGroup>
        <FormItem>
            <FormLabel htmlFor='input-1'>
                Default Input
            </FormLabel>
            <FormInput
                id='input-1'
                placeholder='Field placeholder text' />
        </FormItem>
        </FormGroup>
        <FormGroup>
          <FormItem>
              <FormLabel htmlFor='input-1'>
                  Default Input
              </FormLabel>
              <FormInput
                  id='input-1'
                  placeholder='Field placeholder text' />
          </FormItem>
        </FormGroup>
    
    </div>
    </div>
  );
}

export default App;
