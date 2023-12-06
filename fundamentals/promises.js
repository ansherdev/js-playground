/* Promise.all vs Promise.allSettled */
const res = (value) => Promise.resolve(value);
const rej = (value) => Promise.reject(value);

const promiseAll = Promise.all([
  res("res1"),
  rej("rej2"),
  rej("rej1"),
  res("res2"),
  res("res3"),
]).then((result) => console.log(result)).catch((error) => console.log(error));

const promiseAllSettled = Promise.allSettled([
    res("res1"),
    rej("rej2"),
    rej("rej1"),
    res("res2"),
    res("res3"),
  ]).then((result) => console.log(result)).catch((error) => console.log(error));
