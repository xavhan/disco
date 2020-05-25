import React from 'react';
import {RecordsList} from './RecordsList';
import './tailwind.generated.css';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl m-4 text-center">Browse my latest records</h1>
      <RecordsList />
    </div>
  );
}

export default App;
