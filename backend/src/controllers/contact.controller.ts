import { Request, Response, NextFunction } from 'express';
import { contactService } from '../services/contact.service';

class ContactController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const contact = await contactService.createContact(req.body);
      res.status(201).json({
        success: true,
        data: contact,
        message: 'Mensaje enviado correctamente'
      });
    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const contacts = await contactService.getAllContacts();
      res.status(200).json({
        success: true,
        data: contacts
      });
    } catch (error) {
      next(error);
    }
  }
}

export const contactController = new ContactController();
