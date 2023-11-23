import { Request, Response } from 'express';
declare class ListCategoryController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { ListCategoryController };
