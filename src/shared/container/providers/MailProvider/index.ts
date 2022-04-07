import { container } from "tsyringe";

import { IMailProvider } from "./IMailPRovider";
import { EtherealMailProvider } from "./implementations/EtherealMailProvider";
import { SESMailProvider } from "./implementations/SESMailPRovider";

const mailProvider = {
  ethereal: container.resolve(EtherealMailProvider),
  ses: container.resolve(SESMailProvider),
};

container.registerInstance<IMailProvider>(
  "MailProvider",
  mailProvider[process.env.MAIL_PROVIDER]
);
