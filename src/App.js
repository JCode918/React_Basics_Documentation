import React from 'react';
import './App.css';
import NumberList from './components_chapter8/NumberList'
import Blog from './components_chapter8/BlogContent'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const onlinePosts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NumberList numbers={numbers} />
        <Blog posts={onlinePosts} />
      </header>
    </div>
  );
}

export default App;
