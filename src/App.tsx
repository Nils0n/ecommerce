import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { auth, db } from './config/firebase.config';
import { UserContext } from './contexts/UserContext';
import { UserConverter } from './converts/firestore.converts';

import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';



function App() {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext);

  onAuthStateChanged(auth, async (user) => {
    const isSigninOut = isAuthenticated && !user;

    if (isSigninOut) {
      return logoutUser();
    }

    const isSigningIn = !isAuthenticated && user;

    if (isSigningIn) {
      const querySnapshot = await getDocs(query(collection(db, 'users').withConverter(UserConverter), where('id', '==', user.uid)));

      const userFromFirestore = querySnapshot.docs[0]?.data();

      return loginUser(userFromFirestore);
    }


  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
