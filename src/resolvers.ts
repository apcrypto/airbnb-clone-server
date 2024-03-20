require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

const dbName = 'airbnb';
const collectionName = 'listings';
const db = client.db(dbName);

const resolvers = {
  Record: {
    id: (parent: {id: number, _id: number}) => parent.id ?? parent._id,
  },
  Query: {
    async record(_: any, { id }: any) {
      let collection = await db.collection(collectionName);
      let query = { _id: new ObjectId(id) };
      return await collection.findOne(query);
    },
    async records(_: any, { limit }: any, context: any) {
      let collection = await db.collection(collectionName);
      const records = await collection.find({}).toArray();
      console.log(records)
      return records.slice(0, limit);
    },
  },  
  Mutation: {
    async createRecord(_: any, { name, summary, images, address }: any, context: any) {
      let collection = await db.collection(collectionName);
      const insert = await collection.insertOne({ name, summary, images, address });
      if (insert.acknowledged)
        return { name, summary, images, address, id: insert.insertedId };
      return null;  
    },
  //   async updateRecord(_, args, context) {
  //     const id = new ObjectId(args.id);
  //     let query = { _id: new ObjectId(id) };
  //     let collection = await db.collection(collectionName);
  //     const update = await collection.updateOne(query, { $set: { ...args } });

  //     if (update.acknowledged) return await collection.findOne(query);

  //     return null;
  //   },
  async deleteRecord(_: any, { id }: any, context: any) {
     let collection = await db.collection(collectionName);
     const dbDelete = await collection.deleteOne({ _id: new ObjectId(id) });
       return dbDelete.acknowledged && dbDelete.deletedCount == 1 ? true : false;
     },
 },
};

module.exports = resolvers;
