// Task 2 — Convert Callback to Promise (15 min)
// Given a callback-style function, wrap it in a Promise ("promisify" it):

function getUserPromise(id) {
  return new Promise((resolve, reject) => {
    getUserCallback(id, (error, user) => {
      if (error) {
        reject(error);
      } else {
        resolve(user);
      }
    });
  });
}