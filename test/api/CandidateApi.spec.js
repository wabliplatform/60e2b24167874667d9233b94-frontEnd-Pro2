/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TempApi);
  }
}(this, function(expect, TempApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TempApi.CandidateApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CandidateApi', function() {
    describe('createcandidate', function() {
      it('should call createcandidate successfully', function(done) {
        //uncomment below and update the code to test createcandidate
        //instance.createcandidate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletecandidate', function() {
      it('should call deletecandidate successfully', function(done) {
        //uncomment below and update the code to test deletecandidate
        //instance.deletecandidate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllcandidate', function() {
      it('should call getAllcandidate successfully', function(done) {
        //uncomment below and update the code to test getAllcandidate
        //instance.getAllcandidate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getByParamscandidate', function() {
      it('should call getByParamscandidate successfully', function(done) {
        //uncomment below and update the code to test getByParamscandidate
        //instance.getByParamscandidate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getcandidate', function() {
      it('should call getcandidate successfully', function(done) {
        //uncomment below and update the code to test getcandidate
        //instance.getcandidate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatecandidate', function() {
      it('should call updatecandidate successfully', function(done) {
        //uncomment below and update the code to test updatecandidate
        //instance.updatecandidate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
