import { MongoRepository } from '../../../../Shared/infrastructure/persistence/mongodb/MongoRepository';
import { CustomerRepository } from '../../domain/CustomerRepository';
import { ObjectId } from 'mongodb';

export class MongoCustomerRepository extends MongoRepository implements CustomerRepository {
  protected DB_NAME = 'customer';
  protected COLLECTION_NAME = 'customer';

  async save(data: Record<string, any>): Promise<void> {
    const collection = await this.collection();
    try {
      await collection.findOneAndUpdate(
        {
          _id: new ObjectId(data.id),
        },
        { $set: { ...data } },
        {
          upsert: true,
        },
      );
    } catch (error) {
      console.log(error);
    }
  }
}
