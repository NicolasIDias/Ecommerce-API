import CartRepository from '../../Repositories/CartRepository'
import { Request, Response } from 'express'

class Cart {
  async index(request: Request, response: Response){
    const id: string = request.params.id
    const cart = await CartRepository.findCartByUserId(id)
    if(!cart){
      response.status(404).send({ message: 'User not found', statuscode: 404 })
    }else{
      response.status(200).send({ statuscode: 200, user: cart })
    }
  }
  async show(request: Request, response: Response){
    
  }
  async insert(request: Request, response: Response){

  }
  async delete(request: Request, response: Response){

  }
}

export default new Cart();
