Git How To
1. Git Init
2. Git Branching
3. Git Add, Log, Status, and Commit
3. Git Conflict and Merging Strategy

Selama ini taunya gimana? (kita udah punya reponya !)
Workflow???
- Git Clone (dari repo yang sudah disediakan)
- Buat Branch Baru
- Ngoding ....
- Git Add & Git Commit & Git Push
- Bikin PR

1. Bikin / Inisialisasi Git

- `git init`
- `git add .`
- `git commit -m "blablala"`
- xxxxx `git push ` #dia bingung
- `git remote add origin https://github.com/withered-flowers/education-belajar-git.git`
- `git push --set-upstream (-u) origin master`

1. Bikin branch baru

"master"
-> "development"

Untuk lihat current branch:
- `git status`
- `git branch`

Untuk lihat history "commitan" pada current branch:
- `git log`

Bikin branch baru lagi untuk fitur "hello world":
- `git checkout -b feat-hello-world`