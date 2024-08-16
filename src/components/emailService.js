import { getFunctions, httpsCallable } from 'firebase/functions';

const functions = getFunctions();

export const sendEmail = async ({ name, scheduleTime }) => {
  const sendEmailFunction = httpsCallable(functions, 'sendEmail');
  await sendEmailFunction({ name, scheduleTime });
};
