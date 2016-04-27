#!/bin/bash

#---------------------------------------------------------------------------
# archetype-functions.sh
#
# Common functions used by other script files.
#---------------------------------------------------------------------------

set -e

BASE_PROJECT_NAME='choonchernlim-archetype-webapp'

# Asserts that the file path exists
# $1 = file path
assertFileExist() {
    local path=$1

    if [ ! -f ${path} ]
    then
        echo "CheckFileExistException: Path is not a file: ${path}"
        exit 1
    fi
}

# Asserts that the variable value is not blank.
# $1 = variable name
# $2 = value
assertNotBlank() {
    local varName=$1
    local value=$2

    if [ -z "${value}" ]
    then
        echo "CheckNotBlankException: ${varName} cannot be blank."
        exit 1
    fi
}

# Displays the count of given string pattern
# $1 = file path
# $2 = search string
countStringMatched() {
    local path=$1
    local searchString=$2
    local count=`grep -c "${searchString}" ${path}`

    echo "${count} : ${searchString}"
}


# Draws a line
display_line() {
    echo "------------------------------------------------------------"
}

# Replaces a string in a file.
# $1 = file path
# $2 = replacing this string...
# $3 = ... with this string
replace_string_in_file() {
    local path=$1
    local fromString=$2
    local toString=$3

    assertNotBlank 'path' "${path}"
    assertNotBlank 'fromString' "${fromString}"
    assertNotBlank 'toString' "${toString}"

    assertFileExist "${path}"

    display_line
    echo "File    : ${path}"
    echo "   From : ${fromString}"
    echo "   To   : ${toString}"
    echo " "
    echo "BEFORE:"

    countStringMatched "${path}" "${fromString}"
    countStringMatched "${path}" "${toString}"

    # Mac requires extension to be set, so an empty string is used.
    # Using | as delimiter instead of default / to prevent escaping special characters
    # http://backreference.org/2010/02/20/using-different-delimiters-in-sed/
    sed -i '' "s|${fromString}|${toString}|g" "${path}"

    echo " "
    echo "AFTER:"

    countStringMatched "${path}" "${fromString}"
    countStringMatched "${path}" "${toString}"

    echo " "
}

# Inserts the following Velocity's escape variables on top of the file:-
# - #set( $symbol_pound = '#' )
# - #set( $symbol_dollar = '$' )
# - #set( $symbol_escape = '\' )
insert_velocity_escape_variables_in_file() {
    local path=$1

    sed -i '' "1i\\
    #set( \$symbol_pound = '\#' )\\
    #set( \$symbol_dollar = '\$' )\\
    #set( \$symbol_escape = '\\\\' )\\
    " "${path}"
}

# Finds string occurence and prints them on console
# $1 = path
# $2 = expected count
# $3 = search string
find_string_occurence() {
    local path=$1
    local expectedCount=$2
    local searchString=$3

    display_line
    echo "Files that contain '${searchString}'. ( Should have ${expectedCount} ):-"
    find "${path}" -type f -exec grep -e "${searchString}" {} \; -print
}

