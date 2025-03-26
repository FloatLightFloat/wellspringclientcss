window.addEventListener("routeChangeEvent",function(e) {
    e.detail.to.name&&setTimeout(function() {
        const e=document.createElement("div");e.classList.add("switch"),e.id="blurTool";e.innerHTML=' \n      <input id="blur-toggle" class="cmn-toggle cmn-toggle-round-flat" type="checkbox" />\n\t\t\t<label id="dragIOD" for="blur-toggle"></label>\n\t\t\t<div class="tooltip-inner-blur">\n      Switch protection mode\n      <div class="arrow" style="left: 63px;"></div>\n      </div>';var t=document.querySelector("#blurTool");t||null!==t||setTimeout(()=> {
            const t=document.querySelector("header .container-fluid .hl_header--controls:last-child");var l=!1;!1===l&&(l=!0,t.prepend(e)),document.querySelector("#blur-toggle").addEventListener("click",function(e) {
                const t=document.querySelector("body");e.target.checked&&t.classList.add("blur");e.target.checked||t.classList.remove("blur")}

            )}

        ,200)}

    ,1e3)}

);
