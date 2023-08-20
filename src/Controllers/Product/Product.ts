import ProductsRepository from '../../Repositories/ProductRepository';
import { Request, Response } from 'express';

class Products {
  async index(request: Request, response: Response) {
    const products = await ProductsRepository.findAll();
    if (request.query.order === 'asc') response.json(products);
    else if (request.query.order === 'desc') response.json([...products].reverse());
    else response.json([...products].reverse());
  }

  async show(request: Request, response: Response){
    const id: string = request.params.id
    const product = await ProductsRepository.findByProductId(id)

    if(!product || product.length === 0){
      return response.send({ 
                              error: 'Product not found', 
                              statuscode: 404 
                           })
    }
    response.send(product);
  }

  async insert(request: Request, response: Response) {
    const { slug, title, desc } = request.body;
    const insert = await ProductsRepository.insertProduct(slug, title, desc);
    if (insert[1] === false) {
      response.status(500).send({ Error: insert[0] });
    } else if (insert === true) {
      response.status(200).json("success");
    }
  }

  async delete(request: Request, response: Response){
    const id: string = request.params.id;
    const product = await ProductsRepository.deleteProductById(id);
    response.send(product);
  }

}

export default new Products();
