# Initialisation du Projet et Configuration de Docusaurus

## Création du Dépôt GitHub

1. git clone https://github.com/manelleha/docusaurus-ci-exam.git


## Initialisation de Docusaurus

1. cd docusaurus-ci-exam
1. npx create-docusaurus@latest site_docu classic



## Je mets  sur github
git add .                                      
git commit -m "creation du site"      
git push origin main                           

cd ..
mkdir -p .github/workflows

## Création du fichier de configuration pour le déploiement :
### ajout du fichier au contrôle de gestion : 
touch .github/workflows/deploy.yml
nano .github/workflows/deploy.yml
ls .github/workflows          


cat .github/workflows/deploy.yml    

git add .github/workflows/deploy.yml
git commit -m "Config action .yml"

git push origin main              