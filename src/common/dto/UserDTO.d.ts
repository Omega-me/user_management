import { AddressDTO } from '.';

export interface UserDTO {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressDTO;
  phone: string;
  gooleLoc?: boolean;
}

export interface CreateUserDTO extends Omit<UserDTO, 'id' | 'gooleLoc'> {}
export interface UpdateUserDTO extends Partial<CreateUserDTO> {}
