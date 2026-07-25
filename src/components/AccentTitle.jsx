const START_COLOR = [14, 165, 233] // #0ea5e9 light blue
const END_COLOR = [29, 78, 216] // #1d4ed8 deep blue

function lerpColor(t) {
  const [r1, g1, b1] = START_COLOR
  const [r2, g2, b2] = END_COLOR
  const r = Math.round(r1 + (r2 - r1) * t)
  const g = Math.round(g1 + (g2 - g1) * t)
  const b = Math.round(b1 + (b2 - b1) * t)
  return `rgb(${r}, ${g}, ${b})`
}

export default function AccentTitle({ title }) {
  const words = title.trim().split(' ')
  const total = words.length
  const blackCount = Math.max(1, Math.round(total * 0.4))

  const blackWords = words.slice(0, blackCount)
  const coloredWords = words.slice(blackCount)

  return (
    <>
      {blackWords.join(' ')}
      {coloredWords.map((word, i) => {
        const t = coloredWords.length > 1 ? i / (coloredWords.length - 1) : 1
        return (
          <span key={`${word}-${i}`} style={{ color: lerpColor(t) }}> {word}</span>
        )
      })}
    </>
  )
}
