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
}, {
  url: ['/lessons'],
  type: 'model',
  getSlug: () => 'LessonsPage',
  Component: 'App',
}, {
  url: ['/professors'],
  type: 'model',
  getSlug: () => 'ProfessorsPage',
  Component: 'App',
}, {
  url: ['/student/igig5bkn34hiy6ud'],
  type: 'model',
  getSlug: () => 'StudentPage2',
  Component: 'App',
}];
