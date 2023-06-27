import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Header from './components/Header';
import Loading from './components/Loading';
import { auth, db } from './config/firebase.config';
import { UserContext } from './contexts/UserContext';
import { UserConverter } from './converts/firestore.converts';
import PrivateRoute from './guards/PrivateRoute';

import Checkout from './pages/Checkout';
import Details from './pages/Details';
import Explore from './pages/Explore';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';



function App() {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext);
  const [isInitializing, setIsInitializing] = useState(true);

  onAuthStateChanged(auth, async (user) => {
    const isSigninOut = isAuthenticated && !user;

    if (isSigninOut) {
      logoutUser();
      return setIsInitializing(false);
    }

    const isSigningIn = !isAuthenticated && user;

    if (isSigningIn) {
      const querySnapshot = await getDocs(query(collection(db, 'users').withConverter(UserConverter), where('id', '==', user.uid)));

      const userFromFirestore = querySnapshot.docs[0]?.data();

      loginUser(userFromFirestore);
      return setIsInitializing(false);
    }

    return setIsInitializing(false);

  });

  if (isInitializing) return <Loading />;

  return (
    <BrowserRouter>
      <Header />
      <Cart />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/category/:id' element={<Details />} />

        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/checkout' element={<Checkout />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
