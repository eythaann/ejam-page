import { useCallback, useEffect, useRef } from 'react';

export const useInterval = (callback: () => void, delay: number): () => void => {
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const resetInterval = useCallback(() => {
    if (intervalIdRef.current) clearInterval(intervalIdRef.current);
    intervalIdRef.current = setInterval(() => savedCallback.current && savedCallback.current(), delay);
  }, [delay]);

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalIdRef.current) clearInterval(intervalIdRef.current);
    };
  }, [delay, resetInterval]);

  return resetInterval;
};