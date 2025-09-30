import type { Request, RequestHandler, Response } from "express";
import { AnswerDataSchema } from "./../models/schemas.js";
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

			const newAnswer = AnswerDataSchema.parse(req.body);
			const result = await collections.answers.insertOne(newAnswer);

			if (result && result.insertedId) {
				return res.status(201).json({
					message: "Successfully created a new answer",
					id: result.insertedId.toString(),
				});
			} else {
				return res.status(500).json({ message: "Failed to create a new answer" });
			}
		} catch (error: any) {
			console.error(error);
			return res.status(400).json({ message: error.message });
		}
	};
}
