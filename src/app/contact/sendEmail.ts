import emailjs from '@emailjs/browser';
import { FieldValues } from 'react-hook-form';
const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
export const sendEmail = (data: FieldValues) => {
  console.log(data);
  emailjs
    .send(SERVICE_ID as string, TEMPLATE_ID as string, data, {
      publicKey: 'YWnpZ2tvf40GVjswg',
    })
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      }
    );
};
