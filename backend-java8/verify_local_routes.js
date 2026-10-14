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

const postCases = [
  ['base/app/v1/advert/selectAppAdvert', { typeList: [9, 13, 14, 12, 16, 17] }],
  ['product/app/equityCard/selectPage', { current: 1, size: 11 }],
  ['base/app/v1/sysParam/getSysParamForApp', { keyList: ['GRAY_THEME_FLAG', 'WX_VERSION', 'HOME_PANDA_IS_SHOW', 'XIAOQI_VERSION'] }],
  ['base/app/v1/sysParam/getSysParamForApp', { keyList: ['XIAOQI_MENU'] }],
];
for (const [endpoint, body] of postCases) {
  const expected = localBase + '/' + endpoint;
  if (routes.resolve('POST', endpoint, body, base) !== expected) {
    throw new Error('POST route mismatch: ' + endpoint);
  }
}
let rankingPosts = 0;
for (const row of index) {
  if (row.method !== 'POST' || !row.path.startsWith('/base/app/v1/contentRanking/selectRanking')) continue;
  const endpoint = row.path.replace(/^\//, '') + '?' + row.query;
  const expected = localBase + row.path + '?' + row.query;
  if (routes.resolve('POST', endpoint, '', base) !== expected ||
      routes.resolve('POST', endpoint, { unexpected: true }, base) !== null) {
    throw new Error('Ranking POST route mismatch: ' + endpoint);
  }
  rankingPosts++;
}
if (routes.resolve('POST', postCases[0][0], { typeList: [9] }, base) !== null ||
    routes.resolve('POST', postCases[1][0], { current: 2, size: 11 }, base) !== null ||
    routes.resolve('POST', 'base/app/v1/sysParam/getSysParamForApp', { keyList: ['UNKNOWN'] }, base) !== null ||
    routes.resolve('POST', 'base/app/v1/scenicSpot/getScenicSpotListBySysTag', { current: 1 }, base) !== null ||
    routes.resolve('POST', 'base/app/v1/contentRanking/selectRankingPage?current=999&size=10&rankingClass=', '', base) !== null) {
  throw new Error('Unknown POST body must not use a fixture');
}
console.log('Verified ' + checked + ' GET routes, ' + postCases.length + ' exact POST bodies, and ' + rankingPosts + ' ranking POST routes');
