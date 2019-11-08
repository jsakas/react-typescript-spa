#!/bin/bash

# recursively walk directory and convert javascript files to typescript files
# 
# .style.js -> .style.ts
# .js -> .tsx
#
# Usage `./convert-ts.sh src`
#

function traverse() {   
    for file in $(ls "$1")
    do
        if [[ ! -d ${1}/${file} ]]; then
            # echo "FILE >> ${1}/${file}"
            js_file=$(echo "${1}/${file}")

            if [[ $js_file == *".style.js"* ]]; then
                ts_file=$(echo "$js_file" | sed 's/.style.js/.style.ts/')
            elif [[ $js_file == *".js"* ]]; then
                ts_file=$(echo "$js_file" | sed 's/.js/.tsx/')
            fi

            echo "${js_file} -> ${ts_file}"
            git mv $js_file $ts_file
        else
            # echo "DIRECTORY >> ${1}/${file}"
            traverse "${1}/${file}"
        fi
    done
}

function main() {
    traverse "$1"
}

main "$1"
