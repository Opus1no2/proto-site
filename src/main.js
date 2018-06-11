function getUser() {
  return api()
    .then((data) => data.json())
    .then(success)
    .catch(errResponse);
}

function api() {
  console.log('apiii');
  return fetch('http://localhost:8000/data.json');
}

function errResponse(err) {
  console.log('nooo');
  return err;
}

function success(data) {
  console.log('yiss');
  return data;
}
