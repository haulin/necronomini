import './styles.less';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { CardLibrary } from './CardLibrary';
import { PlayGame } from './PlayGame';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<CardLibrary />} path="/card-library" />
          <Route element={<PlayGame />} path="/play-game" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
