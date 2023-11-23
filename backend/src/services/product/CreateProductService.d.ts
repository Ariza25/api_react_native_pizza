interface ProductRequest {
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
}
declare class CreateProductService {
    execute({ name, price, description, banner, category_id }: ProductRequest): Promise<{
        id: string;
        name: string;
        price: string;
        description: string;
        banner: string;
        created_at: Date;
        updated_at: Date;
        category_id: string;
    }>;
}
export { CreateProductService };
