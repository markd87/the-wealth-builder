export const getGlobalData = () => {
  const name = process.env.BLOG_NAME ? decodeURI(process.env.BLOG_NAME) : '';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'The Richest Mind Blog';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'Be wise.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
