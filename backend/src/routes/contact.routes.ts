import { Router } from 'express';
import { contactController } from '../controllers/contact.controller';
import { validate } from '../middleware/validate.middleware';
import { CreateContactDTO } from '../dtos/contact.dto';

const router = Router();

// Endpoint público para recibir contactos desde la landing page
router.post('/', validate(CreateContactDTO), contactController.create);

// TODO: Endpoint protegido (admin) para ver los contactos (requiere auth.middleware)
router.get('/', contactController.getAll);

export default router;
