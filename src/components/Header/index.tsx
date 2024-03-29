import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase.config';
import { CartContext } from '../../contexts/CartContext';
import { UserContext } from '../../contexts/UserContext';
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from './styles';


function Header() {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(UserContext);
  const { toogleCart, productsCount } = useContext(CartContext);

  return (
    <HeaderContainer>
      <HeaderTitle onClick={() => navigate('/')}>
        CLUB CLOTHING
      </HeaderTitle>
      <HeaderItems>
        <HeaderItem onClick={() => navigate('/explore')}>
          Explorar
        </HeaderItem>
        {!isAuthenticated ?
          <>
            <HeaderItem onClick={() => navigate('/login')} >
              Login
            </HeaderItem>
            <HeaderItem onClick={() => navigate('/sign-up')}>
              Cria Conta
            </HeaderItem>
          </>
          :
          <HeaderItem onClick={() => signOut(auth)}>
            Sair
          </HeaderItem>
        }
        <HeaderItem onClick={toogleCart}>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>{productsCount}</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  );
}

export default Header;
