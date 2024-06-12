/* eslint-disable no-unused-vars */
import { createClient } from '@supabase/supabase-js';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';

const supabase = createClient(
  'https://ywqpghgpkevgtdgcpdzm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3cXBnaGdwa2V2Z3RkZ2NwZHptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyMDEwMjcsImV4cCI6MjAzMzc3NzAyN30.hfZKg6fUQv9O9cGrgbUeHckwmYmGFKYyeeyS_lMGM1w'
);

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
