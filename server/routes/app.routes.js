module.exports = [{
  url: ['/', '/student'],
  type: 'model',
  getSlug: () => 'StudentPage',
  Component: 'App',
}, {
  url: ['/lessons/*'],
  type: 'model',
  getSlug: () => 'LessonPage',
  Component: 'App',
}];
