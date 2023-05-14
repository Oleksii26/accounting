import { UploadDoc } from './Components/UploadDoc';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Header } from './Pages/Header';

function App() {
  return (

    <>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<UploadDoc />} />
          <Route path='*' element={<Home />} />
        </Routes>
    </>
  );
}

export default App;
