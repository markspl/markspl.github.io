#!/usr/bin/env sh

# Abort on errors
set -e

# Build Vue app
npm run build

# Git and push on gh-pages branch
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:markspl/markspl.github.io.git master:gh-pages
cd -