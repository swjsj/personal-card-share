FROM registry.cn-beijing.aliyuncs.com/sily/node:18-alpine

WORKDIR /app

# 只复制运行需要的文件
COPY package*.json ./
COPY .next ./.next
COPY public ./public
COPY node_modules ./node_modules

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]
