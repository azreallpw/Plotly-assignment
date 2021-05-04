//D3 Library as JSON
function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0]; 
        var PANEL = d3.select("#sample-metadata");
        PANEL.html("");

        Object.entries(result).forEach(([key, value]) => {
            PANEL.append("h6").text(`${key.toUppercase()}: ${value}`);
        });
})};

function buildChart(sample) {
    d3.json("samples.json").then((data) => {
        var sample = data.samples;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0]; 
        var otu_ids = result.otu_ids; 
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;
})};

function buildChart(sampleid) {
    var xArray = result.otu_ids;
    var yArray = result.sample_values;
    var data = [{
        x: xArray,
        y: yArray,
        type: "bar"  
    }];
    var layout = {title:"Belly Button Biodiversity"};

Plotly.newPlot("myPlot", data, layout);