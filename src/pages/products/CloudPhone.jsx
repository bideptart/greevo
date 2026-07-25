import ProductDetail from '../../components/ProductDetail.jsx'

export default function CloudPhone() {
  return (
    <ProductDetail
      eyebrow="Cloud Phone"
      title="HD calling to 190+ countries — from any device"
      subtitle="Replace your desk phones and your patchwork of calling apps with one cloud phone system that follows your team, not your office."
      heroIcon="call"
      blocks={[
        {
          heading: 'A phone system that lives in the browser',
          body: 'Set up extensions, hunt groups, and dial plans on a visual canvas — no PBX hardware, no on-site technician.',
          icon: 'device_hub',
          points: [
            'Cloud PBX with drag-and-drop call flows',
            '3-digit extensions, intercom, and call park',
            'Holiday routing and multilingual IVR menus',
          ],
        },
        {
          heading: 'Numbers that go wherever business takes you',
          body: 'Pick up local, toll-free, or international numbers in 100+ countries, and port existing numbers over for free.',
          icon: 'public',
          points: [
            'Free number porting, local and toll-free',
            'Virtual numbers in 100+ countries',
            'Automatic failover keeps calls connected',
          ],
        },
        {
          heading: 'Every call, captured and searchable',
          body: 'Call and screen recording with AI transcription means nothing important gets lost in a missed note.',
          icon: 'mic',
          points: [
            'Searchable transcripts in email and app',
            'Keyword search and PII redaction',
            'Custom retention windows per team',
          ],
        },
      ]}
      faqs={[
        { q: 'Can I keep my existing business number?', a: 'Yes — porting is free and typically completes within a few business days, with no downtime for inbound calls.' },
        { q: 'Do I need any hardware?', a: 'No. Greevo Cloud Phone runs from the browser, desktop app, or mobile app. Desk phones are optional.' },
        { q: 'How many countries can I call?', a: 'HD voice reaches 190+ countries, with local virtual numbers available in over 100 of them.' },
      ]}
    />
  )
}
