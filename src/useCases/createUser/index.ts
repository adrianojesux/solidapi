import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { UserRepository } from "./../../repositories/implementations/UserRepository";

const userRepository = new UserRepository();
const mailtrapMailProvider = new MailTrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  userRepository,
  mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
