#!/bin/bash

ZIP_FILENAME=gcp-function-hanzi-pinyin-captions

rm -rfv dist/
rm -rfv _isolated_/
rm $ZIP_FILENAME.zip 2> /dev/null

npm run build

pnpx pnpm-isolate-workspace @xielyng/hanzi-pinyin-captions-function \
  --src-less-disable \
  --src-less-prod-disable

cp -rfv dist/* _isolated_

cd _isolated_
sed -i 's_"@xielyng/hanzi-pinyin-captions": "workspace:^1.0.0"_"@xielyng/hanzi-pinyin-captions": "file:./workspaces/packages/hanzi-pinyin-captions"_' package.json

cd workspaces/packages/hanzi-pinyin-captions
ls

sed -i 's_"@xielyng/youtube-api": "workspace:^1.0.0"_"@xielyng/youtube-api": "file:../youtube-api"_' package.json

cd ../../..

rm pnpm-lock.yaml
rm pnpm-workspace.yaml

zip -r ../$ZIP_FILENAME *
