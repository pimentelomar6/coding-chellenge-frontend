import { z } from "zod";

export const userSchema = z.object({
    name: z.string().min(3, {
            message: "El campo nombre es requerido",
          
    }),
    email: z.string().email(
        {
            message: "El campo correo es requerido",
          }
    ),
    message: z.string().min(3,  {
        message: "El campo mensaje debe ser rellenado"
    })
})