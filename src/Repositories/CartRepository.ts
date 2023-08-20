import ProductMock from '../Mocks/ProductMock'
import UsersMock from '../Mocks/UserMock'

class CartRepository {
  async findCartByUserId(id: string){
    const user = await UsersMock.findOne({ id: id })
    return user
  }
  async add(userId: string, productId: string, quantity: number){
    
  }
  async remove(){

  }
}

export default new CartRepository()