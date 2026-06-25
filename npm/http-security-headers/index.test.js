'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { recommendedHeaders, mergeHeaders } = require('./index.js');

test('mergeHeaders fills missing recommended keys', () => {
  const merged = mergeHeaders({ 'x-custom': '1' });
  assert.equal(merged['x-custom'], '1');
  assert.equal(merged['x-frame-options'], recommendedHeaders['x-frame-options']);
});

test('mergeHeaders does not overwrite existing values', () => {
  const merged = mergeHeaders({ 'x-frame-options': 'SAMEORIGIN' });
  assert.equal(merged['x-frame-options'], 'SAMEORIGIN');
});

test('mergeHeaders normalizes header names to lowercase', () => {
  const merged = mergeHeaders({ 'X-Test': 'ok' });
  assert.equal(merged['x-test'], 'ok');
});

test('mergeHeaders joins array values', () => {
  const merged = mergeHeaders({ 'set-cookie': ['a=1', 'b=2'] });
  assert.equal(merged['set-cookie'], 'a=1, b=2');
});
