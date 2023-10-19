import '../styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import { CheckUserExists } from '../helper/helper';

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/quiz" element={<CheckUserExists><Quiz /></CheckUserExists>} />
        <Route path="/result" element={<CheckUserExists><Result /></CheckUserExists>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
