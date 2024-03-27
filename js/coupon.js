
$(function(){
  $(".container").show(function(){
    $(".list").show();
    $(".used-list").hide();
    $(".nothing").hide();
    
    });});

$(function(){
  $(".tab-available").click(function(){
    $(".list").show();
    $(".used-list").hide();
    $(".nothing").hide();
    });});

$(function(){
  $(".tab-used").click(function(){
    $(".list").hide();
    $(".used-list").show();
    $(".nothing").hide();
    });});

$(function(){
  $(".tab-expired").click(function(){
    $(".list").hide();
    $(".used-list").hide();
    $(".nothing").show();
    });});


