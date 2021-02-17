const fs = require("fs");

const articles = [
  {
    title: "Tasmanian and NT Governments hand down 2020-21 Budgets",
    dateUploaded: "13/11/20",
    readDuration: 2,
    tags: "['WATER']",
    content: "",
  },
  {
    title:
      "Victorian Government alters procurement approach for North East Link",
    dateUploaded: "13/11/20",
    readDuration: 4,
    tags: "['TAX', BUDGETS]",
    content: "",
  },
  {
    title: "ARTC progresses two major Inland Rail works packages",
    dateUploaded: "13/11/20",
    readDuration: 3,
    tags: "['ECONOMY']",
    content: "",
  },
  {
    title: "Auckland City Hospital project commences",
    dateUploaded: "03/11/20",
    readDuration: 2,
    tags: JSON.stringify([]),
    content: "",
  },
  {
    title: "Procurement for Coomera Connector Stage One begins",
    dateUploaded: "17/11/20",
    readDuration: 2,
    tags: JSON.stringify([]),
    content: "",
  },
  {
    title:
      "NSW Government releases plan for supporting the transition to renewables",
    dateUploaded: "10/11/20",
    readDuration: 4,
    tags: JSON.stringify([]),
    content: "",
  },
  {
    title: "Infrastructure Victoria releases updated infrastructure strategy",
    dateUploaded: "17/11/20",
    readDuration: 3,
    tags: JSON.stringify([]),
    content: "",
  },
  {
    title: "Procurement commences for Greater Sydney Bus Region Nine",
    dateUploaded: "10/11/20",
    readDuration: 1,
    tags: JSON.stringify([]),
    content: "",
  },
  {
    title: "2020-2021 West Australian Budget",
    dateUploaded: "17/11/20",
    readDuration: 3,
    tags: JSON.stringify([]),
    content: "",
  },
];

function base64_encode(file) {
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer(bitmap).toString("base64");
}

let query = "";

for (let i = 2; i <= 10; i++) {
  query +=
    "insert into article (title, readDuration, dateUploaded, tags, content, thumbnail) ";
  query += `values ("${articles[i - 2].title}", ${articles[i - 2].readDuration}, "${
    articles[i - 2].dateUploaded
  }", "${articles[i - 2].tags}", "", `;
  query += `"${base64_encode(`images/${i}.jpg`)}");`;
  query += "\n \n"
}

fs.writeFileSync("queries.txt", query);
