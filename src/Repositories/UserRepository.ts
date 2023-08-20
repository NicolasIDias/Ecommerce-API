import schema from '../Schema/User';
import UserMock from '../Mocks/UserMock';

class UsersRepository {
  async findAll() {
    const users = await UserMock.find({});
    return users;
  }

  async findById(id: string) {
    const user = await UserMock.find({ id: id });
    if(user.length === 0 || !user){
      return [
        {
          status: 'failed',
          statuscode: 502,
        },
        false,
      ];
    }else{
      return user;
    }
  }

  async findByEmail(email: string) {
    const user = await UserMock.find({ email: email });
    return user;
  }

  async delete(id: string) {
    const user: any = await UserMock.findOne({ id: id });
    try {
      await UserMock.deleteOne({ id: user.id })
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

  async update(id: string, username: string, password: string, email: string) {
      const user = await UserMock.findOne({ id: id });
      if(!user) {
        return [{
                  statuscode: 404,
                  message: "User not found"
                }, false]
      }
      try{
        user.overwrite({ id: id, username: username, email: email, password: password });
        await user.save();
        const newUser = await UserMock.findOne({ id: id });
        return [{
                  statuscode: 201,
                  message: "Success",
                  user: newUser
                }, true] 
      }catch(e){
        return [{
                  statuscode: 502,
                  message: "Failed",
                  error: e.message
                }, false] 
      }
  }

  async create(id: string, username: string, email: string, password: string) {
    try {
      await UserMock.insertMany({
        id: id,
        username: username,
        email: email,
        password: password,
      });
      return [
        {
          status: 'success',
          statuscode: 201,
        },
        true,
      ];
    } catch (e) {
      return [
        {
          status: 'error',
          statuscode: 502,
          error: e.message,
        },
        false,
      ];
    }
  }
}

export default new UsersRepository();
