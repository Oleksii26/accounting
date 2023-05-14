import { UploadDoc } from './Components/UploadDoc';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { Header } from './Pages/Header';
import { Container } from '@mui/material';

function App() {
  return (

    <>
      {/* <Container maxWidth='sm'> */}
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<UploadDoc />} />
          <Route path='*' element={<Home />} />
        </Routes>
      {/* </Container> */}
    </>
  );
}

export default App;
