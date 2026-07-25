import ProductDetail from '../../components/ProductDetail.jsx'

export default function SmsMms() {
  return (
    <ProductDetail
      eyebrow="Business SMS & MMS"
      title="Two-way texting, from the number your customers already know"
      subtitle="Send and receive SMS and MMS from your existing business line, with a shared inbox your whole team can work from."
      heroIcon="sms"
      blocks={[
        {
          heading: 'One inbox, every conversation',
          body: 'Every text lands in a shared team inbox, so any teammate can pick up the thread without losing context.',
          icon: 'forum',
          points: [
            'Shared inbox with assignment and status',
            'Read receipts and typing indicators',
            'Media, links, and attachments supported',
          ],
        },
        {
          heading: 'Automate the repetitive replies',
          body: 'Set up auto-replies, scheduled texts, and templates for the messages your team sends every day.',
          icon: 'bolt',
          points: [
            'Templates and saved replies',
            'Scheduled and bulk sends',
            'Keyword-triggered auto-responses',
          ],
        },
      ]}
      faqs={[
        { q: 'Can I text from my existing landline?', a: 'Most landline and VoIP numbers can be text-enabled. Our onboarding team checks eligibility during setup.' },
        { q: 'Is there a message limit?', a: 'Plans include a generous monthly allotment; overage is billed transparently with no surprise fees.' },
      ]}
    />
  )
}
