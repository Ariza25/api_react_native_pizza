import { Request, Response } from "express";
declare class DetailOrderController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { DetailOrderController };
