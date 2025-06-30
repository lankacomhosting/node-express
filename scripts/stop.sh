#!/bin/bash
# Stop the app gracefully if already running
pm2 stop node-express || true

