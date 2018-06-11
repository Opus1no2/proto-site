const { test } = QUnit;

QUnit.begin(() => {
  sinon.stub(window, 'fetch');
});

QUnit.done(() => {
  window.fetch.restore();
});

test('getUser', (assert) => {
  const spy = sinon.spy(this, 'errResponse');
  const successSpy = sinon.spy(this, 'success');
  const apiSpy = sinon.spy(this, 'api');

  const res = new window.Response('{"hello":"world"}', {
    status: 200,
    headers: {
      'Content-type': 'application/json'
    }
  });

  window.fetch.returns(Promise.resolve(res));
  const done = assert.async();

  getUser().then((d) => {
    assert.equal(d.hello, 'world');
    assert.ok(successSpy.calledOnce);
    assert.ok(apiSpy.calledTwice);
  });

  window.fetch.returns(Promise.reject('TypeError'));

  getUser().then((d) => {
    assert.equal(d, 'TypeError');
    assert.ok(spy.calledOnce);
    assert.ok(apiSpy.calledTwice);
  });


  done();
});
