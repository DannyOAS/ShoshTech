#!/bin/bash

# Fix Git Branch Creation Issue
# This script updates the git fetch configuration to allow fetching all branches

echo "Fixing git fetch configuration..."

# Update the fetch refspec
git config remote.origin.fetch '+refs/heads/*:refs/remotes/origin/*'

# Verify the change
echo "Updated fetch configuration:"
git config remote.origin.fetch

# Fetch all branches
echo ""
echo "Fetching all branches from origin..."
git fetch origin

# Show available branches
echo ""
echo "Available remote branches:"
git branch -r

echo ""
echo "✅ Git configuration fixed! You can now create and checkout branches."
echo ""
echo "Examples:"
echo "  - Create a branch from main: git checkout -b my-branch origin/main"
echo "  - Checkout main branch: git checkout main"
echo "  - Create a new branch: git checkout -b my-new-feature"
