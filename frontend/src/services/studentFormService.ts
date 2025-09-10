
export interface AnswerData {
  name: string;
  HowWereClasses: string;
  WhatDidYouLikeMost: string;
  OpnionOnMetodology: string;
  WouldRecommend: boolean;
  SubmissionDate: string;
}

export async function submitForm(data: AnswerData) {
    const response = await fetch("http://localhost:3000/student/submit-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error("Erro ao enviar formulário");
  }

  return await response.json();
}