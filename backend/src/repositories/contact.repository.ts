import { Contact, IContact } from '../models/Contact.model';

class ContactRepository {
  async create(data: Partial<IContact>) {
    return Contact.create(data);
  }

  async findAll() {
    return Contact.find().sort({ createdAt: -1 });
  }

  async updateStatus(id: string, status: 'pending' | 'contacted') {
    return Contact.findByIdAndUpdate(id, { status }, { new: true });
  }
}

export const contactRepository = new ContactRepository();
