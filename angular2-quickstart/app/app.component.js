(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'angular-chart',
      template: '<div class="container"><h1>Revenue of Top Tech Companies (2014)</h1><div id ="chart-container"></div></div>',
      providers: [ng.http.HTTP_PROVIDERS]
    })
    .Class({
      constructor: [ng.http.Http, function(http){
      var chartComponent = this;
      
      http.get('config.json')
        .map(function(data){ return data.json() })
        .subscribe(function(json){ chartComponent.initChart(json) });
      }],
      initChart: function(config){
        FusionCharts.ready(function(){
          new FusionCharts(config).render();
        });
      }
    });
})(window.app || (window.app = {}));
