
describe('isPositiveInteger', function() {
  it('is false for any non-number input', function() {
     expect(isPositiveInteger('a')).to.equal(false);
  });

  it('is true for any positive integer', function() {
    expect(isPositiveInteger(9)).to.equal(true);
  });

  it('is false for any negative integer', function() {
    expect(isPositiveInteger(-5)).to.equal(false);
  });
});
