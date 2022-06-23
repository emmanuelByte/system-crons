#!/bin/bash
IP=$(curl -s -o /dev/null -w "%{http_code}"  https://github.com/)
WORD=$(cat /usr/share/dict/words | sort -R | head -1)
echo WORD
#echo "$IP"

if [ "$IP" == 200 ]
then
   echo "start git operation" &&
   echo -e 'd' >> update.txt &&
   git add . && git commit -m "gh" && git push origin master && echo "push successfull 🤩" 

else
   echo "no internet service"

fi
