const path = require("path");
const fs = require("fs");

const searchDir = "./src";
const outputFile = "./graph-tools/output/schema.graphql";

const fromDir = (startPath, filter ) => {
  if (!fs.existsSync(startPath)){
    return;
  }

  const foundFiles = [];
  const files = fs.readdirSync(startPath);

  for(let i = 0; i < files.length; i++) {
    const filename = path.join(startPath, files[i]);
    const stat = fs.lstatSync(filename);

    if (stat.isDirectory()){
      const dirFiles = fromDir(filename, filter);
      dirFiles.forEach(f => foundFiles.push(f));
    } else if (filename.indexOf(filter) >= 0) {
      foundFiles.push(filename);
    };
  };

  return foundFiles;
};

const findSection = (schema, start, end) => {
  const startIndex = schema.indexOf(start);
  const endIndex = schema.indexOf(end);

  const section = schema
    .substring(startIndex, endIndex)
    .replace(start, "")
    .replace(end, "");

  return section;
}

const computeSubSchema = (schema) => {
  const types = findSection(schema, "## Types", "## EndTypes");
  const query = findSection(schema, "## Query", "## EndQuery");
  const mutation = findSection(schema, "## Mutation", "## EndMutation");

  return {
    types,
    query,
    mutation
  };
}

const constructGraph = () => {
  const files = fromDir(searchDir, ".graphql");

  let types = "";
  let queries = "";
  let mutations = "";

  files.forEach(f => {
    try {
      const schema = fs.readFileSync(f, "utf-8");
      const subSchema = computeSubSchema(schema);

      if (subSchema.types) {
        types += `${subSchema.types}\n\n`;
      }
      if (subSchema.query) {
        queries += `${subSchema.query}\n`;
      }
      if (subSchema.mutation) {
        mutations += `${subSchema.mutation}\n`;
      }
    } catch (err) {
      console.log(err)
    }
  });

  const rawSchema = types +
    "type Query {\n" +
      queries +
    "}\n\n" +
    "type Mutation {\n" +
      mutations +
    "}\n";

  return rawSchema;
}

const writeSchema = (schema) => {
  const dir = path.dirname(outputFile);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(outputFile, schema);
}

const schema = constructGraph();
writeSchema(schema);