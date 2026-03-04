import { Ids } from 'ids';

import {
  expect
} from 'chai';


describe('IDs', function() {

  describe('creation', function() {

    it('should new construct', function() {
      expect(new Ids() instanceof Ids).to.be.true;
    });

  });


  describe('#next', function() {

    it('should create custom length ids', function() {

      // given
      var ids = new Ids();

      // when
      var i1 = ids.next();

      // then
      expect(i1).to.exist;
    });


    it('should create id', function() {

      // given
      var ids = new Ids([ 32, 36, 1 ]);

      // when
      var i1 = ids.next();

      // then
      expect(i1.length).to.be.equal(7);
    });


    it('should create id with prefix', function() {

      // given
      var ids = new Ids([ 32, 36, 1 ]);

      // when
      var i1 = ids.nextPrefixed('ID_');

      // then
      expect(ids.assigned(i1)).to.be.true;
      expect(i1).to.match(/^ID_.{7}$/);
      expect(i1.length).to.be.equal(10);
    });


    it('should bind id to element', function() {

      // given
      var ids = new Ids();

      var element = {};

      // when
      var i1 = ids.next(element);

      // then
      expect(i1).to.exist;
      expect(ids.assigned(i1)).to.equal(element);
    });

  });


  describe('#claim', function() {

    it('should claim', function() {

      // given
      var ids = new Ids();

      // when
      ids.claim('foo');

      // then
      expect(ids.assigned('foo')).to.be.true;
    });


    it('should claim by element', function() {

      // given
      var ids = new Ids();

      var element = 'EL_1';

      // when
      ids.claim('foo', element);

      // then
      expect(ids.assigned('foo')).to.equal(element);
    });

  });


  describe('#assigned', function() {

    it('should answer whether id got already used', function() {

      // given
      var ids = new Ids();

      // assume
      expect(ids.assigned('foo')).to.be.false;

      // when
      ids.claim('foo');

      // then
      expect(ids.assigned('foo')).to.be.true;
    });

  });


  describe('#clear', function() {

    it('should remove all assigned ids', function() {

      // given
      var ids = new Ids();

      var i1 = ids.next();
      var i2 = ids.next();

      ids.claim('foo');

      // when
      ids.clear();

      // then
      expect(ids.assigned(i1)).to.be.false;
      expect(ids.assigned(i2)).to.be.false;
      expect(ids.assigned('foo')).to.be.false;
    });

  });


  describe('#unclaim', function() {

    it('should unclaim an id', function() {

      // given
      var ids = new Ids();
      ids.claim('foo');

      // if I unclaim id '1'
      ids.unclaim('foo');

      // then 1 is removed
      expect(ids.assigned('foo')).to.be.false;

    });

  });

});