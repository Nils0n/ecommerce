import { LoadingContainer } from './styles';
import SyncLoader from 'react-spinners/SyncLoader';

function Loading() {
  return (
    <LoadingContainer>
      <SyncLoader size={30} />
    </LoadingContainer>
  );
}

export default Loading;
