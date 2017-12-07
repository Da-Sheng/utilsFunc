# utilsFunc
some public function 
      $(document).ready(function(e) { 
        if (window.history && window.history.pushState) {
          $(window).on('popstate', function () {
            window.history.pushState('forward', null, '');
            window.history.forward(1);
          });
        }

          window.history.pushState('forward', null, ''); //在IE中必须得有这两行
          window.history.forward(1);
      });
#电池
navigator.getBattery().then(function(battery) {

  console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));
  console.log("Battery level: " + battery.level * 100 + "%");
  console.log("Battery charging time: " + battery.chargingTime + " seconds");
  console.log("Battery discharging time: " + battery.dischargingTime + " seconds");

  battery.addEventListener('chargingchange', function() {
    console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));
  });

  battery.addEventListener('levelchange', function() {
    console.log("Battery level: " + battery.level * 100 + "%");
  });

  battery.addEventListener('chargingtimechange', function() {
    console.log("Battery charging time: " + battery.chargingTime + " seconds");
  });

  battery.addEventListener('dischargingtimechange', function() {
    console.log("Battery discharging time: " + battery.dischargingTime + " seconds");
  });

});
