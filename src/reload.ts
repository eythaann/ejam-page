import { Env } from './modules/shared/config';

export const setReloadOnChanges = async () => {
  if (Env.ambient !== 'production') {
    const eventSource = new EventSource('http://localhost:3000/events');

    eventSource.onerror = () => {
      console.log('Fail Hot Reloading, retrying...');
      setTimeout(() => setReloadOnChanges(), 3000);
    };

    eventSource.onopen = () => {
      console.log('Hot Reloading Connection Complete.');
    };

    eventSource.onmessage = (e) => {
      const data = JSON.parse(e.data);

      const { hasChangesOnCSS = false, hasChangesOnJS = false } = data;

      console.log(data);

      if (hasChangesOnCSS && !hasChangesOnJS) {
        const links = document.getElementsByTagName ('link') as any;

        for (const link of links) {
          const url = new URL(link.href);
          if (url.host === location.host && url.pathname.startsWith('/bundle.css')) {
            const next = link.cloneNode();
            next.href = '/bundle.css?' + Math.random().toString(36).slice(2);
            next.onload = () => link.remove();
            link.parentNode.insertBefore(next, link.nextSibling);
            return;
          }
        }
      }

      if (hasChangesOnJS) {
        location.reload();
      }
    };
  }
};