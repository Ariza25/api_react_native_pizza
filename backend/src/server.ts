import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { router } from './routes/routes';
import cors from 'cors';
import path from 'path'

import swaggerUI from 'swagger-ui-express'
import swaggerDocument from '../swagger.json'

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

//acessar a foto para mostrar no frontend
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({ status: "error", message: "Internal Server Error." });
});

app.listen(3333, () => console.log("Servidor Online!!!"));
