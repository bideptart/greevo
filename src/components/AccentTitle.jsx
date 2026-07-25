export default function AccentTitle({ title }) {
  const words = title.trim().split(' ')
  const total = words.length

  const midCount = Math.max(1, Math.round(total * 0.3))
  const lightCount = Math.max(1, Math.round(total * 0.2))
  const blackCount = Math.max(1, total - midCount - lightCount)

  const blackWords = words.slice(0, blackCount)
  const midWords = words.slice(blackCount, blackCount + midCount)
  const lightWords = words.slice(blackCount + midCount)

  return (
    <>
      {blackWords.join(' ')}
      {midWords.length > 0 && (
        <>
          {' '}
          <span className="title-accent">{midWords.join(' ')}</span>
        </>
      )}
      {lightWords.length > 0 && (
        <>
          {' '}
          <span className="title-accent-light">{lightWords.join(' ')}</span>
        </>
      )}
    </>
  )
}
