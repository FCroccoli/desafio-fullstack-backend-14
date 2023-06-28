import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { iContactRequest } from "../../interfaces/contact";

export const updateContactService = async (
  contactData: Contact,
  updateData: iContactRequest
) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const updatedPost = contactRepository.create({
    ...contactData,
    ...updateData,
  });

  const updatedContact = await contactRepository.save(updatedPost);

  return updatedContact;
};
