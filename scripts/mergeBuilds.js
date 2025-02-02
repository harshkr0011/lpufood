const ncp = require('ncp').ncp;
const path = require('path');
const fs = require('fs');

// Paths for the build directories
const frontendBuildDir = path.join(__dirname, '../frontend/dist'); // Adjust if necessary
const adminBuildDir = path.join(__dirname, '../admin/dist'); // Adjust if necessary
const backendBuildDir = path.join(__dirname, '../backend'); // Adjust for backend build, if applicable

// Output directory for combined build
const outputDir = path.join(__dirname, '../dist');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to copy builds
const copyBuild = (srcDir, destDir) => {
  console.log(`Copying from ${srcDir} to ${destDir}...`);
  ncp(srcDir, destDir, (err) => {
    if (err) {
      console.error(`Error copying from ${srcDir}:`, err);
    } else {
      console.log(`Build copied from ${srcDir} to ${destDir}.`);
    }
  });
};

// Copy the frontend build
copyBuild(frontendBuildDir, path.join(outputDir, 'frontend'));

// Copy the admin build
copyBuild(adminBuildDir, path.join(outputDir, 'admin'));

// Copy the backend build (if applicable)
copyBuild(backendBuildDir, path.join(outputDir, 'backend'));
