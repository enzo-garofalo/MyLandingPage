import { z } from 'zod';

export const AnswerDataSchema = z.object({
  name: z.string(),
  HowWereClasses: z.string(),
  WhatDidYouLikeMost: z.string(),
  OpnionOnMetodology: z.string(),
  WouldRecommend: z.boolean(),
  SubmissionDate: z.string(),
});

export const SignUpDataSchema = z.object({
    name: z.string(),
    phone: z.string(),
});