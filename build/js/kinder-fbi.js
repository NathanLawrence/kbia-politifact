var data = {
    labels: ["St. Louis, Mo.", "Memphis, Tenn.", "Detroit, Mich.", "Birmingham, Ala.", "Rockford, Ill.", "St. Baltimore, Md.", "Stockton, Calif.", "Springfield, Mo.", "Kansas City, Mo.", "Cleveland, Ohio"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(0, 38, 86, 0.2)",
            strokeColor: "rgba(0, 38, 86, 0.2)",
            highlightFill: "rgba(0, 38, 86, 0.5)",
            highlightStroke: "rgba(0, 38, 86, 0.5)",
            //pointColor: "rgba(0, 38, 86, 0.5)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(0, 38, 86, 0.5)",
            data: [881,842,834,828,763,677,674,643,638,615]
        }
    ]
};

var ctx = document.getElementById("chart").getContext("2d");

Chart.defaults.global.responsive = true;

new Chart(ctx).Bar(data, {
    tooltipTemplate: "<%if (label){%><%=label %> - <%}%><%= value + ' violent crimes in 100,000 people' %>",
    scaleShowLabels : true
});

pymChild = new pym.Child({});
pymChild.sendHeight();