import { z } from 'zod';

export const CreateContactDTO = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "El nombre es demasiado largo"),
  company: z.string().min(2, "El nombre de la empresa debe tener al menos 2 caracteres").max(100, "El nombre de la empresa es demasiado largo"),
  ruc: z.string().length(11, "El RUC debe tener exactamente 11 dígitos").regex(/^\d+$/, "El RUC solo debe contener números"),
  comment: z.string().max(500, "El comentario es demasiado largo").optional(),
});

export type CreateContactInput = z.infer<typeof CreateContactDTO>;
