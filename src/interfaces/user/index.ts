export interface iUserRequest {
  name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
}

export interface iUser {
  id: string;
  name: string;
  last_name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

export interface iUserUpdate {
  name?: string | undefined | null;
  last_name?: string | undefined | null;
  email?: string | undefined | null;
  phone?: string | undefined | null;
  password?: string | undefined | null;
}
