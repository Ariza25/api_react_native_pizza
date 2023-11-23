interface ItemRequest {
    order_id: string;
    product_id: string;
    amount: number;
}
declare class AddItemService {
    execute({ order_id, product_id, amount }: ItemRequest): Promise<{
        id: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        order_id: string;
        product_id: string;
    }>;
}
export { AddItemService };
