#!/bin/bash
IP=$(curl -s -o /dev/null -w "%{http_code}"  https://github.com/)
#echo "$IP"

if [ "$IP" == 200 ]
then
   echo "start git operation"
else
   echo "no internet service"

fi
