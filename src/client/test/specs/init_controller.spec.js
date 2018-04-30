/* global dataservice, */
describe('app', function() {
    var controller;
    var scope;

    beforeEach(function() {
        module('app', function($provide) {
            specHelper.fakeRouteProvider($provide);
            specHelper.fakeLogger($provide);
        });
        //specHelper.injector(function($controller, $q, $rootScope, $filter, InitService) {});
    });

    beforeEach(inject(function($controller, $q, $rootScope, $filter, InitService) {
        sinon.stub(InitService, 'exposedFn', function() {
            var deferred = $q.defer();
            deferred.resolve(mockData.getMockarrayE());
            return deferred.promise;
        });

        scope = $rootScope.$new();

        controller = $controller('initController', {
            $scope: scope
        });
        $rootScope.$apply();
    }));

    describe('initController controller', function() {
        it('should be created successfully', function() {
            expect(controller).to.be.defined;
        });

        describe('after activate expect ', function() {
            it('should have title of initController', function() {
                expect(controller.title).to.equal('initController');
            });

            it('should have news', function() {
                expect(controller.arrayE).to.not.be.empty;
            });

            it('should have at least 1 arrayE', function() {
                expect(controller.arrayE).to.have.length.above(2);
            });

            it('should have arrayE Count of 3', function() {
                expect(controller.arrayE).to.have.lengthOf(3);
            });
        });

        describe('after activate assert ', function() {
            it('should have title of initController', function() {
                assert.equal(controller.title, 'initController');
            });

            it('should have news', function() {
                assert.typeOf(controller.arrayE, 'Array');
            });

            it('should have arrayE Count of 3', function() {
                assert.lengthOf(controller.arrayE, 3);
            });
        });

    });

    specHelper.verifyNoOutstandingHttpRequests();
});