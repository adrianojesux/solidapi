import { IMailProvider, IMessage } from "./../IMailProvider";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

/*
Host:
smtp.mailtrap.io
Port:
25 or 465 or 587 or 2525
Username:
fbe9dab7cce352
Password:
1d621a05731035
Auth:
PLAIN, LOGIN and CRAM-MD5
TLS:
Optional (STARTTLS on all ports)
*/

export class MailTrapMailProvider implements IMailProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      secure: false,
      auth: {
        user: "fbe9dab7cce352",
        pass: "1d621a05731035",
      },
    });
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    });
  }
}
