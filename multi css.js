javascript: (function() {
    var answer = prompt("Select\n1: No CSS\n2:All Dark\n3:Some Dark", "");
    switch (answer) {
        case "1":
            for (i = 0; i < document.styleSheets.length; i++) {
                document.styleSheets.item(i).disabled = true;
            }
            all = document.getElementsByTagName('*');
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
            var all = document.getElementsByTagName("*");

            for (var i = 0, max = all.length; i < max; i++) {
                all[i].style.background = "rgb(29,31,34)";
                all[i].style.color = "#ccc";
            }
            break;
        case "3":
            var all = document.querySelectorAll("p, div");
            for (var i = 0, max = all.length; i < max; i++) {
                all[i].style.background = "rgb(29,31,34)";
                all[i].style.color = "#ccc";
            }
            break;
    }
})()