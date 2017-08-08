angular.module('Store')
  .config(function($routeProvider){
    $routeProvider.when('/home',{ templateUrl: '/templates/pages/home/index.html' })
      .when('/about', { templateUrl: 'templates/pages/about/index.html'  })
      .when('/contact', { templateUrl: 'templates/pages/contact/index.html'  })
      .when('/product', { templateUrl: 'templates/pages/product/index.html'  })
      .when('/shop', { templateUrl: 'templates/pages/shop/index.html'  })
      .when('/', { templateUrl: 'templates/pages/home/index.html'  });
  });
