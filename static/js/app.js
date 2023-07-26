// Read in json

const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'
d3.json(url).then(data => {
//console.log("Data Promise: ", data);

// bar chart variables

const otu_ids = data.samples.map(sample => sample.otu_ids);
const otu_labels = data.samples.map(sample => sample.otu_labels);

console.log('otuids: ', otu_ids)
console.log('otulabels: ', otu_labels)

});