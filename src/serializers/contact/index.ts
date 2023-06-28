import * as yup from "yup";
import {
  iContact,
  iContactRequest,
  iContactUpdate,
} from "../../interfaces/contact";

export const updateContactSerializer: yup.Schema<iContactUpdate> = yup
  .object()
  .shape({
    first_name: yup.string().notRequired(),
    last_name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    telephone: yup.string().notRequired(),
  });

export const createContactSerializer: yup.Schema<iContactRequest> = yup
  .object()
  .shape({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().email().required(),
    telephone: yup.string().required(),
  });

export const contactSerializer: yup.Schema<iContact> = yup.object().shape({
  id: yup.string().required(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().email().required(),
  telephone: yup.string().required(),
  createdAt: yup.date().required(),
});
