# Troubleshooting Guide

## Issue: Unable to Create or Checkout Branches

### Problem
You may encounter issues when trying to create new branches or checkout existing remote branches like `main`. This typically manifests as:

```bash
error: pathspec 'main' did not match any file(s) known to git
```

### Root Cause
The git repository's fetch configuration is too restrictive. It's only fetching a single branch instead of all branches from the remote origin.

### Solution

#### Option 1: Run the Automated Fix Script (Easiest)
We've provided a script to automatically fix this issue:

```bash
./fix-git-config.sh
```

The script will:
- Update your git fetch configuration
- Fetch all remote branches
- Display available branches

#### Option 2: Fix Fetch Configuration Manually
Run this command in your local repository:

```bash
git config remote.origin.fetch '+refs/heads/*:refs/remotes/origin/*'
git fetch origin
```

This updates the fetch refspec to fetch all branches from origin, then fetches them.

#### Option 3: Manual .git/config Edit
Alternatively, you can manually edit `.git/config`:

1. Open `.git/config` in your text editor
2. Find the `[remote "origin"]` section
3. Change the `fetch` line from:
   ```
   fetch = +refs/heads/SPECIFIC_BRANCH:refs/remotes/origin/SPECIFIC_BRANCH
   ```
   to:
   ```
   fetch = +refs/heads/*:refs/remotes/origin/*
   ```
4. Save and run `git fetch origin`

### Verify the Fix
After applying the fix, verify you can see all remote branches:

```bash
git branch -r
```

You should now see all remote branches including `origin/main`.

### Creating New Branches
Once the fetch configuration is fixed, you can:

- Create a branch from main: `git checkout -b my-new-branch origin/main`
- Create a branch from current branch: `git checkout -b my-new-branch`
- Checkout an existing remote branch: `git checkout -b main origin/main`

## Additional Help

If you continue to experience issues, please check:
- Your network connection
- Repository access permissions
- Git version (`git --version`)
