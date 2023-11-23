interface UserRequest {
    name: string;
    email: string;
    password: string;
}
declare class CreateUserService {
    execute({ name, email, password }: UserRequest): Promise<{
        name: string;
        email: string;
        id: string;
    }>;
}
export { CreateUserService };
