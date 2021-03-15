$('.tab').on("click", function(){
  
    if ($(this).hasClass("tab1")) {
        $(".tab1").addClass("active");
        $(".tab1").removeClass("active");
        $("#tabcontent1").css("display", "block");
        $("#tabcontent2").css("display", "none");
    }

    else if ($(this).hasClass("tab2")) {
        $(".tab2").addClass("active");
        $(".tab1").removeClass("active");
        $("#tabcontent2").css("display", "block");
        $("#tabcontent1").css("display", "none");
    }


});
