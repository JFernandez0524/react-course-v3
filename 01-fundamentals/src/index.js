import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  const title = 'Dog Man: Twenty Thousand Fleas Under the Sea';
  const author = 'Dav Pilkey';

  return (
    <article className='book'>
      <img src='./images/dog-man.jpeg' alt='' />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

// const Image = () => ;
// const Title = () => {
//   };
// const Author = () => (

// );

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
