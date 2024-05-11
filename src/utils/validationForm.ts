import { z } from "zod";

type data = {
    name?: string;
    email?: string;
    message?: string;
}


export function validationForm(data: data) {

    const formValidation = z.object({
        name: z.string().min(3),
        email: z.string().email(),
        message: z.string().min(10),
    }).safeParse(data);

    return formValidation
}