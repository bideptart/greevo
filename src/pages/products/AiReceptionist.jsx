import ProductDetail from '../../components/ProductDetail.jsx'

export default function AiReceptionist() {
  return (
    <ProductDetail
      eyebrow="AI Receptionist"
      title="The AI receptionist that picks up when your team can't"
      subtitle="Meet Greevo AI — she answers every call in parallel, qualifies the caller, books the meeting, and hands your team a clean summary. In any language."
      heroIcon="auto_awesome"
      blocks={[
        {
          heading: 'Never miss a call again',
          body: 'Greevo AI answers instantly, even when three calls come in at once, so no lead ever hits voicemail.',
          icon: 'call_received',
          points: [
            'Unlimited parallel call handling',
            'Custom greetings and call scripts',
            'Seamless handoff to a live agent on request',
          ],
        },
        {
          heading: 'Qualifies and books, automatically',
          body: 'The receptionist asks the questions your team would ask, checks your calendar, and books the meeting on the spot.',
          icon: 'event_available',
          points: [
            'Calendar-aware scheduling',
            'Lead qualification against your criteria',
            'CRM record created automatically',
          ],
        },
        {
          heading: 'Fluent in the languages your customers speak',
          body: 'Multilingual by default, with real-time translation so nothing is lost between the caller and your team.',
          icon: 'translate',
          points: [
            'Auto-detects caller language',
            'Real-time summary in your team\'s language',
            'Sentiment and intent tagging on every call',
          ],
        },
      ]}
      faqs={[
        { q: 'How is this different from a chatbot?', a: 'The AI receptionist handles real phone calls with voice, not just chat — it can answer, ask questions, and book meetings live on the call.' },
        { q: 'Can it hand off to a human?', a: 'Yes, at any point the caller or the AI can escalate to a live agent, with full context carried over.' },
        { q: 'What languages does it support?', a: 'The receptionist detects the caller\'s language automatically and responds natively, with live translation for your team.' },
      ]}
    />
  )
}
