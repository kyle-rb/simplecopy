# simplecopy
This is a library I made to just perform the bare minimum functionality for copying to the clipboard using JavaScript. Actually, it's less of a library and more of just one function. I minified it by hand to make it as small as possible and also because I was bored. It's about 350 bytes minified and gzipped.

## Demo:
Coming soon. For now just download the demo.html file.

## How to Use:
1. Download and import it with `<script src="simplecopy.min.js"></script>`.
   - Or, just copy it into a script tag or another JavaScript source file.
2. Call `simplecopy("<your text here>")` from anywhere. (Note: this has to be triggered by a user action because of browser restrictions on copying.)
3. You're done.

## Compatibility:
This works in Chrome and Firefox on Mac, Windows, and Android, as well as Edge on Windows (and probably some versions of IE). It works in newer versions of Safari, I think version 10 or 11 and up. I'm not 100% sure about anything on iOS. The `simplecopy` function returns `false` if it fails to execute properly.

## License:
This code is licensed under Creative Commons Zero, which means it's in the public domain, which means you can use it without any kind of attribution or anything. Just copy and paste the code.
[https://creativecommons.org/publicdomain/zero/1.0/](https://creativecommons.org/publicdomain/zero/1.0/)
