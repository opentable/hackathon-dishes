#!/bin/bash

rsync -arv --exclude=.git --exclude=node_modules --exclude=build ~/Desktop/rpp 45.55.171.118:~/

