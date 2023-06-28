export interface iUserRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
}

export interface iUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

export interface iUserUpdate {
  first_name?: string | undefined | null;
  last_name?: string | undefined | null;
  email?: string | undefined | null;
  phone?: string | undefined | null;
  password?: string | undefined | null;
}
