// fullscreen menu
function menuToggle() {
    let nav = document.getElementById("menu-overlay");
    nav.classList.toggle("active");

    let nav2 = document.getElementById("toggleIcon");
    nav2.classList.toggle("active");
}

// rotate text
const text = document.getElementById("text");
let word = text.getElementsByTagName("span");

let i =0;

function rotator() {

    word[i].style.display = "none";
    i = (i + 1) % word.length;
    word[i].style.display = "initial";
}
setInterval(rotator, 1000);

$(function () {
	$window = $(window);
	var delayPosition = 200, // 다음 섹션이 브라우저 하단으로부터 200px 만큼 보여질때
		windowheight; // 현재 브라우저의 높이값

	$window.on("resize", function() { // 브라우저의 크기가 변하면 대상 엘리먼트의 위치값을 다시 할당
		insertTargetPosition();
	});

	$window.on("scroll", function() { // 스크롤이 이동할때
		var position = $window.scrollTop() + windowheight - delayPosition; // 현재의 위치 = 스크롤이 이동한 값 + 윈도우 높이 - 처음에 선언한 지연 위치값(200);

		$(".box.ready").each(function() { // 아직 활성화되지 않은 타겟 엘리먼트를 순회하여
			if(!$(this).hasClass("s_active") && $(this).data("offsetTop") < position) { // 활성화되어 있지 않고 타겟의 위차값이 현재 위치값보다 작으면
				$(this).addClass("s_active");
				$(this).removeClass("ready");  // 활성화 된 엘리먼트는 이후 타겟에서 제외
			}
		});
	});

	function insertTargetPosition() {
		windowheight = $window.height(); // 브라우저의 높이값 할당
		$(".box").each(function() { // 모든 대상 엘리먼트에
			$(this).data("offsetTop", ($(this).offset().top));
		});
	}
	(function init() {
		insertTargetPosition();
	})();
});