import { useRef, useState } from 'react';
import './App.css';
import ImageGallary from './components/ImageGallary';

function App() {

  const [newWord, setNewWord] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = `https://pixabay.com/api/?key=43527811-40902b65f9bc4be3f2b4e0a74&q=${ref.current.value}&image_type=photo`;
    fetch(apiUrl).then((res) => {
      return res.json();
    })
      .then((data) => {
        setNewWord(data.hits);
      })
  }

  return (
    <div className="App">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='画像を探す' ref={ref}/>
      </form>
      <ImageGallary newWord={newWord}/>
    </div>
  );
}

export default App;
