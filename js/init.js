function ecFooter(){
  $.extend(this , ecFooterConfig);
}

ecFooter.prototype = new Widget();

/* Script below just for handlebars example */
$(document).ready(function(){
  $("[data-mnv='ecFooter']")
    .on('dataProviding', function(){
      //Retrive data from the data attribute
      var widget = $.data(this, 'widget');
      widget.log('Received data');
      var tmp = Handlebars.templates['ec-footer'];
      $(this).html(tmp(widget.data));
    });

    WLCMI.start();
});

