import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { iUser, iUserRequest } from "../../interfaces/user";
import { userSerializer } from "../../serializers/user";

export const createUserService = async (data: iUserRequest): Promise<iUser> => {
  const userRepo = AppDataSource.getRepository(User);
  const newUser = userRepo.create(data);

  await userRepo.save(newUser);

  const validatedUser = await userSerializer.validate(newUser, {
    stripUnknown: true,
    abortEarly: true,
  });

  return validatedUser;
};
