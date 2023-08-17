// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

// Global Variables

export const collections: { hlTests?: mongoDB.Collection } = {};

// Initialize Connection

export async function connectToDatabase() {
  dotenv.config({ path: `${__dirname}/.env` });

  const connectionString: string = process.env.DB_CONN_STRING!;
  const databaseName: string = process.env.DB_NAME!;
  const hlTestsCollectionRef: string = process.env.HL_TESTS_COLLECTION_NAME!;

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(connectionString);

  await client.connect();

  const db: mongoDB.Db = client.db(databaseName);

  const hlTestsCollection: mongoDB.Collection =
    db.collection(hlTestsCollectionRef);

  collections.hlTests = hlTestsCollection;

  console.log(
    `Succefffully connected to database: ${db.databaseName} and collection: ${hlTestsCollection}`
  );
}
