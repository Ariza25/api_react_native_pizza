declare class DetailUserService {
    execute(user_id: string): Promise<{
        name: string;
        email: string;
        id: string;
    }>;
}
export { DetailUserService };
