const fs = require(fs);
const path = require(path);
const manifestPath = process.argv[2];
const manifest = JSON.parse(fs.readFileSync(manifestPath, utf8));
for (const [filePath, content] of Object.entries(manifest)) {
  const fullPath = path.resolve(filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, utf8);
  console.log(Wrote:, filePath);
}
