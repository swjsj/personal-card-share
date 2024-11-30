# 3. 设置环境变量
echo "ZHIPU_API_KEY=你的智谱API密钥" > .env

# 4. 构建并启动容器
docker-compose up -d --build

# 5. 查看日志
docker-compose logs -f