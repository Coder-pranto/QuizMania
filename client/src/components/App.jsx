import '../styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
