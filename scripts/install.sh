#!/bin/bash
cd /home/ubuntu/node-express

# Install Yarn if not available
if ! command -v yarn &> /dev/null; then
  npm install -g yarn
fi

# Install project dependencies
yarn install

