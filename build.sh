# 3. 设置环境变量
echo "ZHIPU_API_KEY=d95c9675b9f09e33ef54774eb7d0452b.USNTcpLdW8lnG57S" > .env

# 4. 构建并启动容器
docker-compose up -d --build

# 5. 查看日志
docker-compose logs -f