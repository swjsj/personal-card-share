#!/bin/bash
docker rmi personal-card-share:latest
docker build -t personal-card-share:latest .
docker tag personal-card-share:latest registry.cn-beijing.aliyuncs.com/sily/personal-card-share
docker push registry.cn-beijing.aliyuncs.com/sily/personal-card-share