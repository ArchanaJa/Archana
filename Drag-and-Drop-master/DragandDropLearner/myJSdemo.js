/*This is the jQuery code for the carousel*/

//My variables

var dAnswerId;

var dQuestionsId;

var answersInArray;

var allAnswers;

var myAnswersArray = [];

//My event listenners

var startAgain = document.getElementById("checkR");

startAgain.addEventListener("click", resetAll, false);



function resetAll() {    
    
    for( var i = 0; i < myAnswersArray.length; i++) {
        
        answersInArray = myAnswersArray[i];
        //console.log(answersInArray);
        
        allAnswers = document.getElementById(answersInArray);
        allAnswers.className = "theAnswers";
        //console.log(allAnswers);
        
        allAnswers.style.display = "block";
                    
        var allAnswersIds = document.getElementById("r" + answersInArray);
        //console.log(allAnswersIds);
        allAnswersIds.appendChild(allAnswers);
        //console.log(allAnswers);

}

    
}

function dragStart(ev) {
    
    ev.dataTransfer.setData("text", ev.target.id);
    
    dAnswerId = ev.target.getAttribute('id');
    //console.log(dAnswerId);
    
    dValueId = "a" + ev.target.getAttribute('value');
    //console.log(dValueId);

}

function dragOver(ev) {
    
    ev.preventDefault();
}



function dragDrop(ev) {
   
    
    ev.preventDefault();
    
    if (!ev.target.getAttribute("ondrop")) {
        
        return false;
    }
    
    
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    dQuestionsId = ev.target.getAttribute('id');
    //console.log(dQuestionsId);
    
    if( dQuestionsId === dValueId) {
        
        //document.getElementById(dQuestionsId).className = "answersC";
        document.getElementById(dAnswerId).className = "correct";
        
    } else if( dQuestionsId !== dValueId){

        document.getElementById(dAnswerId).className = "theAnswers";
        
        
    }
    
    //To collect answers and push to the array
    
    myAnswersArray.push(dAnswerId);
    //console.log(myAnswersArray);

}


//This is the carousel jQuery code

$(document).ready( function() {
    $('#myCarousel').carousel({
    	interval: 0
	});
	
	var clickEvent = false;
	$('#myCarousel').on('click', '.nav a', function() {
			clickEvent = true;
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.nav').children().length -1;
			var current = $('.nav li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.nav li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
});




//Hide email address JS with some DOM manipulation

var myEmail = document.createElement("span");

myEmail.innerHTML = "";

document.getElementById("hideEmail").appendChild(myEmail);
document.getElementById("hideEmail").setAttribute("href","mailto:manuelc@justit.co.uk");









