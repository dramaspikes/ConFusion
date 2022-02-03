$(function(){
    $("#mycarousel").carousel({interval: 2000});
    $("#carouselButton").on("click", function(){
        console.log("Button clicked!");
        if($("#carouselButton").children("span").hasClass("fa-pause")){
            $("#mycarousel").carousel("pause");
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
        }else{
            $("#mycarousel").carousel("cycle");
            $("#carouselButton").children("span").removeClass("fa-play");
            $("#carouselButton").children("span").addClass("fa-pause");
        } 
    });

    $("#reserveTableButton").on("click", function(){
        $("#reserveTableModal").modal("toggle");
    });

    $("#loginButton").on("click", function(){
        $("#loginModal").modal("toggle");
    });
});