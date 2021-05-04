
interface ITechs{
  title: String,
  exprience: number,
}

interface ICreateUser{
  name?: String,
  email: String,
  password: String,
  techs: Array<String | ITechs>,
}

export default function CreateUser({name, email, password, techs}: ICreateUser){
    const user = {
      name,
      email,
      password,
      techs,
    }

  return user;
}