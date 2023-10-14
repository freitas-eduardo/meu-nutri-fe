export function getInitials(name: string, number: number) {
  return (name || "").split(" ")
  .filter(word => word.length >= 3)
  .slice(0, number)
  .map(word => word.charAt(0))
  .join('')
}
