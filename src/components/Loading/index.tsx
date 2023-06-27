import SyncLoader from 'react-spinners/SyncLoader';
import { LoadingContainer } from './styles';

interface ILoadingProps {
  message?: string
}

function Loading({ message }: ILoadingProps) {
  return (
    <LoadingContainer>
      {message && <><p>{message}</p></>}
      <SyncLoader size={30} />
    </LoadingContainer>
  );
}

export default Loading;
