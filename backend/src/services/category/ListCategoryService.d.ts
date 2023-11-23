declare class ListCategoryService {
    execute(): Promise<{
        name: string;
        id: string;
    }[]>;
}
export { ListCategoryService };
