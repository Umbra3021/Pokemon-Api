$('h3').each(function(){
    let firstChar = $(this).text().trim().charAt(0).toLowerCase();
    let secondChar = $(this).text().trim().charAt(1).toLowerCase();
    let thirdChar =  $(this).text().trim().charAt(2).toLowerCase();
    if(firstChar=='g' && thirdChar=='e'){
        $(this).css('background-color','green');
    }
    else if(firstChar=='s'){
        $(this).css('background-color','grey');
    }
    else if(firstChar=='p' && thirdChar=='s'){
        $(this).css('background-color','marron');
    }
    else if(firstChar=='d'){
        $(this).css('background-color','black');
    }
    else if(firstChar=='f' && thirdChar=='g'){
        $(this).css('background-color','red');
    }
    else if(firstChar=='f' && thirdChar=='r'){
        $(this).css('background-color','orange');
    }
    else if(firstChar=='p' && thirdChar=='i'){
        $(this).css('background-color','rgb(203, 195, 227)');
    }
    else if(firstChar=='g' && secondChar=='r' && thirdChar=='o'){
        $(this).css('background-color','brown');
    }
    else if(firstChar=='f' && thirdChar=='y'){
        $(this).css('background-color','lightblue');
    }
    else if(firstChar=='e'){
        $(this).css('background-color','yellow');
    }
    else if(firstChar=='g' && secondChar=='o' && thirdChar=='c'){
        $(this).css('background-color','brown');
    }
    else if(firstChar=='f' && thirdChar=='i'){
        $(this).css('background-color','pink');
    }
    else if(firstChar=='b'){
        $(this).css('background-color','darkgreen');
    }    
    else if(firstChar=='w'){
        $(this).css('background-color','blue');
    }    
    else if(firstChar=='i'){
        $(this).css('background-color','lightskyblue');
    }
    else if(firstChar=='r'){
        $(this).css('background-color','lightbrown');
    }
    else if(firstChar=='g' && secondChar=='h' && thirdChar=='o'){
        $(this).css('background-color','rgba(69, 69, 69)');
    }
    else if(firstChar=='d'){
        $(this).css('background-color','orange');
    }
    
})
