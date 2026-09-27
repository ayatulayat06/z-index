interface ContactEmailDetails {
  name: string;
  email: string;
  projectType: string;
  scope: string;
  message: string;
  member?: string;
}

export function openContactEmail(details: ContactEmailDetails) {
  const body = [
    'New Z-INDEX project inquiry',
    '',
    `Name: ${details.name.trim()}`,
    `Email: ${details.email.trim()}`,
    `Project type: ${details.projectType}`,
    `Scope / timeline: ${details.scope.trim() || 'Not provided'}`,
    `Team member: ${details.member || 'Not specified'}`,
    '',
    'Message:',
    details.message.trim(),
  ].join('\n');

  const params = new URLSearchParams({
    subject: `New Z-INDEX inquiry: ${details.projectType}`,
    body,
  });

  window.location.href = `mailto:info.ayat06@gmail.com?${params.toString()}`;
}
