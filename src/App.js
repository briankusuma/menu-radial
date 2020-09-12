//kerangka yang dipublikasikan oleh react ReactDOM.render(<App />, document.getElementById('root'));
//didalamnya berisi komponen-komponen

import React from 'react';
//import logo from './logo.svg';
//import './App.css';

//header
import Header from './assets/header';
import './assets/sass/header.scss';

//content
import Content from './assets/content';
import './assets/sass/content.scss';

//footer
import Footer from './assets/footer';
import './assets/sass/footer.scss';


function App() {
  return (
    <div>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
