import { User } from "../../entities/User";
import { IUsersRepository } from "./../IUsersRepository";

export class UserRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((u) => u.email === email);
    return Promise.resolve(user);
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
