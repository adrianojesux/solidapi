import { IMailProvider } from "./../../providers/IMailProvider";
import { ICreateUserDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "./../../repositories/IUsersRepository";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ICreateUserDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) throw new Error("User already exists.");

    const user = new User(data);

    this.usersRepository.save(user);

    this.mailProvider.sendMail({
      to: {
        name: user.name,
        email: user.email,
      },
      subject: "Seja Bem Vindo!",
      body: "User created with success.",
      from: {
        name: "Equipe do Projeto",
        email: "noreppy@projeto.com",
      },
    });
  }
}
