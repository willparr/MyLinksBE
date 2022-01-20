import { MongoClient } from 'mongodb';
let client: MongoClient;

export async function connectToDb() {
  const db = client.db();
  const links = db.collection('Links');
  const result = await links.findOne({ user: 'WillParrCodes' });
  await client.close();
}

export async function initMongoClient(doneCb?: () => void) {
  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fn5ey.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
  client = new MongoClient(uri);
  await client.connect();
  doneCb && doneCb();
}
