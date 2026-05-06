# syntax=docker/dockerfile:1
FROM alpine:3.20

LABEL org.opencontainers.image.title="security-lab-toolkit"
LABEL org.opencontainers.image.description="Lightweight shell image for cloud/network/crypto lab checks (curl, jq, openssl, dig, Python requests)."
LABEL org.opencontainers.image.source="https://github.com/kiurakku/security-lab-toolkit"
LABEL org.opencontainers.image.licenses="MIT"

RUN apk add --no-cache \
    bash \
    ca-certificates \
    curl \
    jq \
    git \
    openssl \
    bind-tools \
    python3 \
    py3-pip \
    py3-requests \
    tini

WORKDIR /work

ENV PYTHONUNBUFFERED=1

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["/bin/bash", "-l"]
