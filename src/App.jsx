import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className='h-screen w-screen flex flex-col'>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
