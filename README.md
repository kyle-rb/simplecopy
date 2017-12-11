# simplecopy

This is a library (function) I made to just perform the bare minimum functionality for copying to the clipboard using JavaScript. It's just one function that you call, plus one helper function. I minified it by hand to make it as small as possible and also because I was bored. It's a little over 300 bytes minified and gzipped.

## How to Use:
1. Download and import it with `<script src="simplecopy.min.js"></script>`.
2. Call `simpleCopy("<your text here>")` from anywhere. (Note: this has to be triggered by a user action because of browser restrictions on copying.)
3. You're done.

## Compatibility
This works in Chrome and Firefox on Mac, Windows, and Android, as well as Edge on Windows (and probably some versions of IE). It doesn't work in Safari, but supposedly it does in version 10 on Sierra. I'm not 100% sure about anything on iOS.
