var expect = require ('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require ('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');


  describe('CountdownForm', ()=> {
    it('should exist', () => {
      expect(CountdownForm).toExist();

    });
    it('should call onSetCountdown if valid seconds entered', ()=> {
      var spy =expect.createSpy();

    })
  });
