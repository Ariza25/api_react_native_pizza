import prismaClient  from '../../prisma/index';
import {hash} from 'bcryptjs'

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({ name, email, password }: UserRequest) {
        //verificar se o email existe
        if (!email) {
            throw new Error("Incorrect Email");
        }

        //verificar se o email existe
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: { email: email },
        });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

         //criar usuário

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: { name: name, email: email, password: passwordHash, },
            select: {id:true, name: true, email: true,}
        });

        return user;
    }
}

export { CreateUserService };
