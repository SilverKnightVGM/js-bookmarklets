/*******************
REMEMBER TO RUN A JSMin TOOL or this bookmarklet won't work with all these comments!!
*******************/
javascript: function brightness(r, g, b) {
	// This calculates the percieved brightness of a color, contrast formula by the W3C
	// https://trendct.org/2016/01/22/how-to-choose-a-label-color-to-contrast-with-background/
	return (r * 299 + g * 587 + b * 114) / 1000
}

(function() {
    var answer = prompt("Select\n1: No CSS\n2:All Dark\n3:Some Dark", "3");
	var all = document.getElementsByTagName("*");
    switch (answer) {
        case "1":
            for (i = 0; i < document.styleSheets.length; i++) {
                document.styleSheets.item(i).disabled = true;
            }
            for (i = 0; i < all.length; i++) {
                el = all[i];
                el.style.cssText = '';
                el.style.width = '';
                el.style.padding = '0px';
                el.style.margin = '0px';
                el.style.backgroundImage = 'none';
                el.style.backgroundColor = '#fff';
                el.style.color = '#000';
                el.style.paddingLeft = '1px';
                el.style.paddingRight = '1px';
            }
            break;
        case "2":
            for (var i = 0, max = all.length; i < max; i++) {
				//#1D1F22 == rgb(29,31,34)
                all[i].style.setProperty("background", "rgb(29,31,34)", "important");
                all[i].style.setProperty("color", "#ccc", "important");
            }
            break;
        case "3":
            all = document.querySelectorAll("p, div, span, pre");
            for (var i = 0, max = all.length; i < max; i++) {
                all[i].style.setProperty("background", "rgb(29,31,34)", "important");
				//Get the color after the css has been applied (getComputedStyle)
				var rgb = getComputedStyle(all[i], ":after").color;
				rgb = rgb.substring(4, rgb.length-1)
					 .replace(/ /g, '')
					 .split(',');
				//This brightness parameter can be changed, default=60
				if (brightness(rgb[0],rgb[1],rgb[2]) <= 60) {
					all[i].style.setProperty("color", "#ccc", "important");
				}
            }
            break;
    }
})()