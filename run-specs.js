// run-specs.js
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const specsDir = './e2e/tests'; // or wherever your specs are
const specFiles = fs.readdirSync(specsDir).filter(file => file.endsWith('.cy.js'));

specFiles.forEach(spec => {
  const fullPath = path.join(specsDir, spec);
  console.log(`Running ${spec}...`);
  execSync(`npx cypress run --spec ${fullPath}`, { stdio: 'inherit' });
});
