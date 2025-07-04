import { Request, Response, NextFunction } from "express";
import { sendMail, sendMail2 } from "../service/mailer";

export const sendContactEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { nombre, compania, email, telefono, mensaje } = req.body;

  if (!nombre || !compania || !email || !telefono || !mensaje) {
    return res
      .status(400)
      .json({ error: "Todos los campos son obligatorios." });
  }

  try {
    await sendMail({ nombre, compania, email, telefono, mensaje });
    res
      .status(200)
      .json({ success: true, message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res
      .status(500)
      .json({ success: false, message: "Error al enviar el correo" });
  }
};

export const ping = (_req: Request, res: Response) => {
  res.status(200).send("Backend activo");
};

export const sendContactSimpleEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { nombre, email, telefono, mensaje } = req.body;

  if (!nombre || !email || !telefono || !mensaje) {
    return res
      .status(400)
      .json({ error: "Todos los campos son obligatorios." });
  }

  try {
    await sendMail2({ nombre, email, telefono, mensaje });
    res
      .status(200)
      .json({ success: true, message: "Correo enviado correctamente" });
  } catch (error: any) {
    console.error("Error al enviar el correo:", error);

    return res.status(500).json({
      success: false,
      message: `Error al enviar el correo: ${
        error.message || "error desconocido"
      }`,
    });
  }
};
