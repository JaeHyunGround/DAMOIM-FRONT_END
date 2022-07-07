import './App.css';
import MainPage from './page/main';
import ClubPage from './page/club';
import SignUpPage from './page/signUp';
import LoginPage from './page/login';
import EditPage from './page/edit';
import PostingPage from './page/posting';
import PostPage from './page/post';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="Damoim">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/club' element={<ClubPage />} />
        <Route path='/signUp' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/edit' element={<EditPage />} />
        <Route path='/posting' element={<PostingPage />} />
        <Route path='/post' element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;