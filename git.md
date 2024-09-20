
### Top 10 Git Commands with Examples
| Command                         | Description                                                   | Example Usage                      |
|----------------------------------|---------------------------------------------------------------|------------------------------------|
| `git init`                      | Initialize a new Git repository in the current directory.     | `git init`                        |
| `git clone <url>`               | Clone a remote repository to your local machine.              | `git clone git@github.com:user/repo.git` |
| `git status`                    | Show the current status of your working directory and staging area. | `git status`                |
| `git add <file>`                | Add changes in `<file>` to the staging area.                  | `git add README.md`               |
| `git commit -m "<message>"`      | Commit staged changes with a descriptive message.             | `git commit -m "Initial commit"`  |
| `git branch`                    | List all branches and highlight the current one.              | `git branch`                      |
| `git checkout <branch>`         | Switch to a specific branch or commit.                        | `git checkout main`               |
| `git merge <branch>`            | Merge changes from `<branch>` into the current branch.        | `git merge part1`                 |
| `git pull`                      | Fetch and integrate changes from the remote repository.       | `git pull origin main`            |
| `git push`                      | Push your committed changes to the remote repository.         | `git push origin part2`           |

### Common Git Errors and Fixes

| Error                                  | Description                                                       | How to Fix                                                   |
|----------------------------------------|-------------------------------------------------------------------|--------------------------------------------------------------|
| `fatal: not a git repository`          | You're trying to run a Git command outside a Git repository.       | Navigate to the correct directory or initialize a repository with `git init`. |
| `error: failed to push some refs`      | A push was rejected because the local branch is behind the remote. | Fetch and merge changes from the remote using `git pull`, then try pushing again. |
| `merge conflict`                       | Changes in the same file conflict during a merge.                  | Manually resolve the conflicts in the affected files, then stage them with `git add` and continue the merge with `git commit`. |
| `fatal: Authentication failed`         | Git failed to authenticate with the remote repository.             | Check your credentials or SSH key configuration, or ensure you have the right permissions. |
| `detached HEAD`                        | You're not on a branch but on a specific commit.                   | Create or switch to a branch using `git checkout` or `git switch`, then commit your changes. |
| `error: Your local changes... would be overwritten by merge` | Local changes are preventing a pull or merge.                      | Either commit or stash your local changes with `git stash`, then try the pull/merge again. |
| `fatal: remote origin already exists`  | You're trying to add a remote that already exists.                 | Remove the existing remote with `git remote rm origin`, then add it again. |
| `warning: LF will be replaced by CRLF` | Line endings differ between systems (Linux vs Windows).            | Configure Git to use the correct line endings using `git config core.autocrlf true` or `false`. |
| `error: cannot lock ref`               | Another Git process is running or a lock file wasn't cleaned up.   | Close the other process or delete the lock file (`.git/refs/heads/branch.lock`). |
| `fatal: unable to access '...': Could not resolve host` | Git cannot reach the remote repository.                            | Check your internet connection or the remote URL with `git remote -v`, and ensure it’s correct. |
