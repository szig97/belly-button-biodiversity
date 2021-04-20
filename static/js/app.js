// PORTIONS OF THIS CODE ARE TAKEN FROM INSTRUCTOR TUTORIAL

console.log("app load success")

// Draw bargraph (Event Handler)
function DrawBargraph(sampleId) {
    console.log(`Draw Bargraph(${sampleId})`);
}

// Draw Bubblechart (Event Handler)
function DrawBubblechart(sampleId) {
    console.log(`Draw Bubblechart(${sampleId})`);
}

// Show Metadata (Event Handler)
function ShowMetadata(newSampleId) {
    console.log(`Show Metadata(${newSampleId})`);
}

// New Sample ID (Event Handler)
function optionChanged(newSampleId) {
    console.log(`User Selected(${newSampleId})`);

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

        //adding stub
        DrawBargraph(id);
        DrawBubblechart(id);
        ShowMetadata(id);
    });

    // Update bargraph

    // Update bubblechart

    // Update demographics
}

InitDashboard();