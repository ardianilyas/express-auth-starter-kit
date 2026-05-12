import { ZodType, ZodError } from "zod";

export const validate = <T>(
  schema: ZodType<T>,
  data: unknown
): T => {
  try {
    return schema.parse(data);
  } catch (error) {
    if (error instanceof ZodError) {
      throw error;
    }

    throw error;
  }
};