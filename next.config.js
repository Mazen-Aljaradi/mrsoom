const path = require('path')

module.exports = {
  distDir: "build",
  output: 'export',
  
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}