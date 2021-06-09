# Moving Forward:
This refers to improvements in enterInfo.cjs
1. Hold multiple users
2. Have it write to the json
    - When attempting to write it to json, I wasn't able to properly catch everything. It would only catch the first string prior to whitespace and if special characters were used it returned undefined when viewing the file.
    - Part of the code is commented out in the cjs file so refer to there and make adjustments as necessary.
3. Have it save to the json synchronously.