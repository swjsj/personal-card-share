FROM alibaba-cloud-linux-3-registry.cn-hangzhou.cr.aliyuncs.com/alinux3/node:20.16

WORKDIR /app

# 只复制运行需要的文件
COPY package*.json ./
COPY .next ./.next
COPY public ./public
COPY node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"] 