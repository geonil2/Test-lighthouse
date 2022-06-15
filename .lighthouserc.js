// @lighthouserc.js
module.exports = {
  "ci": {
    "collect": {
      "staticDistDir": "./build",
      // startServerCommand: "npm run start",
      "url": ["http://localhost:3000"],
      "numberOfRuns": 3,
    },
    "upload": {
      "target": "temporary-public-storage"
      // "target": 'filesystem',
      // "outputDir": './lhci-test',
      // "reportFilenamePattern": '%%PATHNAME%%-%%DATETIME%%-test.%%EXTENSION%%'
    },
    "assert": {
      "categories:performance": ["warn", { "minScore": 0.9 }],
      "categories:accessibility": ["error", { "minScore": 1 }]
    }
  }
}
