export function getReadingTime(content: string): string {
  if (!content) return '1 min read';
  const clean = content.replace(/<\/?[^>]+(>|$)/g, '').replace(/[#*`_~\[\]]/g, '');
  const words = clean.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

export function getWordCount(content: string): number {
  if (!content) return 0;
  const clean = content.replace(/<\/?[^>]+(>|$)/g, '').replace(/[#*`_~\[\]]/g, '');
  return clean.trim().split(/\s+/).filter(Boolean).length;
}
