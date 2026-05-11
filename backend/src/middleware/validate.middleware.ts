import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';
import { AppError } from '../utils/AppError';

export const validate = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.issues.map((issue: any) => `${issue.path.join('.')}: ${issue.message}`);
        return next(new AppError(`Validation failed: ${errorMessages.join(', ')}`, 400));
      }
      next(error);
    }
  };
};
