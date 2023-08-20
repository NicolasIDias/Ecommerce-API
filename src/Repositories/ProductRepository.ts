//import schema from '../Schema/Product';
import ProductMock from '../Mocks/ProductMock';
import generateUniqueId from '../Packages/Id-generator/GenerateProductId';

class ProductsRepository {
  async findAll() {
    const products = await ProductMock.find({});
    return products;
  }

  async findByProductId(productId: string) {
    const product = await ProductMock.find({ id: productId });
    return product;
  }

  async insertProduct(slug: string, title: string, description: string) {
    const id = await generateUniqueId();
    try {
      await ProductMock.insertMany({ id: id, slug: slug, title: title, description: description });
      return true;
    } catch (e) {
      return [e, false];
    }
  }

  async deleteProductById(id: string){
    const product: any = await ProductMock.findOne({ id: id });
    try {
      await ProductMock.deleteOne({ id: product.id })
      return [
        {
          status: 'success',
          statuscode: 204,
        },
        true,
      ];
    } catch (e) {
      return [
        {
          status: 'failed',
          error: e.message,
          statuscode: 502,
        },
        false,
      ];
    }
  }
}

export default new ProductsRepository();
