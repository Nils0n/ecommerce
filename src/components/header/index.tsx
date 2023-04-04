import { BsCart3 } from 'react-icons/bs';
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from './styles';


function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>
        CLUB CLOTHING
      </HeaderTitle>
      <HeaderItems>
        <HeaderItem>
          Explorar
        </HeaderItem>
        <HeaderItem>
          Login
        </HeaderItem>
        <HeaderItem>
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
