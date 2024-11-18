#!/usr/bin/env bash

# debugging params
# docker compose -f docker-compose.build.yml build --no-cache --progress=plain
docker compose -f docker-compose.build.yarn.yml up
