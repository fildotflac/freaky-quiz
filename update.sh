#!/bin/bash

# EmotAI Quiz Update Script
echo "🚀 Updating EmotAI Quiz..."

# Pull latest changes
echo "📥 Pulling latest code..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Build application
echo "🔨 Building application..."
pnpm build

# Restart PM2 application
echo "🔄 Restarting application..."
pm2 restart emotai-quiz

# Show status
echo "✅ Update complete!"
pm2 status
pm2 logs emotai-quiz --lines 10