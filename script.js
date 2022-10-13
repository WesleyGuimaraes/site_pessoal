new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    anchors: ['First', 'Second', 'Third', 'Fourth'],
    navigationTooltips: ['Home', 'About me', 'Projects', 'Habilities'],
    showActiveTooltips: true,
    scrollingSpeed: 700,
    controlArrows: false, 
    slidesNavigation: true, 
    credits: {enabled: false},
})


var i = 0;
    var tag = document.getElementById("text");
    var html = document.getElementById("text").innerHTML;
    var attr = tag.setAttribute("data", html);
    var txt = tag.getAttribute("data");
    var speed = 150;

    function typeWriter() {
      if (i <= txt.length) {
        document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

typeWriter();