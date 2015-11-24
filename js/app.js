'use strict';

// var width = 960,
//     height = 550;

// var svg = d3.select("body").append("svg")
//     .attr("width", width)
//     .attr("height", height);

// var projection = d3.geo.albersUsa().translate([width/2, height/2]);
// var path = d3.geo.path().projection(projection);

// var color = d3.scale.quantize()
//                     .range(["rgb(255,160,160)", "rgb(255,120,120)",
//                      "rgb(255,80,80)", "rgb(255,40,40)","rgb(255,0,0)"]);

// d3.csv("data/spiritTaxByState2.csv", function(data) {
// 	color.domain([
// 	    d3.min(data, function(d) { return d.value; }),
// 	    d3.max(data, function(d) { return d.value; })
// 	]);

// 	d3.json("data/us-states.json", function(json) {
// 	    //Loop through once for each data value
// 	    for (var i = 0; i < data.length; i++) {

// 	        //Grab state name
// 	        var dataState = data[i].state;

// 	        //Grab data value, and convert from string to float
// 	        var dataValue = parseFloat(data[i].value);

// 	        //Find the corresponding state inside the us-states.json file
// 	        for (var j = 0; j < json.features.length; j++) {

// 		        var jsonState = json.features[j].properties.name;

// 		        if (dataState == jsonState) {

// 		            //Copy the data value into the JSON
// 		            json.features[j].properties.value = dataValue;

// 		            //Stop looking through the JSON
// 		            break;
// 				}
// 			}
// 		}
// 		svg.selectAll("path")
// 	       .data(json.features)
// 	       .enter()
// 	       .append("path")
// 	       .attr("d", path)
// 	       .style("fill", function(d) {
// 	            //Get data value
// 	            var value = d.properties.value;

// 	            if (value) {
// 	                    //If value exists…
// 	                    return color(value);
// 	            } else {
// 	                    //If value is undefined…
// 	                    return "#ccc";
// 	            }
// 	       });
// 	   });
// });