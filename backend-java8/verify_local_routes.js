const fs = require('fs');
const path = require('path');
const routes = require('../runnable-miniapp/common/captured-api-routes.js');

const index = JSON.parse(fs.readFileSync(path.join(__dirname, 'fixtures/index.json'), 'utf8'));
const base = 'https://eshopapi.zhiyousx.com/';
const localBase = 'http://127.0.0.1:8787';
let checked = 0;

for (const row of index) {
  if (row.method !== 'GET') continue;
  const endpoint = row.path.replace(/^\//, '');
  const expected = localBase + row.path + (row.query ? '?' + row.query : '');
  const byPath = routes.resolve('GET', endpoint + (row.query ? '?' + row.query : ''), undefined, base);
  const byData = routes.resolve('GET', endpoint, Object.fromEntries(new URLSearchParams(row.query)), base);
  if (byPath !== expected || byData !== expected) {
    throw new Error('Route mismatch: ' + row.path + '?' + row.query);
  }
  checked++;
}

if (routes.resolve('POST', 'base/app/v1/advert/selectAppAdvert', {}, base) !== null) {
  throw new Error('POST must not use GET fixture routes');
}
console.log('Verified ' + checked + ' GET fixture routes with URL and data-object parameters');
