import { useLocation } from 'react-router-dom';

export function usePathname() {
  return useLocation().pathname;
}

export function notFound() {
  if (typeof window !== 'undefined') {
    window.history.replaceState(null, '', '/404');
  }
  return undefined;
}
