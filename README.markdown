# Overview

Forked from the excelent jsgif project (https://github.com/shachaf/jsgif), which was implemented as a bookmarklet to manipulate animated gifs (http://slbkbs.org/jsgif).


# Example

Please see example.html for, you know, an example.

Please note: this example must be loaded via a webserver, not directly from disk. I.e. http://localhost/libgif-js/example.html NOT file:///libgif-js/example.html. See the same-domain origin caveat at the bottom of this document for more information.

# Technical Details

This is an attempt to pull out the gif parsing and return length,duration,width,height,ratio locally;
