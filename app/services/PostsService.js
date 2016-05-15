module.exports = function($resource) {
  return $resource('https://api.producthunt.com/v1/posts/:id', {id: '@_id'}, {
      query: {
          isArray: false
      },
      newest: {
          url: 'https://api.producthunt.com/v1/posts/all',
          isArray: false
      },
      comments: {
          url: 'https://api.producthunt.com/v1/posts/:id/comments',
          isArray: false
      }
  });
};