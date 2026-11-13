import { initializeDatabase } from '@/repositories/initializeDatabase';
import { useEffect, useState } from 'react';

export const useDatabaseInit = () => {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function start() {
      try {
        await initializeDatabase();
        setReady(true);
      } catch (e) {
        if (e instanceof Error) setError(e.message);
        else {
          setError('Não foi possível iniciar o app.');
        }
      }
    }
    start();
  }, []);

  return { ready, error };
};
