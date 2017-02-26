import { expect } from 'chai'

import JEO from '../src';

describe('JS easy objject', () => {

  it('should return correct value', (done) => {
    const jeo = new JEO()
    const result = jeo.get({ a: { b: 'c' } }, 'a\\.b')
    expect(result).to.be.deep.equal('c')
    done()
  });

  it('should return filtered property value', (done) => {
    const jeo = new JEO()
    const result = jeo.get({ a: { b: { z: 'z'}, d: {z: 'Z' } } }, 'a\\.[b, d]\\.z')
    expect(result).to.be.deep.equal(['z', 'Z'])
    done()
  });

  it('should throw error on unknown path', (done) => {
    expect(() => new JEO().get({ a: { b: 'c' } }, 'a\\.c')).to.throw(Error)
    done()
  });

})