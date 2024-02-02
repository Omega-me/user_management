import { AddressDTO } from '.';

export interface UserDTO {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressDTO;
  phone: string;
}

export interface CreateUserDTO extends Omit<UserDTO, 'id'> {}
export interface UpdateUserDTO extends Partial<CreateUserDTO> {}
