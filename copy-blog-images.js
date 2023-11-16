const fs = require('fs')

fs.cpSync('./blog/posts', './out/images', { recursive: true })