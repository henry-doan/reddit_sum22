import About from './components/shared/About';
import Home from './components/shared/Home';
import Subs from './components/subs/Subs';
import { Routes, Route } from 'react-router-dom';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
import Topics from './components/topics/Topics';

// navgations routes, to go to mutiple pages
const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/subs' element={<Subs />} />
      <Route path='/:subId/topics' element={<Topics />} />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
    {/* Footer will go here */}
  </>
)

export default App;
