import { redirect } from 'next/navigation';

export default function SuccessRedirect({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const token = searchParams.token;
  if (token) {
    redirect(`/thank-you?token=${token}`);
  }
  redirect('/thank-you');
}
