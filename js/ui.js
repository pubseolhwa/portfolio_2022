// top button
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
	window.scrollTo({top: 0,behavior: "smooth"});
}

// work counting
function secCount() {
    let secArea = document.querySelectorAll(".sec_num");
    let secTotal = secArea.length;
    let numberPrint = "";
    for (let i = 0; i < secTotal; i++) {
        numberPrint = i + 1;
        if(i<9){
            secArea[i].innerHTML = "0" + numberPrint;
        }else{
            secArea[i].innerHTML = numberPrint;
        }
    }
}
secCount();

//cursor
var cursor = $("#cursor");
var posX = 0,
	posY = 0;
var mouseX = 0,
	mouseY = 0;

TweenMax.to({}, 0.016, {
	repeat: -1,
	onRepeat: function () {
		posX += (mouseX - posX) / 9;
		posY += (mouseY - posY) / 9;

		TweenMax.set(cursor, {
			css: {
				left: mouseX,
				top: mouseY
			}
		});
	}
});

$(document).on("mousemove", function (e) {
	mouseX = e.clientX;
	mouseY = e.clientY;
});

//cursor hover
$("a, button").on("mouseenter", function(){
	cursor.addClass("hovered");
});
$("a, button").on("mouseleave", function(){
	cursor.removeClass("hovered");
});
