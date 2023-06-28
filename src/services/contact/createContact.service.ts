import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { iContactRequest } from "../../interfaces/contact";
import { contactSerializer } from "../../serializers/contact/index";

export const createContactService = async (
  contactData: iContactRequest,
  email: string
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const userData = await userRepository.findOneBy({
    email: email,
  });

  const contact = {
    ...contactData,
    user: userData as User,
  };

  const newContact = contactRepository.create(contact);
  await contactRepository.save(newContact);

  const validatedContact = await contactSerializer.validate(newContact, {
    stripUnknown: true,
    abortEarly: true,
  });

  return validatedContact;
};
