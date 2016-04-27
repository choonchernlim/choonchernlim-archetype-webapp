#!/bin/bash

#---------------------------------------------------------------------------
# archetype-functions.sh
#
# Common functions used by other script files.
#---------------------------------------------------------------------------

set -e

BASE_PROJECT_NAME='choonchernlim-archetype-webapp'

# Prints error message to stderr and exit the program
# $1 = error message
error() {
    local errorMessage=$1

    display_line
    echo "AN UNEXPECTED ERROR HAS OCCURRED! QUITING PROGRAM!" 1>&2
    echo "- ${errorMessage}" 1>&2
    display_line
    exit 1
}

# Asserts that the file path exists
# $1 = file path
assert_file_exist() {
    local path=$1

    if [ ! -f ${path} ]
    then
        error "CheckFileExistException: Path is not a file: ${path}"
    fi
}

# Asserts that the variable value is not blank.
# $1 = variable name
# $2 = value
assert_not_blank() {
    local varName=$1
    local value=$2

    if [ -z "${value}" ]
    then
        error "CheckNotBlankException: ${varName} cannot be blank."
    fi
}

# Asserts that the string matched count of given string pattern is the same as expected value.
# $1 = label
# $2 = file path
# $3 = search string
# $4 = 'true' if at least one match, otherwise 'false'
assert_string_matched_count() {
    local label=$1
    local path=$2
    local searchString=$3
    local atLeastOneMatch=$4
    local count=`grep -c "${searchString}" ${path}`

    if [ "${atLeastOneMatch}" = true ] && [ ${count} -eq 0 ]
    then
        error "${label} : Search string [ ${searchString} ] must have at least one match, but none was found [ ${count} ]."
    elif [ "${atLeastOneMatch}" = false ] && [ ${count} -gt 0 ]
    then
        error "${label} : Search string [ ${searchString} ] must not have any match, but at least one was found [ ${count} ]."
    fi
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

    assert_not_blank 'path' "${path}"
    assert_not_blank 'fromString' "${fromString}"
    assert_not_blank 'toString' "${toString}"

    assert_file_exist "${path}"

    display_line
    echo "File    : ${path}"
    echo "   From : ${fromString}"
    echo "   To   : ${toString}"

    assert_string_matched_count 'Before String Replace' "${path}" "${fromString}" true
    assert_string_matched_count 'Before String Replace' "${path}" "${toString}" false

    # Mac requires extension to be set, so an empty string is used.
    # Using | as delimiter instead of default / to prevent escaping special characters
    # http://backreference.org/2010/02/20/using-different-delimiters-in-sed/
    sed -i '' "s|${fromString}|${toString}|g" "${path}"

    assert_string_matched_count 'Aefore String Replace' "${path}" "${fromString}" false
    assert_string_matched_count 'After String Replace' "${path}" "${toString}" true
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

# Finds string occurrence and prints them on console
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

