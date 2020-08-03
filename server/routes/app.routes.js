module.exports = [{
  url: ['/', '/student'],
  type: 'model',
  getSlug: () => 'StudentPage',
  Component: 'App',
}, {
  url: ['/posturl'],
  type: 'model',
  getSlug: () => 'response',
  Component: 'App',
}];
