import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { iUser } from "../../interfaces/user";
import { userSerializer } from "../../serializers/user";

export const updateUserService = async (email: string, updateData: iUser) => {
  const userRepo = AppDataSource.getRepository(User);

  const userData = await userRepo.findOneBy({ email: email });

  const updatedUser = userRepo.create({
    ...userData,
    ...updateData,
  });

  await userRepo.save(updatedUser);

  const validatedUser = await userSerializer.validate(updatedUser, {
    stripUnknown: true,
    abortEarly: false,
  });

  return validatedUser;
};
