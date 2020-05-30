#!/bin/sh

# sh sync-dir.sh <./dirname> <host>

CWD=$(pwd)
tar -zcf $1.tar.gz $1
mv $1.tar.gz "../$1".tar.gz
rsync -avH "../$1".tar.gz -e ssh dp:/home/apo/sync_tmp/$1.tar.gz
ssh $2 'cd sync_tmp && tar -xf '"$1"'.tar.gz && rm -r '"$1"'.tar.gz && rsync -a --delete '"$1"' ../app && rm -r '"$1"
rm -f "../$1".tar.gz
