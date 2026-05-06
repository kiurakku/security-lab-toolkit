'use strict';

/** @type {Record<string, string>} */
const recommendedHeaders = Object.freeze({
  'strict-transport-security': 'max-age=63072000; includeSubDomains; preload',
  'x-content-type-options': 'nosniff',
  'x-frame-options': 'DENY',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'permissions-policy': 'geolocation=(), microphone=(), camera=(), payment=()',
  'cross-origin-opener-policy': 'same-origin',
  'cross-origin-resource-policy': 'same-site',
});

/**
 * Спочатку твої заголовки, потім добиваємо прогалини з recommended (нічого не перезаписуємо).
 * @param {Record<string, string | string[] | undefined>} [existing]
 * @returns {Record<string, string>}
 */
function mergeHeaders(existing) {
  /** @type {Record<string, string>} */
  const out = {};
  if (existing && typeof existing === 'object') {
    for (const [k, v] of Object.entries(existing)) {
      if (v === undefined) continue;
      out[String(k).toLowerCase()] = Array.isArray(v) ? v.join(', ') : String(v);
    }
  }
  for (const [k, v] of Object.entries(recommendedHeaders)) {
    if (!Object.prototype.hasOwnProperty.call(out, k)) out[k] = v;
  }
  return out;
}

module.exports = { recommendedHeaders, mergeHeaders };
