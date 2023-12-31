import {Router} from "express";
import multer from 'multer';
import uploadConfig from '../config/multer'

import {CreateUserController} from '../controllers/user/CreateUserController'
import {AuthUserController} from '../controllers/user/AuthUserController'
import { DetailUserController } from '../controllers/user/DetailUserController';

import { isAuthenticated } from "../middlewares/isAuthenticated";

import { CreateCategoryController } from "../controllers/category/CreateCategoryController";
import { ListCategoryController } from "../controllers/category/ListCategoryController";
import { CreateProductController } from "../controllers/product/CreateProductController";

import { ListByCategoryController } from "../controllers/product/ListByCategoryController";
import { CreateOrderController } from "../controllers/order/CreateOrderController";
import { RemoveOrderController } from "../controllers/order/RemoveOrderController";

import { AddItemController } from "../controllers/order/AddItemController";
import { RemoveItemController } from "../controllers/order/RemoveItemController";
import { SendOrderController } from "../controllers/order/SendOrderController";

import { ListOrdersController } from "../controllers/order/ListOrdersController";
import { DetailOrderController } from "../controllers/order/DetailOrderController";
import { FinishOrderController } from "../controllers/order/FinishOrderController";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

//Rotas users
router.post('/users', new CreateUserController().handle); //cadastro
router.post('/session', new AuthUserController().handle); //login
router.get('/me', isAuthenticated, new DetailUserController().handle); //userInfo

//Rotas category
router.post('/category', isAuthenticated, new CreateCategoryController().handle); //cadastro de categoria
router.get('/category', isAuthenticated, new ListCategoryController().handle); //categoryInfo

//Rotas products
router.post('/product', isAuthenticated, upload.single("file"), new CreateProductController().handle);
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle);

//Rotas order
router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.delete('/order', isAuthenticated, new RemoveOrderController().handle);
router.post('/order/addItem', isAuthenticated, new AddItemController().handle);
router.delete('/order/removeItem', isAuthenticated, new RemoveItemController().handle)
router.put('/order/send', isAuthenticated, new SendOrderController().handle)
router.get('/orders', isAuthenticated, new ListOrdersController().handle)
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle)
router.put('/order/finish', isAuthenticated, new FinishOrderController().handle)

export {router};