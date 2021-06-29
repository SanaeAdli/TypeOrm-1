"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var productController_1 = require("../controllers/productController");
//Afficher liste des produits avec GET
router.get('/list', productController_1.product_list);
//Creer un produit avec POST
router.post('/create', productController_1.product_create);
//Lire un produit par son id
router.get('/:id', productController_1.product_details);
//Modifier un produit
router.put('/:id/update', productController_1.product_update);
//Supprimer un produit
router.delete('/:id/delete', productController_1.product_delete);
exports.default = router;
