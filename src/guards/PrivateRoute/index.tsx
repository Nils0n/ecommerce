import { Outlet, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';

interface IPrivateRouteProps {
  isAuthenticated: boolean;
}

function PrivateRoute({ isAuthenticated }: IPrivateRouteProps) {
  const navigate = useNavigate();

  function redirectToLoginPage() {
    setTimeout(() => {
      navigate('/login');
    }, 3500);

    return <Loading message='É necessário estar logado para acessar está página, você será redirecionado para a página de login em instantes...' />;
  }

  return isAuthenticated ? <Outlet /> : redirectToLoginPage();
}

export default PrivateRoute;
