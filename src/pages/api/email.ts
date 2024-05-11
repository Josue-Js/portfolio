// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { resend } from "../../services/resend";
import { z } from "zod";
import { validationForm } from "@/utils/validationForm";

type Data = {
  success?: boolean;
  message?: string;
};


type BodyData = {
  name?: string;
  message?: string;
  email?: string;
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>,
) {

  const body = request.body as BodyData;

  if (request.method != "POST") {
    return response.status(400).json({ message: "John Doe" })
  }

  const formSchema = validationForm(body)

  if (formSchema.success) {
    try {
      const result = await resend.emails.send({
        from: `Acme <onboarding@resend.dev>`,
        to: ['josuesilva.js34.js@gmail.com'],
        subject: 'contact',
        text: `
        name: ${formSchema.data.name}, 
        message: ${formSchema.data.message} 
        email: ${formSchema.data.email}`
      });

      if (result.error) {
        return response.status(503).json({ success: false, message: 'Internal server error' });
      }
      return response.status(200).json({ success: true });
    } catch (error) {
      return response.status(503).json({ success: false, message: 'Internal server error' });
    }

  } else {
    return response.status(400).json({
      success: false,
      message: 'error validation'
    });
  }

}
