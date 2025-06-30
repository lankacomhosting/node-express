#!/bin/bash
cd /home/ubuntu/node-express

# Stop and delete existing process if any (safe cleanup)
pm2 stop node-express || true
pm2 delete node-express || true

# Start the app using correct path
pm2 start src/index.js --name node-express

# Save the process list for startup
pm2 save

