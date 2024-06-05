#!/bin/bash

set -e

export DOCKER_DEFAULT_PLATFORM=linux/amd64
#export DOCKER_HOST=ssh://debian@
export dockerfile=".cloud/prod/docker-compose.yaml"

if [ -z "$DOCKER_HOST" ]; then
  echo "DOCKER_HOST is not set"
  exit 1
fi

docker build . -f .cloud/Dockerfile -t doelia/aquaponeyclub:main
docker compose -p aquaponeyclub -f $dockerfile up -d
docker compose -p aquaponeyclub exec app node ace init:db


