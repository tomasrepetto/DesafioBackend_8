import { Router } from 'express';
import { cartIdView, chatView, homeView, loginGet, loginPost, logout, productsView, realTimeProductsView, registerGet, registerPost } from '../dao/viewsDB.js';
import { auth } from '../middleware/auth.js';

const router = Router();

router.get('/', homeView);
router.get('/realtimeproducts', auth, realTimeProductsView);
router.get('/chat', auth, chatView);
router.get('/products', auth, productsView);
router.get('/cart/:cid', auth, cartIdView);

router.get('/login', loginGet);
router.post('/login', loginPost);

router.get('/register', registerGet);
router.post('/register', registerPost);
router.get('/logout', logout);

export default router;