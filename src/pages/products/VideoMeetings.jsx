import ProductDetail from '../../components/ProductDetail.jsx'

export default function VideoMeetings() {
  return (
    <ProductDetail
      eyebrow="Video Meetings"
      title="HD video rooms that take their own notes"
      subtitle="Host up to 200 participants with AI meeting notes, live translation, and one click to join — no downloads required."
      heroIcon="videocam"
      blocks={[
        {
          heading: 'Meetings that write themselves up',
          body: 'AI notes capture decisions and action items automatically, so nobody has to be the designated note-taker.',
          icon: 'summarize',
          points: [
            'Automatic summaries and action items',
            'Searchable transcripts after every call',
            'Shareable recap sent to attendees',
          ],
        },
        {
          heading: 'Global teams, one room',
          body: 'Live translation and captions mean language is never the reason a meeting runs long.',
          icon: 'translate',
          points: [
            'Real-time captions in multiple languages',
            'Rooms for up to 200 participants',
            'Screen share, breakout rooms, and recording',
          ],
        },
      ]}
      faqs={[
        { q: 'Do participants need to download anything?', a: 'No — meetings run in the browser. Native apps are available for a smoother experience but never required.' },
        { q: 'How long are recordings stored?', a: 'Retention is configurable per team, with options to export or auto-delete after a set period.' },
      ]}
    />
  )
}
