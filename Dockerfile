# Dockerfile for Next.js application

# Stage 1: Dependencies
FROM node:22.17.0-alpine AS deps

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy dependency definition files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Stage 2: Builder
FROM node:22.17.0-alpine AS builder

WORKDIR /app

# Copy source code
COPY . .

# Copy dependencies from the previous stage
COPY --from=deps /app/node_modules ./node_modules

# Build the application
RUN pnpm run build

# Stage 3: Runner
FROM node:22.17.0-alpine AS runner

WORKDIR /app

# Build arguments
ARG NEXT_PUBLIC_CDN_URL
ARG NEXT_PUBLIC_HEADLESS_URL

# Set environment variables
ENV NEXT_PUBLIC_CDN_URL=$NEXT_PUBLIC_CDN_URL
ENV NEXT_PUBLIC_HEADLESS_URL=$NEXT_PUBLIC_HEADLESS_URL

# Copy built assets from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./

# Install production dependencies
RUN npm install -g pnpm && pnpm install --prod

# Expose the port
EXPOSE 3000

# Start the server
CMD ["pnpm", "start"]
