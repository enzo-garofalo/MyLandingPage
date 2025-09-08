import type { Request, RequestHandler, Response } from "express";
import type Answer from "../models/studentsForm.js";
import { collections } from "./../models/studentsForm.js";

export namespace StudentFormManager {
  export const SubmitAnswer: RequestHandler = async (
    req: Request,
    res: Response
  ) => {
    try {

      if (!collections.answers) {
        throw new Error("Answers collection is not initialized.");
      }

      const newAnswer = req.body as Answer;
      const result = await collections.answers.insertOne(newAnswer);

      result
        ? res
          .status(201)
          .send(
            `Succesfully created a new amswer with ide ${result.insertedId}`
          )
        : res.status(500).send("Failed to create a new answer.");
    } catch (error : any) {
      console.error(error);
      res.status(400).send(error.message);
    }
  };
}
