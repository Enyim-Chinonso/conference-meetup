
'use server';

import { registrationSchema } from '@/lib/schemas';

export type FormState = {
  message: string;
  success: boolean;
  errors?: {
    [key: string]: string[] | undefined;
  };
};

export async function registerForConference(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const rawFormData = Object.fromEntries(formData.entries());
    const validatedFields = registrationSchema.safeParse(rawFormData);

    if (!validatedFields.success) {
      return {
        message: 'Invalid form data. Please check your entries.',
        errors: validatedFields.error.flatten().fieldErrors,
        success: false,
      };
    }

    // Here you would typically:
    // 1. Process payment with Stripe using the validated data
    //    const paymentIntent = await stripe.paymentIntents.create({...});

    // 2. Save registration details to your database
    //    await db.collection('registrations').add(validatedFields.data);

    // 3. Send a confirmation email
    //    await sendConfirmationEmail(validatedFields.data.email);

    // For this demo, we'll just simulate success.
    console.log('Registration data:', validatedFields.data);

    // Simulate a delay for processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    return {
      message: 'Registration successful! A confirmation has been sent to your email.',
      success: true,
    };
  } catch (error) {
    console.error('Registration error:', error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
      success: false,
    };
  }
}
