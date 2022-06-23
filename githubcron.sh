#!/bin/bash
IP=$(curl -s -o /dev/null -w "%{http_code}"  https://github.com/)
WORD=$(cat /home/tera/Desktop/PlayGround/system-crons/words | sort -R | head -1)
#echo "$WORD"
#echo "$IP"

if [ "$IP" == 200 ]
then
   echo "start git operation" &&
   echo -e "$WORD" >> update.txt &&
   git add . && git commit -m "$WORD" && git push origin master && echo "push successfull 🤩" 

else
   echo "no internet service"

fi
