#!/bin/bash
 #name=$1
 #age=$2

 #echo "name: "  $name
 #echo "age: " $age
if [ -z $1 ]; then
  echo "Chua nhap tham so"
else
 number=$(($1 * $1))
 echo "Binh phuong cua $1 la $number"
fi 
