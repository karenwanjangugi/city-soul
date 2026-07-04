export const CONTACT_INTENT_EVENT = 'citysoul:contact-intent';

// Lets any component (Roster booking, Advisory CTA, nav Enquire button) tell the
// always-mounted Contact section which short form to show, without routing.
export function dispatchContactIntent(intent, extra) {
  window.dispatchEvent(new CustomEvent(CONTACT_INTENT_EVENT, { detail: { intent, extra } }));
}

export function goToContact(intent, extra) {
  if (intent) dispatchContactIntent(intent, extra);
  const contact = document.querySelector('#contact');
  if (contact) contact.scrollIntoView({ behavior: 'smooth' });
}
