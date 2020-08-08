#!/usr/bin/env sh

set -e

npm run build

cd dist

echo renatosoares.dev > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:renatosoares/renatosoares.github.io.git master:gh-pages

cd -
