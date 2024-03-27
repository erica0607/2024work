
$(function(){
  $(".container").show(function(){
    $(".item-member").show();
    $(".item-creditcard").hide();
    $(".item-bill").hide();
    });});

$(function(){
  $(".tab-member").click(function(){
    $(".item-member").show();
    $(".item-creditcard").hide();
    $(".item-bill").hide();
    });});

$(function(){
  $(".tab-creditcard").click(function(){
    $(".item-member").hide();
    $(".item-creditcard").show();
    $(".item-bill").hide();
    });});

$(function(){
  $(".tab-bill").click(function(){
    $(".item-member").hide();
    $(".item-creditcard").hide();
    $(".item-bill").show();
    $(".bill-select").hide();
    $(".online").hide();
    $(".company").hide();

    });});


    // 發票點選後顯示

    $(function(){
      $("#donate").click(function(){
          $(".bill-select").slideToggle("slow");
          $(".online").hide();
          $(".company").hide();
        });});

    $(function(){
      $("#online").click(function(){
          $(".bill-select").hide();
          $(".online").slideToggle("slow");
          $(".company").hide();
        });});

    $(function(){
      $("#company").click(function(){
          $(".bill-select").hide();
          $(".online").hide();
          $(".company").slideToggle("slow");
        });});


