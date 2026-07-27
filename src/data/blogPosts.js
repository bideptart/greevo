export const TAG_STYLES = {
  'AI Voice': { pill: 'tag-blue', image: 'linear-gradient(135deg, #60a5fa, #2563eb)' },
  Product: { pill: 'tag-violet', image: 'linear-gradient(135deg, #a78bfa, #7c3aed)' },
  Guides: { pill: 'tag-cyan', image: 'linear-gradient(135deg, #67e8f9, #0891b2)' },
  Company: { pill: 'tag-navy', image: 'linear-gradient(135deg, #64748b, #1e293b)' },
  Compliance: { pill: 'tag-teal', image: 'linear-gradient(135deg, #5eead4, #0d9488)' },
  Pricing: { pill: 'tag-amber', image: 'linear-gradient(135deg, #fcd34d, #d97706)' },
}

export const AUTHOR = 'Greevo Team'

export const BLOG_POSTS = [
  {
    slug: 'ai-voice-natural-conversations',
    tag: 'AI Voice',
    featured: true,
    title: 'How Greevo\'s AI voice sounds less like a robot and more like a person',
    date: 'Jul 22, 2026',
    readTime: '4 min read',
    excerpt: 'Native audio generation, not text-to-speech bolted onto a script — here\'s what actually changed.',
    sections: [
      {
        heading: 'Why most AI voices still sound robotic',
        paragraphs: [
          'Most voice assistants pipe text through a speech synthesizer that was never trained on real conversation — it fills silences with dead air, mistimes pauses, and can\'t react mid-sentence when a caller interrupts.',
          'The result is technically correct but socially wrong: it sounds like it\'s reading a script, because it is.',
        ],
      },
      {
        heading: 'What changed in Greevo\'s voice model',
        paragraphs: [
          'Greevo\'s AI receptionist generates audio natively, not text-first. It carries tone, pacing, and micro-pauses the way a person would, and it can barge in or yield the floor in real time when a caller talks over it.',
          'Sub-second response latency means the back-and-forth feels like a phone call, not a chatbot with a speaker attached.',
        ],
      },
      {
        heading: 'What this means for your callers',
        paragraphs: [
          'Most callers can\'t tell they\'re talking to an AI within the first ten seconds — which matters, because the moment a caller feels like they\'re "talking to a machine," they disengage and ask for a human.',
          'A voice that sounds present keeps the conversation moving, and that\'s the difference between a booked appointment and a hang-up.',
        ],
      },
    ],
  },
  {
    slug: 'ai-voice-multilingual',
    tag: 'AI Voice',
    title: 'Multilingual AI voice: how auto-detection works across 30+ languages',
    date: 'Jul 15, 2026',
    readTime: '3 min read',
    excerpt: 'No IVR menu, no "press 2 for Spanish" — the AI just listens and responds in the caller\'s language.',
    sections: [
      {
        heading: 'The old way: menus and guesswork',
        paragraphs: [
          'Traditional phone systems handle multiple languages with an IVR menu — "for English, press 1" — which adds friction before the conversation even starts, and still assumes the caller can read the menu in the first place.',
        ],
      },
      {
        heading: 'How auto-detection works',
        paragraphs: [
          'Greevo\'s AI receptionist listens to the first few seconds of speech, identifies the language automatically, and responds natively — no menu, no delay. It currently covers 30+ languages and switches mid-call if the caller code-switches.',
        ],
      },
      {
        heading: 'Where this matters most',
        paragraphs: [
          'Teams with international customers, multilingual local markets, or after-hours coverage across time zones see the biggest lift — callers get a native-sounding response regardless of who\'s on shift.',
        ],
      },
    ],
  },
  {
    slug: 'ai-voice-latency',
    tag: 'AI Voice',
    title: 'Why latency is the make-or-break metric for AI voice agents',
    date: 'Jul 08, 2026',
    readTime: '4 min read',
    excerpt: 'A 2-second delay feels instant in a chat window. On a phone call, it feels like a dropped line.',
    sections: [
      {
        heading: 'Text chat and voice calls have different clocks',
        paragraphs: [
          'In a chat interface, a couple of seconds of "typing..." feels normal. On a phone call, silence past about 500ms starts to feel like the line went dead, and past a second, most callers say "hello?" or hang up.',
        ],
      },
      {
        heading: 'What sub-second latency actually requires',
        paragraphs: [
          'Getting there means the entire pipeline — speech recognition, reasoning, and voice generation — has to run in parallel instead of in sequence, and the voice model has to start speaking before it has finished "thinking" the whole response.',
          'Greevo\'s AI receptionist is built around this constraint from the ground up, not retrofitted onto a slower text-based model.',
        ],
      },
      {
        heading: 'Why this shows up in your call metrics',
        paragraphs: [
          'Lower latency directly correlates with lower call abandonment and higher completion rates — callers stay on the line when the conversation feels responsive, and that\'s measurable in your analytics dashboard within the first week.',
        ],
      },
    ],
  },
  {
    slug: 'ai-voice-handoff',
    tag: 'AI Voice',
    title: 'Designing a graceful handoff from AI voice to a human agent',
    date: 'Jun 30, 2026',
    readTime: '3 min read',
    excerpt: 'The AI should know when to step aside — and the human shouldn\'t have to ask the caller to repeat themselves.',
    sections: [
      {
        heading: 'The failure mode: starting over',
        paragraphs: [
          'The fastest way to frustrate a caller is to make them explain their problem twice — once to the AI, then again to a human after being transferred. That\'s the single biggest complaint about early voice-bot deployments.',
        ],
      },
      {
        heading: 'How Greevo handles the handoff',
        paragraphs: [
          'When the AI receptionist escalates — because the caller asked, or the request is outside its scope — it passes full conversation context to the live agent: what was discussed, what the caller needs, and any details already collected.',
          'The agent picks up mid-conversation instead of cold, and the caller never has to repeat themselves.',
        ],
      },
      {
        heading: 'Setting your own escalation rules',
        paragraphs: [
          'You control exactly when handoff triggers — after a set number of failed attempts, on specific keywords, or whenever the caller simply asks for a person. It\'s configurable per queue, not a one-size-fits-all switch.',
        ],
      },
    ],
  },
  {
    slug: 'ai-voice-roi',
    tag: 'AI Voice',
    title: 'The real ROI of an AI voice receptionist: what teams actually save',
    date: 'Jun 22, 2026',
    readTime: '5 min read',
    excerpt: 'Not "replace your receptionist" — the math that actually moves for most teams is missed-call recovery.',
    sections: [
      {
        heading: 'The wrong way to calculate ROI',
        paragraphs: [
          'Most pitches frame AI voice as headcount replacement: one AI instead of one receptionist. That\'s rarely the real saving, and it undersells what actually changes for most teams.',
        ],
      },
      {
        heading: 'Where the savings actually show up',
        paragraphs: [
          'The bigger number is missed-call recovery: calls that used to go to voicemail after hours or during peak volume now get answered, qualified, and booked automatically — every one of those used to be lost revenue.',
          'Teams also cut the time agents spend on repetitive intake questions, freeing them for the calls that actually need a human.',
        ],
      },
      {
        heading: 'What to actually measure',
        paragraphs: [
          'Track answer rate, after-hours conversion, and average handle time before and after rollout — those three numbers tell you more about ROI than any headcount comparison.',
        ],
      },
    ],
  },
  {
    slug: 'ai-receptionist-changes',
    tag: 'Product',
    title: 'Inside the new AI receptionist: what changed and why',
    date: 'Jul 14, 2026',
    readTime: '3 min read',
    excerpt: 'A look at the latest updates to Greevo\'s AI receptionist and the reasoning behind them.',
    sections: [
      {
        heading: 'What shipped',
        paragraphs: [
          'The latest release focuses on faster response times, better handling of interruptions, and more accurate call summaries delivered straight to your CRM.',
        ],
      },
      {
        heading: 'Why it matters',
        paragraphs: [
          'These changes came directly from support tickets and call recordings — the goal was fixing the moments where callers noticed they were talking to an AI, not adding new features for their own sake.',
        ],
      },
    ],
  },
  {
    slug: 'port-number-without-downtime',
    tag: 'Guides',
    title: 'How to port your business number without downtime',
    date: 'Jul 02, 2026',
    readTime: '4 min read',
    excerpt: 'A step-by-step walkthrough of porting an existing number into Greevo with zero missed calls.',
    sections: [
      {
        heading: 'Before you start',
        paragraphs: [
          'Gather your account number, PIN, and a recent bill from your current carrier — most porting delays come from mismatched account details, not technical issues.',
        ],
      },
      {
        heading: 'The porting window',
        paragraphs: [
          'Greevo keeps your number live on the old carrier until the new one is fully active, so there\'s no gap where calls fail to connect. Most ports complete within a few business days.',
        ],
      },
    ],
  },
  {
    slug: 'call-routing-rules',
    tag: 'Product',
    title: '5 call routing rules every growing team should set up',
    date: 'Jun 21, 2026',
    readTime: '3 min read',
    excerpt: 'The routing patterns that matter most once your team grows past a single shared line.',
    sections: [
      {
        heading: 'Route by time of day',
        paragraphs: [
          'Send after-hours calls straight to the AI receptionist instead of a generic voicemail box — most callers won\'t leave a message, but they will talk to an AI that books the callback.',
        ],
      },
      {
        heading: 'Route by skill, not by name',
        paragraphs: [
          'Tag agents by what they handle — billing, support, sales — instead of routing to specific people. It scales better as your team changes.',
        ],
      },
    ],
  },
  {
    slug: 'series-a-announcement',
    tag: 'Company',
    title: 'Greevo raises Series A to expand AI contact center',
    date: 'Jun 09, 2026',
    readTime: '2 min read',
    excerpt: 'What the new funding means for the product roadmap over the next year.',
    sections: [
      {
        heading: 'The announcement',
        paragraphs: [
          'Greevo has raised its Series A to accelerate development of the AI contact center platform, with a focus on expanding language coverage and deepening CRM integrations.',
        ],
      },
    ],
  },
  {
    slug: 'sms-compliance-basics',
    tag: 'Compliance',
    title: 'SMS compliance basics for US and EU businesses',
    date: 'May 28, 2026',
    readTime: '4 min read',
    excerpt: 'What you need to know before sending your first business SMS campaign.',
    sections: [
      {
        heading: 'Consent comes first',
        paragraphs: [
          'Both TCPA (US) and GDPR (EU) require clear opt-in before you send marketing SMS — transactional messages have more leeway, but the line between the two isn\'t always obvious.',
        ],
      },
      {
        heading: 'Keep an opt-out path',
        paragraphs: [
          'Every message needs a working "STOP" or unsubscribe path, and Greevo handles this automatically across all business SMS sent through the platform.',
        ],
      },
    ],
  },
  {
    slug: 'live-translation-video',
    tag: 'Product',
    title: 'Live translation is now available on every video call',
    date: 'May 15, 2026',
    readTime: '2 min read',
    excerpt: 'Real-time captions and translation, no add-on required.',
    sections: [
      {
        heading: 'What\'s new',
        paragraphs: [
          'Every Greevo video meeting now includes live translated captions, so participants can follow along in their own language without a separate interpretation service.',
        ],
      },
    ],
  },
  {
    slug: 'pick-the-right-plan',
    tag: 'Pricing',
    title: 'How to pick the right plan as your team scales',
    date: 'May 02, 2026',
    readTime: '3 min read',
    excerpt: 'A quick framework for matching your plan to your team\'s actual call volume.',
    sections: [
      {
        heading: 'Start with your busiest week',
        paragraphs: [
          'Size your plan around peak volume, not average volume — a plan that fits most weeks but falls short during your busiest one will cost more in overage than a tier up would.',
        ],
      },
    ],
  },
  {
    slug: 'first-ivr-setup',
    tag: 'Guides',
    title: 'A 10-minute guide to setting up your first IVR',
    date: 'Apr 18, 2026',
    readTime: '3 min read',
    excerpt: 'From blank canvas to a working menu in under ten minutes.',
    sections: [
      {
        heading: 'Keep the menu short',
        paragraphs: [
          'Three options or fewer at each level — every extra choice increases the odds a caller hangs up or mashes zero to reach a human.',
        ],
      },
    ],
  },
]
