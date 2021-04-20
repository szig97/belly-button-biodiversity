// PORTIONS OF THIS CODE ARE TAKEN FROM INSTRUCTOR TUTORIAL

console.log("app load success")

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
    });

    // Update bargraph

    // Update bubblechart

    // Update demographics
}

InitDashboard();