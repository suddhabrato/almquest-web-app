const nodemailer = require("nodemailer");
const pug = require("pug");
const htmlToText = require("html-to-text");

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(" ")[0];
    this.url = url;
    this.from = `Team AlmQuest <${process.env.EMAIL_FROM}>`;
  }

  createTransport() {
    return nodemailer.createTransport({
      service: "SendGrid",
      auth: {
        user: process.env.SENDGRID_USERNAME,
        pass: process.env.SENDGRID_PASSWORD,
      },
    });
  }

  async sendDonor(subject, distrName) {
    const html = pug.renderFile(`${__dirname}/../views/donorTemp.pug`, {
      firstName: this.firstName,
      url: this.url,
      subject,
      distrName,
    });

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.convert(html),
    };

    await this.createTransport().sendMail(mailOptions);
  }

  async sendDistr(subject, donorName) {
    const html = pug.renderFile(`${__dirname}/../views/distrTemp.pug`, {
      firstName: this.firstName,
      url: this.url,
      subject,
      donorName,
    });

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.convert(html),
    };

    await this.createTransport().sendMail(mailOptions);
  }

  async mailToDonor(name) {
    await this.sendDonor("Match found successfully!", name);
  }

  async mailToDistributor(name) {
    await this.sendDistr("Match found successfully!", name);
  }
};
