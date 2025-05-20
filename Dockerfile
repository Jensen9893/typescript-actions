# FROM node:22-alpine AS builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# FROM node:22-alpine
# WORKDIR /app
# COPY --from=builder /app/dist ./dist
# COPY package*.json ./
# RUN npm install --production
# CMD ["node", "dist/src/index.js"]
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY dist/app ./dist/app
CMD ["node", "dist/app/index.js"]