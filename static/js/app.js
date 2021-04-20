// PORTIONS OF THIS CODE ARE TAKEN FROM INSTRUCTOR TUTORIAL

console.log("app load success")

// Draw bargraph (Event Handler)
function DrawBargraph(sampleId) {
    console.log(`Draw Bargraph(${sampleId})`);

    d3.json("data/samples.json").then(data => {
        console.log(data);

        var samples = data.samples;
        var resultArray = samples.filter(s => s.id == sampleId);
        var result = resultArray[0];

        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;

        yticks = otu_ids.slice(0, 10).map(otuId => `OTU ${otuId}`).reverse();

        var barData = {
            x: sample_values.slice(0,10).reverse(),
            y: yticks,
            type: "bar",
            text: otu_labels.slice(0,10).reverse(),
            orientation: "h"
        }

        var barArray = [barData];

        var barLayout = {
            title: "Top 10 Bacteria Cultures Found",
            margin: {t: 30, l: 150}
        }
        Plotly.newPlot("bar", barArray, barLayout)
    });
}

// Draw Bubblechart (Event Handler)
function DrawBubblechart(sampleId) {
    console.log(`Draw Bubblechart(${sampleId})`);
}

// Show Metadata (Event Handler)
function ShowMetadata(sampleId) {
    console.log(`Show Metadata(${sampleId})`);
}

// New Sample ID (Event Handler)
function optionChanged(newSampleId) {
    console.log(`User Selected(${newSampleId})`);

    // add stubs
    DrawBargraph(newSampleId);
    DrawBubblechart(newSampleId);
    ShowMetadata(newSampleId);
}

function InitDashboard() {
    console.log("InitDashboard()");

    // Populate dropdown 
    var selector = d3.select("#selDataset");

    d3.json("data/samples.json").then(data => {
        console.log(data);

        var sampleNames = data.names;

        sampleNames.forEach(sampleId => {
            selector.append("option")
                .text(sampleId)
                .property("value", sampleId);
        });

        var id = sampleNames[0];

        // Draw Graphs and Metadata
        DrawBargraph(id);
        DrawBubblechart(id);
        ShowMetadata(id);
    });

    
}

InitDashboard();