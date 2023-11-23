interface OrderRequest {
    order_id: string;
}
declare class FinishOrderService {
    execute({ order_id }: OrderRequest): Promise<{
        id: string;
        table: number;
        status: boolean;
        draft: boolean;
        name: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
export { FinishOrderService };
