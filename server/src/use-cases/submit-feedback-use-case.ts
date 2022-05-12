import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class ValidationError extends Error {
  constructor(message = "") {
    super(message);
    this.name = "ValidationError";
  }
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter,
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if (!type) throw new ValidationError('Tipo de feedback obrigatório.');
    if (!comment) throw new ValidationError('Comentário obrigatório.');
    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new ValidationError('Formato de imagem inválido.');
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    })

    await this.mailAdapter.sendMail({
      subject: 'Novo feedback',
      body: [
          `<div style="background-position: center -120px; background-repeat:no-repeat; background-image:url(https://raw.githubusercontent.com/andersonrodolfo/feedget/main/.github/nlw_return.jpg); max-width: 800px; margin: 0 auto;">`,
          `<div style="padding: 100px 0 0 0; max-width: 400px; margin: auto;">`,
          `<div style="background: #ffffff; padding: 30px 30px 30px 30px; margin: 0 32px 0 32px;">`,
          `<p style="color: #333333; font-family: Arial, sans-serif; font-size: 20px; margin: 0 0 16px 0;">`,
          `Enviaram um novo feedback!`,
          `</p>`,
          `<p style="color: #333333; font-family: Arial, sans-serif; font-size: 14px; margin: 0;"><strong>Tipo do feedback:</strong> ${type}</p>`,
          `<p style="color: #333333; font-family: Arial, sans-serif; font-size: 14px; margin: 8px 0 0 0;"><strong>Comentário:</strong> ${comment}</p>`,
          `</div>`,
          `</div>`,
          `<div style="background: #333333; width: 100%; height: 2px"></div>`,
          screenshot && `<img src="${screenshot}" width="100%" alt="screenshot" />,`,
          `</div>`,
        ].join('\n')
    })
  }
}
