$(document).ready(function() {

  /**/
  var lineData23 = {
    labels: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    datasets: [

        {
            label: "Mes Actual",
            backgroundColor: 'rgba(26,179,148,0.5)',
            borderColor: "rgba(26,179,148,0.7)",
            pointBackgroundColor: "rgba(26,179,148,1)",
            pointBorderColor: "#fff",
            data: [28, 48, 40, 19, 86, 27, 90, 30, 70, 25, 27, 20]
        },{
            label: "Mes Anterior",
            backgroundColor: 'rgba(220, 220, 220, 0.5)',
            pointBorderColor: "#fff",
            data: [65, 59, 80, 81, 56, 55, 40, 20, 40, 90, 20, 40]
        }
    ]
};

var lineOptions23 = {
    responsive: true
};


var ctxx3 = document.getElementById("lineChartJss").getContext("2d");
new Chart(ctxx3, {type: 'line', data: lineData23, options:lineOptions23});
/** */
});
$(document).ready(function() {

  /**/
  var lineData23 = {
    labels: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    datasets: [

        {
            label: "Mes Actual",
            backgroundColor: 'rgba(26,179,148,0.5)',
            borderColor: "rgba(26,179,148,0.7)",
            pointBackgroundColor: "rgba(26,179,148,1)",
            pointBorderColor: "#fff",
            data: [28, 48, 40, 19, 86, 27, 90, 30, 70, 25, 27, 20]
        },{
            label: "Mes Anterior",
            backgroundColor: 'rgba(220, 220, 220, 0.5)',
            pointBorderColor: "#fff",
            data: [65, 59, 80, 81, 56, 55, 40, 20, 40, 90, 20, 40]
        }
    ]
};

var lineOptions23 = {
    responsive: true
};


var ctxx3 = document.getElementById("lineChartJsss").getContext("2d");
new Chart(ctxx3, {type: 'line', data: lineData23, options:lineOptions23});
/** */
});
$(document).ready(function() {
  /**/
  var lineData22 = {
    labels: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    datasets: [

        {
            label: "Mes Actual",
            backgroundColor: 'rgba(26,179,148,0.5)',
            borderColor: "rgba(26,179,148,0.7)",
            pointBackgroundColor: "rgba(26,179,148,1)",
            pointBorderColor: "#fff",
            data: [28, 48, 40, 19, 86, 27, 90, 30, 70, 25, 27, 20]
        },{
            label: "Mes Anterior",
            backgroundColor: 'rgba(220, 220, 220, 0.5)',
            pointBorderColor: "#fff",
            data: [65, 59, 80, 81, 56, 55, 40, 20, 40, 90, 20, 40]
        }
    ]
  };

  var lineOptions22 = {
    responsive: true
  };


  var ctxx2 = document.getElementById("lineChartJs").getContext("2d");
  new Chart(ctxx2, {type: 'line', data: lineData22, options:lineOptions22});
  /** */

});
$(document).ready(function() {
  // Simple line

    new Chartist.Line('#ct-chart10', {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      series: [
          [12, 9, 7, 8, 5],
          [2, 1, 3.5, 7, 3],
          [1, 3, 4, 5, 6]
      ]
  }, {
      fullWidth: true,
      chartPadding: {
          right: 40
      }
  });
});