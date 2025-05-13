#!/bin/bash

for FILE in $(find . -name '*.md2')
do
	mv $FILE $(basename $FILE .md2).md
done