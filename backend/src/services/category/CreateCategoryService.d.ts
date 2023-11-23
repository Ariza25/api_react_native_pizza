interface CategoryRequest {
    name: string;
}
declare class CreateCategoryService {
    execute({ name }: CategoryRequest): Promise<{
        name: string;
        id: string;
    }>;
}
export { CreateCategoryService };
