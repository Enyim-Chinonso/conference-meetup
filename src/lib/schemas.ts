import { z } from 'zod';

export const registrationSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  jobTitle: z.string().optional(),
  ticketType: z.enum(['general', 'vip'], {
    required_error: 'You need to select a ticket type.',
  }),
});
