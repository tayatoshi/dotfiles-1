#! /usr/local/bin/zsh

EXEPATH=$0:A:h

brew tap homebrew/bundle
brew bundle ${EXEPATH}

npm install -g $(cat ${EXEPATH}/Npmfile)