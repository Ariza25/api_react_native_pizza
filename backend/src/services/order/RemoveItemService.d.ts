interface ItemRequest {
    item_id: string;
}
declare class RemoveItemService {
    execute({ item_id }: ItemRequest): Promise<{
        id: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        order_id: string;
        product_id: string;
    }>;
}
export { RemoveItemService };
