// /lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Defina a URL do MongoDB no arquivo .env
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Por favor, adicione sua Mongo URI ao arquivo .env');
}

if (process.env.NODE_ENV === 'development') {
  // Use o cache global no desenvolvimento
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Em produção, crie um novo cliente
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;