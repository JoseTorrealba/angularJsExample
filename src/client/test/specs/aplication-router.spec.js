describe('aplications', function() {
    describe('route', function() {
        var controller;

        beforeEach(function() {
            module('app', specHelper.fakeLogger);
            specHelper.injector(function($httpBackend, $location, $rootScope, $route) {});
            $httpBackend.expectGET('/').respond(200);
        });

        it('should map /avengers route to avengers View template', function() {
            expect($route.routes['/'].templateUrl).
            to.equal('app/example.html');
        });


    });
});