import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../src/worker.mjs';

test('returns HTML landing page with PocketSpace title', async () => {
  const response = await worker.fetch(new Request('https://localhost/'), {});
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /text\/html/);
  const html = await response.text();
  assert.match(html, /PocketSpace/);
  assert.match(html, /Enter VR on Quest/);
});

test('health endpoint answers without credentials', async () => {
  const response = await worker.fetch(new Request('https://localhost/health'), {});
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), {ok:true,app:'pocketspace-quest-demo'});
});

test('invalid signaling room codes are rejected', async () => {
  const response = await worker.fetch(new Request('https://localhost/signal/invalid'), {});
  assert.equal(response.status, 400);
});

test('unknown paths return 404', async () => {
  const response = await worker.fetch(new Request('https://localhost/not-here'), {});
  assert.equal(response.status, 404);
});
