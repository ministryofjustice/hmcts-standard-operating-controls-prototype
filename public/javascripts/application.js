/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll();

  
  var govukDashboardButtonsHeight = [],
      maxHeight = 0;
  $('.govuk-dashboard-button').each(function(k, v){
    govukDashboardButtonsHeight.push($(v).height());
  });

  maxHeight = Math.max.apply(null,govukDashboardButtonsHeight);

  $('.govuk-dashboard-button').each(function(k, v){
    $(v).height(maxHeight);
  });
})
