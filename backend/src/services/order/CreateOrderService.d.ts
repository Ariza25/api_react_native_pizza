interface OrderRequest {
    table: number;
    name: string;
}
declare class CreateOrderService {
    execute({ table, name }: OrderRequest): Promise<{
        id: string;
        table: number;
        status: boolean;
        draft: boolean;
        name: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
export { CreateOrderService };
