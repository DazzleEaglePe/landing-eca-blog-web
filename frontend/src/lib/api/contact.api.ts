import { apiClient } from '../api-client';

export interface CreateContactPayload {
  name: string;
  company: string;
  ruc: string;
  email: string;
  phone: string;
  comment?: string;
}

export const contactApi = {
  create: async (data: CreateContactPayload) => {
    return apiClient.post('/contact', data);
  },
};
