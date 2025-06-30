#!/bin/bash

# Fix ownership so ubuntu user can write inside node-express folder
sudo chown -R ubuntu:ubuntu /home/ubuntu/node-express

cd /home/ubuntu/node-express

# Install Yarn if not available
if ! command -v yarn &> /dev/null; then
  npm install -g yarn
fi

# Install project dependencies
yarn install

