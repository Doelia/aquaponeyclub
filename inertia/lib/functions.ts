export function formatBlogBody(body: string) {
  return body.replace(/(?:\r\n|\r|\n)/g, '<br>');
}

export function slug(text: string): string {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}
