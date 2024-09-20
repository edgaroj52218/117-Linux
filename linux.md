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


### Common Linux Errors and Fixes

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