import express from 'express';

import { NodeMailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase, ValidationError } from './use-cases/submit-feedback-use-case';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;
  
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodeMailerMailAdapter = new NodeMailerMailAdapter();
  
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodeMailerMailAdapter
  );

  try {
    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot,
    });
    return res.status(200).json({ message: 'Feedback enviado com sucesso!' });
  } catch (error) {
    let errorMessage = "Sistema temporariamente indisponível, tente novamente mais tarde.";
    if (error instanceof ValidationError) errorMessage = error.message;
    return res.status(400).json({ message: errorMessage });
  }
});