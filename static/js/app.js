// PORTIONS OF THIS CODE ARE TAKEN FROM INSTRUCTOR TUTORIAL

console.log("app load success")

function InitDashboard() {
    console.log("InitDashboard()");

    // Populate dropdown
    var selector = d3.select("selDataset");

    d3.json("data/samples.json").then(function(data) {
        console.log(data);
    });

    // Update bargraph

    // Update bubblechart

    // Update demographics
}

InitDashboard();