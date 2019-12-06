



$("ul").on("click","span",function (){  
    $(this).parent().fadeOut(500,function () {
        $(this).remove();
    });
})


$("ul").on("click","li",function (){
    $(this).toggleClass("lineThrough");    
})


$("#plusBtn").on("click",function(){
   if($("#searchBox").css("display")==='block'){
    $("#searchBox").fadeOut(500,function(){
        $("#searchBox").css("display","none");
    })
   }
   else{

        $("#searchBox").fadeIn(500,function(){
            $("#searchBox").css("display","block");
        })
   
    }
    
})


$("#searchBox").on("keypress",function(k){ 
    if(k.which == 13){
        var newTodo = $("#searchBox").val();
        var newTodo = "<li><span><i class='far fa-trash-alt'></i></span>"+newTodo+"</li>"
        if($("#searchBox").val() != ""){
            $(newTodo).hide().fadeIn(500).appendTo("#toDos")
        


            $(this).val("");
        }
    }
})


$("#removeAllBtn").on("click",function(){
   $('#toDos').fadeOut(500,function(){
    $('#toDos').html()
    
   })


   


})