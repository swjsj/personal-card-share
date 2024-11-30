FROM registry.cn-beijing.aliyuncs.com/sily/node:18-alpine

WORKDIR /app

# 复制构建后的文件
COPY .next/standalone ./
COPY .next/static ./.next/static
COPY public ./public

# 设置环境变量
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# 启动应用
CMD ["node", "server.js"]
