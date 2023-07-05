import './App.css';
import { Home } from './pages';
import {LayoutMovies} from '@/components'
import './index.css'

function App() {
  return (
    <LayoutMovies>
      <Home />
    </LayoutMovies>
  );
}

export default App;
