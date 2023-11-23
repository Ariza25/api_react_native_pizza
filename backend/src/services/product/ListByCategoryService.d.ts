interface ProductRequest {
    category_id: string;
}
declare class ListByCategoryService {
    execute({ category_id }: ProductRequest): Promise<{
        id: string;
        name: string;
        price: string;
        description: string;
        banner: string;
        created_at: Date;
        updated_at: Date;
        category_id: string;
    }[]>;
}
export { ListByCategoryService };
