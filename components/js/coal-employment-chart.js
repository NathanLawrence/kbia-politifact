var data = {
    labels: ["1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(0, 38, 86, 0.2)",
            strokeColor: "rgba(0, 38, 86, 0.5)",
            pointColor: "rgba(0, 38, 86, 0.5)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(0, 38, 86, 0.5)",
            data: [170.5, 169.7, 153, 147,136.4, 136.5, 131.3, 120.5, 112.4, 105.3, 100.6, 91.6, 90, 87.5, 83.3, 73.7, 71.3, 77.5, 71.4, 68.8, 72.2, 76.1, 77.5, 77.2, 86.4, 77.8, 83.9, 89.8, 78.5, 76.2, 69.2, 59.6]
        }
    ]
};

var ctx = document.getElementById("chart").getContext("2d");

Chart.defaults.global.responsive = true;

new Chart(ctx).Line(data, {
    tooltipTemplate: "<%if (label){%><%=label %> - <%}%><%= value + ' thousand jobs' %>",
    bezierCurve: true,
    pointHitDetectionRadius : 3
});

pymChild = new pym.Child({});
pymChild.sendHeight();