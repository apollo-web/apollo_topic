#!/bin/bash
BOLD=$(tput bold)
RESET=$(tput sgr0)
RED=$(tput setaf 1)
GREEN=$(tput setaf 2)
YELLOW=$(tput setaf 3)
BLUE=$(tput setaf 4)
PURPLE=$(tput setaf 5)

echo "${BOLD}============================================================"
echo "${PWD##*/}"
echo "============================================================${RESET}"

#============================================================
# run dev server or deploy directly
#============================================================
dev_or_deploy() {
  while true; do
    printf "\n"
    read -p "${BOLD}${GREEN}Run dev server (R) or Deploy directly? (D) ${RESET}" rd
    case ${rd} in
      [Rr]* )
        printf "\n"
        echo "${BOLD}${PURPLE}🔥 Run dev server 🔥${RESET}"
        # image_resizer
        npm_run_serve
        npm_run_build
        firebase_deploy
        git_commit
        git_push
        break;;

      [Dd]* )
        printf "\n"
        echo "${BOLD}${PURPLE}🔥 npm run build 🔥${RESET}"
        npm run build;
        printf "\n"
        echo "${BOLD}${PURPLE}🔥 firebase deploy 🔥${RESET}"
        firebase deploy;
        break;;
      * ) echo "${YELLOW}Please answer R(un) or D(eploy).${RESET}";;
    esac
  done
}

#============================================================
# run gulpfile.js image resizer
#============================================================
image_resizer() {
  while true; do
    printf "\n"
    read -p "${BOLD}${GREEN}Run gulpfile.js(image resizer)? (Y/n) ${RESET}" yn
    case ${yn} in
      [Yy]* )
        trap 'echo Stop gulp-watch' SIGINT
        sudo gulp watch;
        trap SIGINT
        break;;

      [Nn]* ) return 0;;
      * ) echo "${YELLOW}Please answer yes or no.${RESET}";;
    esac
  done
}

#============================================================
# serve with hot reload at localhost:8080
#============================================================
npm_run_serve() {
  while true; do
    printf "\n"
    read -p "${BOLD}${GREEN}npm run serve? (Y/n) ${RESET}" yn
    case ${yn} in
      [Yy]* ) npm run serve; break;;
      [Nn]* ) return 0;;
      * ) echo "${YELLOW}Please answer yes or no.${RESET}";;
    esac
  done
}

#============================================================
# build for production with minification
#============================================================
npm_run_build() {
  while true; do
    printf "\n"
    read -p "${BOLD}${GREEN}npm run build? (Y/n) ${RESET}" yn
    case ${yn} in
      [Yy]* ) npm run build; break;;
      [Nn]* ) return 0;;
      * ) echo "${YELLOW}Please answer yes or no.${RESET}";;
    esac
  done
}

#============================================================
# deploy with firebase cli
#============================================================
firebase_deploy() {
  while true; do
    printf "\n"
    read -p "${BOLD}${GREEN}firebase deploy? (Y/n) ${RESET}" yn
    case ${yn} in
      [Yy]* ) firebase deploy; break;;
      [Nn]* ) return 0;;
      * ) echo "${YELLOW}Please answer yes or no.${RESET}";;
    esac
  done
}

#============================================================
# git commit
#============================================================
git_commit() {
  while true; do
    printf "\n"
    read -p "${BOLD}${GREEN}git commit? (Y/n) ${RESET}" yn
    case ${yn} in
      [Yy]* )
        IFS= read -r -p "${BOLD}Enter commit message: ${RESET}" commitmsg

        # if commitmsg empty
        if [ -z "$commitmsg" ]
        then
          echo "${BOLD}${RED}👻 Commit message is empty 👻${RESET}"
          commitmsg="Add files via upload"
        fi

        printf "\n"
        git add .
        git commit -m "$commitmsg"
        break;;

      [Nn]* ) return 0;;
      * ) echo "${YELLOW}Please answer yes or no.${RESET}";;
    esac
  done
}

#============================================================
# git push
#============================================================
git_push() {
  while true; do
    printf "\n"
    read -p "${BOLD}${GREEN}git push? (Y/n) ${RESET}" yn
    case ${yn} in
      [Yy]* )
        printf "\n"
        echo "${BOLD}${PURPLE}🔥 Push: origin 🔥${RESET}"
        git push ;
        # printf "\n"
        # echo "${BOLD}${PURPLE}🔥 Push: github 🔥${RESET}"
        # git push github;
        break;;
      [Nn]* ) return 0;;
      * ) echo "${YELLOW}Please answer yes or no.${RESET}";;
    esac
  done
}

#============================================================
# main
#============================================================
main() {
  dev_or_deploy
}

main
