import expess from 'express';
import authUser from '../middleware/authUser.js';
import { addAddress, getAddress } from '../controllers/addressController.js';

const addressRouter = expess.Router();

addressRouter.post('/add', authUser, addAddress);
addressRouter.get('/get/:id', authUser, getAddress);

export default addressRouter;