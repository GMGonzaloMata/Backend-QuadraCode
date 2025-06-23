import nodemailer from "nodemailer";
import { transporter } from "../config/nodemailer";

interface ContactData {
  nombre: string;
  compania: string;
  email: string;
  telefono: string;
  mensaje: string;
}

interface ContactData2 {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

export const sendMail = async ({
  nombre,
  compania,
  email,
  telefono,
  mensaje,
}: ContactData) => {
  const mailOptions = {
    from: `"Formulario Web" <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_TO,
    subject: "Nuevo mensaje desde el formulario",
    html: `
      <h3>Nuevo mensaje desde la web</h3>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Compañía:</strong> ${compania}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export const sendMail2 = async ({
  nombre,
  email,
  telefono,
  mensaje,
}: ContactData2) => {
  const mailOptions = {
    from: `"Página Lossa" <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_TO2,
    subject: "Nuevo mensaje desde el formulario",
    html: `
      <h3>Nuevo mensaje desde la web</h3>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
