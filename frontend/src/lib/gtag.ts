declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const trackWhatsAppClick = (location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contacto_whatsapp', {
      event_category: 'engagement',
      event_label: location,
    });
  }
};
