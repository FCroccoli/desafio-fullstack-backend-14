import * as yup from "yup";
import { iUserRequest, iUser, iUserUpdate } from "../../interfaces/user";

export const createUserSerializer: yup.Schema<iUserRequest> = yup
  .object()
  .shape({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    password: yup.string().required(),
  });

export const userSerializer: yup.Schema<iUser> = yup.object().shape({
  id: yup.string().required(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  createdAt: yup.date().required(),
});

export const updateUserSerializer: yup.Schema<iUserUpdate> = yup
  .object()
  .shape({
    first_name: yup.string().notRequired(),
    last_name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    phone: yup.string().notRequired(),
    password: yup.string().notRequired(),
  });
