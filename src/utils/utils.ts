import jwt from 'jsonwebtoken';

export const capitalizeName = (name: string) => {
  return name.replace(/\b(\w)/g, (s) => s.toUpperCase());
};
