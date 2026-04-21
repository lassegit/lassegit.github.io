export const getTagSlug = tag =>
  tag
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const getTagPath = tag => `/tags/${getTagSlug(tag)}/`;
