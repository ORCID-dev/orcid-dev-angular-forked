#!/usr/bin/env bash

# debugging params
# docker compose -f docker-compose.build.yml build --no-cache --progress=plain

export DOCKER_BUILDKIT=1

docker compose -f docker-compose.build.yarn.yml build --no-cache --progress=plain
