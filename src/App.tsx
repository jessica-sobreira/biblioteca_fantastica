import { useState } from 'react';
import { useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import './App.css';

 interface Book {
  id: number;
  title: string;
  author: string;
  publicationYear: string;
  registrationDate: string;
  genre: string;
  description: string;
}

function App() {
  const [books, setBooks] = useState<Book[]>([
    {id: 1, title: 'A Sociedade do Anel ', author: 'J.R.R. Tolkien', publicationYear: '1954', registrationDate: '28-10-2023', genre: 'Fantasia', description: 'Anel que contem um poder incalculável '},
    {id: 2, title: 'A Guerra dos Tronos', author: 'George R. R. Martin', publicationYear: '1996', registrationDate: '28-10-2023', genre: 'Fantasia', description: ' Incontáveis batalhas pelo Trono de Ferro'},
    {id: 3, title: 'Deuses Americanos', author: 'Neil Gaiman', publicationYear: '2001', registrationDate: '28-10-2023', genre: 'Fantasia', description: 'União para enfrentar novos deuses'},
    {id: 4, title: 'As Brumas de Avalon', author: 'Marion Zimmer Bradley', publicationYear: '1979', registrationDate: '28-10-2023', genre: 'Fantasia', description: 'Universo das lendas do Rei Artur'},
    {id: 5, title: 'O Nome do Vento', author: 'Patrick Rothfuss', publicationYear: '2007', registrationDate: '28-10-2023', genre: 'Fantasia', description: 'Crônica do Matador do Rei'},
    {id: 6, title: 'O Maravilhoso Mágico de Oz', author: 'L. Frank Baum', publicationYear: '1900', registrationDate: '28-10-2023', genre: 'Fantasia', description: 'Mundo estranho e colorido chamado Oz'},
    {id: 7, title: 'Eragon', author: 'Christopher Paolini', publicationYear: '2002', registrationDate: '28-10-2023', genre: 'Fantasia', description: 'Ovo eclode e dá origem a um dragão'},
    {id: 8, title: 'A Cor da Magia', author: 'Terry Pratchett', publicationYear: '1983', registrationDate: '28-10-2023', genre: 'Fantasia', description: 'Série literária de fantasia e comédia'},
  ]);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publicationYear, setPublicationYear] = useState('');
  const [registrationDate, setRegistrationDate] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');



  function deleteValueInput() {
    setTitle('');
    setAuthor('');
    setPublicationYear('');
    setRegistrationDate('');
    setGenre('');
    setDescription('');
  }

  function addBook() {
    const newBook = {
      id: books.length + 1,
      title,
      author,
      publicationYear,
      registrationDate,
      genre,
      description,
    };

    if (!newBook.title || !newBook.author || !newBook.publicationYear || !newBook.registrationDate || !newBook.genre || !newBook.description) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    const currentDateTime = new Date();
    const registration = new Date(newBook.registrationDate);
  
  
    if (registration > currentDateTime) {
      alert('A data de registro não pode estar no futuro.');
      return;
    }
  
     const currentYear = new Date().getFullYear();
     if (parseInt(newBook.publicationYear) > currentYear) {
       alert('O ano de publicação não pode estar no futuro.');
       return;
     }
  
   
    setBooks([...books, newBook]);
    alert('Livro adicionado com sucesso!');
    

    
  
    }
  

  function listBooks() {
    return (
      <div className="card-container">
      {books.map(book => (
        <div className="card" key={book.id}>
          <div className="card-header">{book.title}</div>
          <div className="card-body">
            <p><strong>Autor:</strong> {book.author}</p>
            <p><strong>Ano de Publicação:</strong> {book.publicationYear}</p>
            <p><strong>Data de Registro:</strong> {book.registrationDate}</p>
            <p><strong>Gênero:</strong> {book.genre}</p>
            <p><strong>Breve Descrição:</strong> {book.description}</p>
          </div>
          <div className="card-buttons">
          <button className="limpar" type="button" onClick={() => deleteBook(book.id)}>Excluir</button>
          <button className="adicionar" type="button" onClick={() => editBook(book.id)}>Editar</button>
          </div>
        </div>
      ))}
    </div>
    
    )

  }

  function editBook(id: number) {
    showAddBookForm()
    const existingBook = books.find(book => book.id === id);
    
    if (existingBook) {
      setTitle(existingBook.title);
      setAuthor(existingBook.author);
      setPublicationYear(existingBook.publicationYear);
      setRegistrationDate(existingBook.registrationDate); 
      setGenre(existingBook.genre);
      setDescription(existingBook.description);
  
   
      setDisabledFields(true);
    }
  }

  const [disabledFields, setDisabledFields] = useState(false);



  function deleteBook(id: number) {
       const confirmDelete = window.confirm("Tem certeza de que deseja excluir este livro?");
  
    if (confirmDelete) {
      const livrosAtualizados = books.filter((book) => book.id !== id);
      setBooks(livrosAtualizados);
    }
  }

 const h1Ref = useRef<HTMLHeadingElement | null>(null);

function showAddBookForm() {
  if (h1Ref.current) {
    h1Ref.current.scrollIntoView({ behavior: 'smooth' });
  }
}
  
  return (
    <>
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a className="navbar-brand fonte-titulo cor-especial" href="#" id="cor-titulo">
            Biblioteca Fantástica
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </header>


    
    <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 image-carrousel"
            src="https://i.pinimg.com/originals/d6/bd/03/d6bd037ba36df7838fe86f9c49a484a7.jpg"
            alt="Primeiro slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image-carrousel"
            src="https://travelkanuman.com/wp-content/uploads/2017/07/Screen-Shot-2017-07-31-at-3.46.43-PM-1200x801.png"
            alt="Segundo slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

  <div id="titulo">
  <h1 ref={h1Ref} className="text-center fonte-titulo cor-especial pt-5">
  Coleção Mágica de Livrópolis
</h1>
  <p className="text-center text-secondary pb-5">Livros têm personalidade, histórias e desejos.</p>
</div>

      <div className="form-style">

      <div className="formulario-container">
        <label>
        Título:
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}
        placeholder="Nome do Livro" />
      </label>
      <label>
        Autor:
        <input type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)}
        placeholder="Nome do Autor" />
      </label>
      <label>
        Ano de Publicação:
        <input
          type="text"
          name="publicationYear"
          value={publicationYear}
          onChange={(e) => setPublicationYear(e.target.value)}
          placeholder="Ano de Publicação"
        />
      </label>
      <label>
        Data de Registro:
        <input
          type="date"
          name="registrationDate"
          value={registrationDate}
          onChange={(e) => setRegistrationDate(e.target.value)}
          disabled={disabledFields}
        />
      </label>
      <label>
        Gênero:
        <input type="text" name="genre" value={genre} onChange={(e) => setGenre(e.target.value)}
        placeholder="Gênero" />
      </label>
      <label>
        Breve Descrição:
        <input 
        type="text" 
        name="description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descrição do Livro" />
      </label>

      <div className="botoes-container">
      <button className="limpar" type="button" onClick={deleteValueInput}>Limpar</button>
      <button className="adicionar" type="submit" onClick={addBook}>Adicionar</button>
      </div>
      </div>
      </div>

      {listBooks()}

      <button className="fixed-add-button" onClick={showAddBookForm}>
  Adicionar Livro
</button>
    

      <footer className='footer'>
        <p>Copyright &copy; Jéssica Sobreira, 2023.</p>

      </footer>

    </>
  )
}

export default App;
