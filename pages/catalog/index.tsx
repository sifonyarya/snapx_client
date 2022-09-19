import { useEffect } from 'react';
import { useRouter } from 'next/router';


export default function IndexCatalog() {
  const router = useRouter();
  useEffect(() => {
    router.push('/catalog/apartments');
  }),[];
  return <div />;
}
