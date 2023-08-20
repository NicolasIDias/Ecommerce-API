import { Router } from 'express';

// Controllers
import productController from './Controllers/Product/Product';
import userController from './Controllers/User/User';
import cartController from './Controllers/Cart/Cart'

const router = Router();

const version = '/api/v1'

// Product Router

router.get(`${version}/products`, productController.index);
router.get(`${version}/products/:id`, productController.show);
router.post(`${version}/products`, productController.insert);
router.delete(`${version}/products/:id`, productController.delete);

// User Router

router.get(`${version}/customers`, userController.index);
router.get(`${version}/customers/:id`, userController.show);
router.post(`${version}/customers`, userController.insert);
router.delete(`${version}/customers/:id`, userController.delete);
router.put(`${version}/customers/:id`, userController.update)

// Cart Router

// router.post(`${version}/cart/add/:userId`, cartController.insert)
router.get(`${version}/cart/:id`, cartController.index)

export default router;
