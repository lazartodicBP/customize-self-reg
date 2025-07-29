#!/bin/bash
set -e

TARGET_DIR=${1:-generated-app}
cp -R customize-self-reg-app "$TARGET_DIR"
cp .env.example "$TARGET_DIR/.env.local"

echo "App scaffolded to $TARGET_DIR"
