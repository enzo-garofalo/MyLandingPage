
export interface AnswerData {
  name: string;
  HowWereClasses: string;
  WhatDidYouLikeMost: string;
  OpnionOnMetodology: string;
  WouldRecommend: boolean;
  SubmissionDate: string;
}

export async function submitForm(data: AnswerData) {
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await fetch(`${apiUrl}/student/submit-form`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Erro ao enviar formulário");
  }

  return await response.json();
}