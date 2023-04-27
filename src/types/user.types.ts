interface IUserType {
  firstName: string;
  lastName: string;
  email: string;
  provider:'firebase' | 'google';
}

export default IUserType;
