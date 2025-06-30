#!/bin/bash
cd /home/ubuntu/node-express

# Start the app with PM2
pm2 start index.js --name node-express
pm2 save

