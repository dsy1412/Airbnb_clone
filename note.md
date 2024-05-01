
## when the problem of npm version taking place
    1.check the version   ---    node -v    npm -v
    2.clear cache ---  np cache clean -f   
        PS C:\code>  npm cache clean --force
        npm WARN using --force Recommended protections disabled.
        PS C:\code> npm cache verify
        Cache verified and compressed (~\AppData\Local\npm-cache\_cacache)
        Content verified: 0 (0 bytes)
        Index entries: 0
        Finished in 0.008s
    3.update  -----   npm install npm -g   
    