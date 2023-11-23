interface DetailRequest {
    order_id: string;
}
declare class DetailOrderService {
    execute({ order_id }: DetailRequest): Promise<({
        product: {
            id: string;
            name: string;
            price: string;
            description: string;
            banner: string;
            created_at: Date;
            updated_at: Date;
            category_id: string;
        };
        order: {
            id: string;
            table: number;
            status: boolean;
            draft: boolean;
            name: string;
            created_at: Date;
            updated_at: Date;
        };
    } & {
        id: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        order_id: string;
        product_id: string;
    })[]>;
}
export { DetailOrderService };
