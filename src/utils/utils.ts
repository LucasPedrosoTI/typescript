export const capitalizeName = (name: string) => {
  return name
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export interface IUser {
  id?: number;
  email: string;
  password?: string;
  first_name: string;
  last_name: string;
  business_name: string;
  logo: string;
  admin: number;
}
