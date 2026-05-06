# security-lab-toolkit

Публічні **GitHub Packages** для профілю [@kiurakku](https://github.com/kiurakku): швидкий контейнер для security-лаб і маленький npm-модуль із базовими HTTP security headers.

## 1. Container (GHCR)

**Образ:** `ghcr.io/kiurakku/security-lab-toolkit:latest`

Що всередині (Alpine): `bash`, `curl`, `jq`, `git`, `openssl`, `dig` (bind-tools), Python 3 + `requests` — зручно для перевірок TLS, DNS, HTTP і скриптів під хмарні/мережеві лаби.

```bash
docker pull ghcr.io/kiurakku/security-lab-toolkit:latest
docker run --rm -it ghcr.io/kiurakku/security-lab-toolkit:latest
```

У контейнері робоча директорія: `/work`.

## 2. npm (GitHub Packages)

**Пакет:** `@kiurakku/http-security-headers`

Базова мапа заголовків для API/бекенду (HSTS, nosniff, frame options, тощо). Зручно підключити в Express/Fastify або в документацію hardening.

```bash
# .npmrc у проєкті (один раз)
echo "@kiurakku:registry=https://npm.pkg.github.com" >> .npmrc
```

```bash
npm install @kiurakku/http-security-headers
```

```javascript
const { recommendedHeaders, mergeHeaders } = require('@kiurakku/http-security-headers');
// mergeHeaders(existing) — не перезаписує вже задані ключі
```

Ліцензія: MIT. Без збору даних; лише статичні рекомендації.

## Ліцензія

MIT — див. [LICENSE](LICENSE).
