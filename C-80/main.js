names_of_ppl=[];
function submit(){
   var displayARRAY=[];
    for(var j=1;j<=4;j++){
        var names=document.getElementById("in_"+j).value;
        console.log(names);
        names_of_ppl.push(names);

    }

    console.log(names_of_ppl);

    var lengthofnames=names_of_ppl.length;
    console.log(lengthofnames);
    for(var k=0;k<lengthofnames;k++){
        displayARRAY.push("Name-"+names_of_ppl[k]);
        console.log(displayARRAY);
    }

    console.log(displayARRAY);
    document.getElementById("display_name").innerHTML=displayARRAY;
    var removecommas=displayARRAY.join(" ");
    console.log(removecommas);
    document.getElementById("displaynamewithoutcommas").innerHTML=removecommas;
    document.getElementById("b_1").style.display="none";
    document.getElementById("b_2").style.display="inline-block";
    
}

function sorting(){
    names_of_ppl.sort();
    console.log(names_of_ppl);

    document.getElementById("display_name").innerHTML=names_of_ppl;
    document.getElementById("b_1").style.display="none";
    document.getElementById("b_2").style.display="none";
    document.getElementById("b_3").style.display="inline-block";
}

function clear(){
    document.getElementById("in_1").innerHTML=" ";
    document.getElementById("in_2").innerHTML=" ";
    document.getElementById("in_3").innerHTML=" ";
    document.getElementById("in_4").innerHTML=" ";
    document.getElementById("display_name").innerHTML=" ";
}