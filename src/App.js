// import logo from './logo.svg';
import './style.css';
import Grid from './components/Grid';
import {images, visibleItems, finishedItems} from "./data.js"



function App() {
  const text = "просто текст 1"
  const myClass= 'text'
  return (
    <div className="App">
      <section className='game container'>
        <Grid images={images}/>
      </section>
    </div>
  );
}

export default App;
