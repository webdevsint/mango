cd documents
git init
echo "setting credentials"
git config --global user.email $MAIL
git config --global user.name $NAME
echo "pulling latest commits"
git pull $URI
echo "commencing push"
git add *
git commit -m "automated commit"
git push $URI