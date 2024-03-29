import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore';
import CategoryType from '../types/category.types';
import IUserType from '../types/user.types';

export const CategoryConverter = {

  toFirestore(category:CategoryType): DocumentData{
    return {...category};
  },

  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): CategoryType {
    const data = snapshot.data(options);

    return {
      id: data.id,
      displayName: data.displayName,
      imageUrl:data.imageUrl,
      name:data.name,
      products:data.products
    };
  }
};

export const UserConverter = {

  toFirestore(user: IUserType): DocumentData{
    return {...user};
  },

  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): IUserType {
    const data = snapshot.data(options);

    return {
      id: data.id,
      email: data.email,
      firstName: data.firstName,
      lastName:data.lastName,
      provider:data.provider
    };
  }
};
