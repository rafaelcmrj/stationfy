module.exports = function ($scope, $http, $location, Posts) {

    // fixed token only for tests purpose
    $http.defaults.headers.common['Authorization'] = 'Bearer 8ab3740c8240012a42994e324cf3c1f60fbbdca6e3763a8d51734d1f0d3beaab';

    var owner = this;

    $scope.orderBy = 'popular';
    $scope.posts = [];
    $scope.post = null;

    $scope.$on('$locationChangeStart', function (event, next, current) {
        var path = $location.path();
        console.log(path);

        if (path == '/popular' || path == '') {
            owner.getPopular();
        } else if (path == '/newest') {
            owner.getNewest();
        }
    });

    this.getPopular = function () {
        $scope.orderBy = 'popular';
        this.getPosts();
    };

    this.getNewest = function () {
        $scope.orderBy = 'newest';
        this.getPosts();
    };

    this.getPosts = function () {

        $scope.posts = [];

        var method = $scope.orderBy == 'popular' ? Posts.query : Posts.newest;

        var posts = method(function () {
            $scope.posts = posts.posts;
        });
    };

    $scope.showPost = function (id, name, tagline) {
        
        $scope.post = {};
        
        var posts = Posts.get({id: id}, function() {
            var comments = Posts.comments({id: id}, function() {
                $scope.post = posts.post;
                $scope.post.all_comments = comments.comments;
            })
        });
    };
    
    $scope.erasePost = function() {
        $scope.post = null;
    };

};
