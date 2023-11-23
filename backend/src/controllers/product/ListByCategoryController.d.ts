import { Request, Response } from 'express';
declare class ListByCategoryController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { ListByCategoryController };
