import { Request, Response } from 'express';
declare class RemoveItemController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { RemoveItemController };
