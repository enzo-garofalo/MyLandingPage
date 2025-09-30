import * as dotenv from "dotenv";
import * as mongoDB from "mongodb";
import { ObjectId } from "mongodb";

export default class Answer {
  constructor(
    public name: string,
    public HowWereClasses: string,
    public WhatDidYouLikeMost: string,
    public OpnionOnMetodology: string,
    public WouldRecommend: string,
    public SubmissionDate: string,
    public id?: ObjectId
  ) {}
}

export const collections: { answers?: mongoDB.Collection } = {};

export async function connectToDatabase() {
  dotenv.config();

  if (
    !process.env.DB_CONN_STRING ||
    !process.env.ANSWER_COLLECTION_NAME ||
    !process.env.DB_CONN_STRING
  ) {
    throw new Error("Something is not defined in environment variables");
  }

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const answerCollection: mongoDB.Collection = db.collection(
    process.env.ANSWER_COLLECTION_NAME
  );

  collections.answers = answerCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${answerCollection.collectionName}`
  );
}