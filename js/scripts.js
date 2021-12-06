var xValues = ["2017", "2018", "2019", "2010", "2021"];
var yValues = [500, 550, 490, 430, 610];
var barColors = ["red", "green","blue","yellow","black"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Total Investment"
    }
  }
});

var xValues = [2015,2016,2017,2018,2019,2020,2021];
var yValues = [100,120,180,150,190,210,230];


new Chart("myChart1", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 10, max:270}}],
    },
	title: {
      display: true,
      text: "Bank Balance"
    }
  }
});



var xValues = ["Debit Card", "Credit Card", "NetBanking ", "Upi","Loan"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart2", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Payment Medium"
    }
  }
});