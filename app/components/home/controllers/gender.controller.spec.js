'use strict';

/**
 * Karma unit tests.
 */
describe('genderController', function(){

  var genderController, $q, genderService, $httpBackend;
  var results = {"name":"diana", "gender":"female", "samples":36, "accuracy":100, "duration":"41ms"};
  var url = 'https://gender-api.com/get?key=TJrPmdJKPmMjmwSzsf&name=Diana';

  beforeEach(module('apogy.home'));

  beforeEach(inject(function(_$rootScope_, _$controller_, _$q_, gender, _$httpBackend_) {

    genderController = _$controller_('genderController', {
      $scope: _$rootScope_.$new()
    });
      $q = _$q_;
      genderService = gender;
      $httpBackend =   _$httpBackend_;
  }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('call genderService', function(){

        beforeEach(function(){
            var deferred = $q.defer();
            spyOn(genderService, 'returnGender').and.returnValue(deferred.promise);
            genderController.getGender();

        });

        it('should ba able to call the service and return a result', function(){
            $httpBackend.expectGET(url).respond(200, results);
            genderService.returnGender('russ').then(function(data){
                expect(data).toEqual(results);
                $httpBackend.flush();
            });

        });


        it('should have a method to call the service', function(){
            expect(genderController.getGender).toBeDefined();
        });


        it('should call genderService', function(){
            expect(genderService.returnGender).toHaveBeenCalled();
        });
    });

});
