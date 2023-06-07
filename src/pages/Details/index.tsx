import { useParams } from 'react-router-dom';
import CategoryDetails from '../../components/CategoryDetails';

function Details() {
  const { id } = useParams();

  if (!id) {
    return null;
  } else {
    return <CategoryDetails categoryId={id} />;
  }




}

export default Details;
