import { BsCart3 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from './styles';


function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderTitle onClick={() => navigate('/')}>
        CLUB CLOTHING
      </HeaderTitle>
      <HeaderItems>
        <HeaderItem>
          Explorar
        </HeaderItem>
        <HeaderItem onClick={() => navigate('/login')} >
          Login
        </HeaderItem>
        <HeaderItem onClick={() => navigate('/sign-up')}>
          Cria Conta
        </HeaderItem>
        <HeaderItem>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>5</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  );
}

export default Header;
