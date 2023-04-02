import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';

const books = [
  {
    title: 'Dog Man: Twenty Thousand Fleas Under the Sea',
    author: 'Dav Pilkey',
    img: './images/dog-man.jpeg',
  },
  {
    title: 'Outlive: The Science and Art of Longevity',
    author: ' Peter Attia MD',
    img: 'https://m.media-amazon.com/images/I/411pTpK1xOL._SX383_BO1,204,203,200_.jpg',
  },
];

function BookList() {
  return (
    <section className='booklist'>
      <EventExamples />
      {books.map((book) => {
        //pass the object and spread object properties
        return <Book key={book.title} {...book} />;
      })}
    </section>
  );
}

const EventExamples = () => {
  const handleFormInput = () => {
    console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert('handle button click');
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
