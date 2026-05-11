import { contactRepository } from '../repositories/contact.repository';
import { CreateContactInput } from '../dtos/contact.dto';
import { AppError } from '../utils/AppError';

class ContactService {
  async createContact(data: CreateContactInput) {
    // Aquí se podría agregar lógica de negocio adicional (ej. validar spam, enviar email, etc)
    return contactRepository.create(data);
  }

  async getAllContacts() {
    return contactRepository.findAll();
  }

  async updateContactStatus(id: string, status: 'pending' | 'contacted') {
    const updated = await contactRepository.updateStatus(id, status);
    if (!updated) {
      throw new AppError('Contacto no encontrado', 404);
    }
    return updated;
  }
}

export const contactService = new ContactService();
