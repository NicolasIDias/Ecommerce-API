import UsersRepository from '../../Repositories/UserRepository';
import { Request, Response } from 'express';
import generateUniqueId from '../../Packages/Id-generator/GenerateUserId';

class User {

  async index(request: Request, response: Response) {
    const users = await UsersRepository.findAll();
    response.send(users);
  }

  async show(request: Request, response: Response) {
    const id: string = request.params.id;
    const user = await UsersRepository.findById(id);

    if (!user || user.length === 0) {
      return response.status(404).json({ error: 'User not found' });
    }
    response.json(user);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const user = await UsersRepository.findById(id);

    if (!user || user.length === 0) {
      response.status(404).send({
        message: 'User not found'
      });
    } else {
      const deleted = await UsersRepository.delete(id);
      console.log(deleted)
      response.status(204).json(deleted);
    }
  }

  async insert(request: Request, response: Response){
    const id = await generateUniqueId();
    const { username, email, password } = request.body;
    if(!username || !email || !password){
      response.status(502).send({ Error: 'Missing arguments on body',
                                  Structure: `{ username: REQUIRED, email: REQUIRED, password: REQUIRED }`
                                })
    }
    const user = await UsersRepository.findByEmail(email)
    if(!user || user.length === 0) {
      const insert = await UsersRepository.create(id, username, email, password)
      response.send(insert)
    }
  }

  async update(request: Request, response: Response){
    const { username, email, password } = request.body;
    const { id } = request.params
    const update = await UsersRepository.update(id, username, password, email )
    if(update[1] === false){
      response.status(502).json(update)
    }else if(update[1] === true) {
      response.status(200).json(update)
    }
  }
}

export default new User();
