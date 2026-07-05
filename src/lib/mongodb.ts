import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI

if (!uri) {
  throw new Error('La variable MONGODB_URI no está definida.')
}

const client = new MongoClient(uri)

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

const clientPromise = global._mongoClientPromise ?? client.connect()

if (process.env.NODE_ENV !== 'production') {
  global._mongoClientPromise = clientPromise
}

export default clientPromise
