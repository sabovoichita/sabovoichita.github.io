# Voichita's CV

My personal CV made with HTML, CSS and JS.

## live

[sabovoichita.github.io](https://sabovoichita.github.io/)

## Instructions to create new branch "udemy"

bname=udemy

git switch --orphan $bname
touch .gitignore
echo /.vscode >> .gitignore
echo /.idea >> .gitignore
echo /node_modules >> .gitignore
touch README.md
echo "# sabovoichita.github.io" >> README.md
git add .
git commit -m "Initial commit"
git push origin $bname
git status

cd sabovoichita.github.io
git checkout udemy //to switch to udemy branch
