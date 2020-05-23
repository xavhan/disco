import React from 'react';
import {RecordsList} from './RecordsList';
import './tailwind.generated.css';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl mb-4">Browse my latest records</h1>
      <RecordsList />
    </div>
  );
}

export default App;
