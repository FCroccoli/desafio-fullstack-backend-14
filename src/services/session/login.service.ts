import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../error/errors";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { iUserLogin } from "../../interfaces/session";

export const userLoginService = async ({
  email,
  password,
}: iUserLogin): Promise<{ token: string }> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("Usuário ou Senha invalidos!", 403);
  }

  const passwordCheck = await compare(password, user?.password as string);

  if (!passwordCheck) {
    throw new AppError("Usuário ou Senha invalidos!", 403);
  }

  const token = jwt.sign(
    {
      email: user.email,
      id: user.id,
    },
    process.env.SECRET_KEY as string,
    {
      subject: String(user.id),
      expiresIn: "24h",
    }
  );

  return { token: token };
};
