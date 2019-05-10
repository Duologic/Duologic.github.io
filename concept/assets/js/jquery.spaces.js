$(function() {
    var space;
    var hovering = false;
    $("body").click(function(){
        if(!hovering){
            $('h2.zoom').fadeOut("slow").switchClass('zoom','nozoom','slow').fadeIn("slow");
            $(".zoom").switchClass('zoom','nozoom','slow').find(".content").hide();
            space=null;
        }
    });
    $("div.space").click(function(){
        if(this!=space&&$(this).hasClass('nozoom')){
            $('h2.zoom').fadeOut("slow").switchClass('zoom','nozoom','slow').fadeIn("slow");
            $(".zoom").switchClass('zoom','nozoom','slow').find(".content").hide();
            $(this).switchClass('nozoom','zoom','slow').find('.content').fadeIn('fast');
            $(this).find('h2.nozoom').fadeOut("slow").switchClass('nozoom','zoom','slow').fadeIn("slow");
            space=this;
        }
    }).mouseenter(function(){
            $(this).switchClass('','hover','slow');
            hovering = true;
    }).mouseleave(function(){
            $(this).switchClass('hover','','slow');
            hovering = false;
    });
    sprintSpace($,true,150,'slow');
});

function sprintSpace($,repeat,step,speed){
    $("div.space1").switchClass('','hover',speed);
    setTimeout(function() { 
        $("div.space1").switchClass('hover','',speed);
        $("div.space2").switchClass('','hover',speed);
        setTimeout(function() { 
            $("div.space2").switchClass('hover','',speed);
            $("div.space3").switchClass('','hover',speed);
            setTimeout(function() { 
                $("div.space3").switchClass('hover','',speed);
                $("div.space4").switchClass('','hover',speed);
                    if(repeat) sprintSpace($,false,step,speed);
                setTimeout(function() { 
                    $("div.space4").switchClass('hover','',speed);
                }, step);
            }, step);
        }, step);
    }, step);
}
