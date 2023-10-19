import { User } from "@/domain/entities";
import { Email, UserId, UserName } from "@/domain/valueObjects";
import { userModelFixture } from "../model/UserModel";

export const userEntityFixture = new User(
  new UserId(userModelFixture.id),
  new UserName(userModelFixture.name),
  new Email(userModelFixture.email)
)