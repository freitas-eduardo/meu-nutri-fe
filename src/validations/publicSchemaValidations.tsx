import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "O campo senha é obrigatório"
    })
    .email({
      message: "E-mail inválido"
    }),
  password: z.string({
    required_error: "O campo senha é obrigatório"
  })
});
