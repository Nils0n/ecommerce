interface UserType {
  firstName: string;
  lastName: string;
  email: string;
  provider:'firebase' | 'google';
}

export default UserType;
