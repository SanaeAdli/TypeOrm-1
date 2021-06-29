import {Router} from 'express';

const router = Router();
import{product_list, product_create, product_update, product_delete, product_details} from '../controllers/productController';

//Afficher liste des produits avec GET
router.get('/list', product_list);

//Creer un produit avec POST
router.post('/create', product_create);

//Lire un produit par son id
router.get('/:id', product_details);

//Modifier un produit
router.put('/:id/update', product_update);

//Supprimer un produit
router.delete('/:id/delete', product_delete);

export default router ;