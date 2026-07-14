// Central place mapping an enquiry "intent" (event / talent / advisory / general)
// to the Contact page. Any component with access to a react-router navigate
// function can send a visitor straight to /contact with the right form tab
// pre-selected.
export function goToContact(navigate, intent, extra) {
  navigate('/contact', { state: { intent, extra } });
}
