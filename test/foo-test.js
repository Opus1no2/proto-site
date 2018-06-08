const { test } = QUnit;

test('true', (assert) => {
  var callback = sinon.fake();
  assert.equal(true, true);
});
