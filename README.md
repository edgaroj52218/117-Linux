# Command Line Survival Guide for GIT and Linux

### Top 10 Linux commands with Examples

| Command                         | Description                                                   | Example Usage                      |
|---------------------------------|---------------------------------------------------------------|------------------------------------|
| `ls`                            | List files and directories in the current directory.         | `ls -l` (detailed list)           |
| `cd <directory>`                | Change the current directory to `<directory>`.               | `cd Documents`                     |
| `pwd`                           | Print the current working directory.                          | `pwd`                              |
| `cp <source> <destination>`     | Copy files or directories from `<source>` to `<destination>`. | `cp file.txt backup.txt`          |
| `mv <source> <destination>`     | Move or rename files or directories from `<source>` to `<destination>`. | `mv oldname.txt newname.txt`     |
| `rm <file>`                     | Remove (delete) a file. Use `-r` for directories (e.g., `rm -r <directory>`). | `rm unwantedfile.txt`             |
| `mkdir <directory>`             | Create a new directory named `<directory>`.                  | `mkdir newfolder`                 |
| `touch <file>`                  | Create an empty file named `<file>` or update its timestamp. | `touch newfile.txt`               |
| `man <command>`                 | Display the manual page for a specific command.              | `man ls`                           |
| `chmod <permissions> <file>`    | Change the permissions of a file or directory. Use numerical or symbolic notation. | `chmod 755 script.sh`             |


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

## History of Linux
* Developed by Linus Torvalds as a free, open-source operating system and released in 1991.
* In 1992, Linux was licensed under the GNU GPL (General Public License), making it free to distribute and modify
* Gained popularity in the Mid-90s, and in the 2000s became widely used in servers, embedded systems, supercomputers, etc.
* Today it powers a large part of the internet, smartphones through Android, and enterprise infrastructure.
* Linux is a key OS that every programmer should know how to use.

## Common Linux Errors and Fixes

| Error                         | Description                                             | How to Fix                                                 |
|-------------------------------|---------------------------------------------------------|------------------------------------------------------------|
| `Permission denied`            | You don't have the necessary permissions to run a command or access a file. | Use `sudo` before the command, or adjust file permissions with `chmod`. |
| `Command not found`            | The command you typed is not recognized.                | Make sure the command is installed, or check for typos. You may need to install it using `apt` or `yum`. |
| `No space left on device`      | Your disk is full.                                      | Clear unnecessary files or increase disk space. Use `du` to find large files. |
| `File not found`               | The file you're trying to access doesn't exist or the path is incorrect. | Check the file path and spelling, or create the file if needed. |
| `Segmentation fault (core dumped)` | A program tried to access restricted memory.             | Check for bugs in the program, reinstall, or update the program. |
| `E: Unable to locate package`  | A package is missing from the repository.               | Run `sudo apt update` to refresh the package list, or ensure the package name is correct. |
| `Device or resource busy`      | The system is trying to access a file or resource that's currently in use. | Use `lsof` or `fuser` to find the process using the resource and stop it if necessary. |
| `Too many open files`          | The system has reached the maximum number of file descriptors. | Increase the limit with `ulimit -n`, or close unused files and processes. |
| `Connection refused`           | A service you're trying to access is not running or the port is blocked. | Check if the service is running with `systemctl`, and ensure firewall rules allow traffic on the port. |
| `Broken pipe`                  | A process tried to send data to another process that has terminated. | Restart the processes, or check if the receiving process is still running. |

## Common Git Errors and Fixes

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


