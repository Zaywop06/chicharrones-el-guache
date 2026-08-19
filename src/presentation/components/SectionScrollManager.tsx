import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export function SectionScrollManager() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const sectionId = pathname === '/' ? 'inicio' : pathname.slice(1);
    const animationFrame = window.requestAnimationFrame(() => {
      const section = document.getElementById(sectionId);
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      section?.scrollIntoView({
        behavior: navigationType === 'PUSH' && !prefersReducedMotion ? 'smooth' : 'auto',
        block: 'start',
      });
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [navigationType, pathname]);

  return null;
}
