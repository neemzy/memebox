export default function getEmbedUrl(url) {
  let ytId = url.match(/(youtu\.be|youtube\.com\/embed)\/([a-zA-Z0-9_-]+)/);
  ytId = ytId || url.match(/youtube\.com.*(\?|&)v=([a-zA-Z0-9_-]+)/);

  return ytId
    ? 'https://www.youtube.com/embed/' + ytId.pop()
    : null;
}
