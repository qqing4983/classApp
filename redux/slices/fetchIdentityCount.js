export const fetchIdentityCount = async (
  amount = 1
) => {
  const response = await fetch('/api/identity-count', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount }),
  })
  const result = await response.json()

  return result
}
