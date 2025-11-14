# Use official Node.js image
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN apk update && apk upgrade && npm install

# Copy the rest of the app and build
COPY . .

# Accept build arg and set as env var for build
ARG NEXT_PUBLIC_RECAPTCHA_SITE_KEY
ENV NEXT_PUBLIC_RECAPTCHA_SITE_KEY=$NEXT_PUBLIC_RECAPTCHA_SITE_KEY

RUN npm run build

# Production image
FROM node:22-alpine AS runner
WORKDIR /app

# Copy only required files
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

RUN npm install --omit=dev

EXPOSE 3000
ENV PORT=3000
CMD ["npm", "start"]
