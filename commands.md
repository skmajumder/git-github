## Some basic git commands (file comparison)

1. diff <file1> <file2>
2. cat <file>
3. diff -u <file1> <file2>
4. dos2unix <fileName>
   dos2unix <fileName.diff>

5. unix2dos <fileName>
   unix2dos <fileName.diff>

6. diff -u <file1> <file2> > <fileName.diff>
7. patch <file1> < <fileName.diff>
8. patch --ignore-whitespace <file1> < <fileName.diff>

## Git commands

1. ls -la
2. ls -l <fileName>/pathName
3. ls -a

## Get last commit from git

1. git status
2. git reset --hard HEAD
3. git checkout .
4. git status
5. git restore --staged <file>
6. git add <file>
7. git add . [for all files]
8. git commit -m "commit message"
9. git commit -a -m "commit message"
10. git log
11. git log -p
12. git show <commit-number>
13. git log --stat
14. git diff
15. git diff <file>
16. git add -p (
   y (yes): Include this change in the commit.
n (no): Skip this change in the commit.
s (split): Divide this change into smaller parts for more control.
e (edit): Manually edit the change.
   )
