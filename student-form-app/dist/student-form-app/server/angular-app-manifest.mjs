
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 498, hash: 'f45eb35f8e9401b41e3585a2fab2b991d6d784ee42a356b220a95016527b9bd1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: '2d7396b9f8860a81ac71b74a62b3b63be0f97ef0bcbbadf0cdce10a81db83c8d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2407, hash: '89960b48fc6130c1c05523eec9a1f00075d8a169ca9b92152a858357dc99fa1d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
