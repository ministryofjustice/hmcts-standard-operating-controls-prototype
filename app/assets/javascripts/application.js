/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll();


  var govukDashboardBoxsHeight = [],
      maxHeight = 0;
  $('.govuk-dashboard-box').each(function(k, v){
    govukDashboardBoxsHeight.push($(v).height());
  });

  maxHeight = Math.max.apply(null,govukDashboardBoxsHeight);

  $('.govuk-dashboard-box').each(function(k, v){
    $(v).height(maxHeight);
  });
})
