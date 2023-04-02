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
      {books.map((book) => {
        const { title, author, img } = book;
        return <Book key={title} title={title} author={author} img={img} />;
      })}
    </section>
  );
}

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
