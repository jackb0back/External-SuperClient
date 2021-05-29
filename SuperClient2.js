var MainWindowColor = '#FF32EC'
var WindowTitleColor = '00F0FF'
var HeaderBgColor = '#000'
var Toggle = false
var test = 1

(function(){javascript:(function(){javascript:(function(){(function(window) {
  var links = [{
    name: 'press i for auto clicker. Press , for U.W.@.S',
    
  }, {
    name: 'press O for website hacker.  Press 6 to see whats new',
    
  }, {
    name: 'press L to edit the webpage',
    
  }, {
    name: 'press K for snake',
    
  }, {
    name: 'press M for text replacer',

      
  }, {
    name: 'press N to play asteriods',
  }, {
    name: 'press [ to change the drag things around',
  }, {
    name: 'press ] to recolor things',
  }, {
    name: 'press Alt to realode the current page',
  }, {
    name: 'press ; for a javascript console',
  }, {
    name: 'press control to reopen the window',
  }, {
    name: 'press / for a 3D website',
  }, {
    name: 'press 5 for comments',
  }];
  var props = {
    width: 550,
    height: 535,
    background: MainWindowColor,
    borderThickness: 1,
    headerHeight: 32,
    headerBackground: HeaderBgColor,
    headerTitleColor: WindowTitleColor,
    windowTitle: 'Super Client'
  };
  var windowPosition = {
    left: ~~((document.documentElement.clientWidth / 2) - (props.width / 2)),
    top: ~~((document.documentElement.clientHeight / 2) - (props.height / 2)),
  }
  var btnSize = ~~(props.headerHeight * 0.8);
  var popupEl = document.createElement('DIV');
  Object.assign(popupEl.style, {
    position: 'absolute',
    left: windowPosition.left + 'px',
    top: windowPosition.top + 'px',
    zIndex: Number.MAX_SAFE_INTEGER,
    width: props.width + 'px',
    height: props.height + 'px',
    background: props.background,
    border: props.borderThickness + 'px solid black'
  });
  var popupHeader = document.createElement('DIV');
  Object.assign(popupHeader.style, {
    position: 'relative',
    width: (props.width) + 'px',
    height: props.headerHeight + 'px',
    background: props.headerBackground,
    borderBottom: props.borderThickness + 'px solid black'
  });
  var popupHeaderTitle = document.createElement('DIV');
  Object.assign(popupHeaderTitle.style, {
    position: 'relative',
    display: 'inline-block',
    left: 0,
    width: ~~(props.width - btnSize * 2) + 'px',
    lineHeight: props.headerHeight + 'px',
    color: props.headerTitleColor,
    fontSize: ~~(props.headerHeight * 0.667) + 'px',
    marginLeft: ~~(btnSize / 3) + 'px'
  });
  popupHeaderTitle.textContent = props.windowTitle;
  var closeButton = document.createElement('DIV');
  var margin = ~~((props.headerHeight - btnSize) / 2);
  Object.assign(closeButton.style, {
    position: 'relative',
    float: 'right',
    right: margin + 'px',
    top: margin + 'px',
    width: btnSize + 'px',
    height: btnSize + 'px',
    background: '#F00',
    border: props.borderThickness + 'px solid black',
    color: '#FFF',
    lineHeight: btnSize + 'px',
    textAlign: 'center',
    fontSize: btnSize + 'px',
    marginLeft: 'auto',
    marginRight: 0
  });
  var popupBody = document.createElement('DIV');
  Object.assign(popupBody.style, {
    padding: '1em'
  });
  var p = document.createElement('P');
  p.textContent = 'Power up with super client! ~made by jackson house~';
  popupBody.appendChild(p);
  var listEl = document.createElement('UL');
  links.forEach(link => {
    var itemEl = document.createElement('LI');
    var anchorEl = document.createElement('A');
    anchorEl.setAttribute('href', link.url);
    anchorEl.setAttribute('target', '_blank');
    anchorEl.textContent = link.name;
    itemEl.appendChild(anchorEl);
    listEl.appendChild(itemEl);
  });
  popupBody.appendChild(listEl);
  closeButton.addEventListener('click', destroyWindow, false);
  closeButton.textContent = 'X';
  popupHeader.appendChild(popupHeaderTitle);
  popupHeader.appendChild(closeButton);
  popupEl.appendChild(popupHeader);
  popupEl.appendChild(popupBody);
  document.body.appendChild(popupEl);
  draggable(popupHeader);
  function destroyWindow(e) {
    closeButton.removeEventListener('click', destroyWindow, false);
    popupHeader.removeChild(closeButton);
    popupEl.removeChild(popupHeader);
    popupEl.removeChild(popupBody);
    document.body.removeChild(popupEl);
  }
  /* Source: https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/ */
  function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  /* Source: https://gist.github.com/remarkablemark/5002d27442600510d454a5aeba370579 */
  function draggable(el) {
    var initialOffset = offset(el.parentElement);
    var isMouseDown = false;
    var currPos = { x : 0, y : 0 };
    var elPos = { x : initialOffset.left, y : initialOffset.top };
    el.parentElement.addEventListener('mousedown', onMouseDown);
    function onMouseDown(event) {
      isMouseDown = true;
      currPos.x = event.clientX;
      currPos.y = event.clientY;
      el.parentElement.style.cursor = 'move';
    }
    el.parentElement.addEventListener('mouseup', onMouseUp);
    function onMouseUp(event) {
      isMouseDown = false;
      elPos.x = parseInt(el.parentElement.style.left) || 0;
      elPos.y = parseInt(el.parentElement.style.top) || 0;
      el.parentElement.style.cursor = 'auto';
    }
    document.addEventListener('mousemove', onMouseMove);
    function onMouseMove(event) {
      if (!isMouseDown) return;
      var delta = { x : event.clientX - currPos.x, y: event.clientY - currPos.y };
      var pos = { x : elPos.x + delta.x, y : elPos.y + delta.y };
      if (pos.x < 0) {
        pos.x = 0;
      } else if (pos.x + el.parentElement.offsetWidth > document.documentElement.clientWidth) {
        pos.x = document.documentElement.clientWidth - el.parentElement.offsetWidth;
      }
      if (pos.y < 0) {
        pos.y = 0;
      } else if (pos.y + el.parentElement.offsetHeight > document.documentElement.clientHeight) {
        pos.y = document.documentElement.clientHeight - el.parentElement.offsetHeight;
      }
      el.parentElement.style.left = pos.x + 'px';
      el.parentElement.style.top = pos.y + 'px';
    }
  }
})(window);



//end of window code owo

//code for event.keys below

//auto clicker below

							  
if (Toggle = true) {							  
							  
							  
document.addEventListener("keyup", function(event) { if (event.key === 'i') { javascript:var DELAY = 1;var autoClickerStyleElement = document.createElement("style");autoClickerStyleElement.innerHTML="*{cursor: crosshair !important;}";document.body.appendChild(autoClickerStyleElement);function addClicker(e) {if(!e.isTrusted) {return;}if(e.target.classList.contains("auto-clicker-target")) {e.target.classList.remove("auto-clicker-target");} else {e.target.classList.add("auto-clicker-target");}document.body.removeChild(autoClickerStyleElement);document.body.removeEventListener("click", addClicker);e.preventDefault();autoClick(e.target);}function autoClick(element) {if(element.classList.contains("auto-clicker-target")) {element.click();setTimeout(function(){ autoClick(element); }, DELAY);}}document.body.addEventListener("click", addClicker, 0);//To add to your bookmarks highlight the code then paste it into your bookmarks bar.
    } });
    
//end

//event.key O

document.addEventListener("keyup", function(event) { if (event.key === 'o') { javascript:(function () {var script=document.createElement('script');script.src='https://x-ray-goggles.mouse.org/webxray.js';script.className='webxray';script.setAttribute('data-lang','en-US');script.setAttribute('data-baseuri','https://x-ray-goggles.mouse.org');document.body.appendChild(script);}())
    } });
    
    //end of event.key o
    //event.key L aka doc edit
    
    document.addEventListener("keyup", function(event) { if (event.key === 'l') {  document.body.contentEditable = 'true'; document.designMode='on'; void 0
        } });
   //end of edit
   
   //event.key K aka snake
   document.addEventListener("keyup", function(event) { if (event.key === 'k') { javascript:(function(){(function(){function e(){var e=document.createElement("script");e.src="https://rawgit.com/jlkravitz/snake-js/master/snake.js";e.onload=function(){Snake.run()};document.body.appendChild(e)}if(!($=window.jQuery)){var t=document.createElement("script");t.src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";t.onload=e;document.body.appendChild(t)}else{e()}})()})();
       } });
       
     /* event.key M aka text replace*/
     document.addEventListener("keyup", function(event) { if (event.key === 'm') {  javascript:function htmlreplace(a,b,element){if(!element)element=document.body;var nodes=element.childNodes;for(var n=0;n<nodes.length;n++){if(nodes[n].nodeType==Node.TEXT_NODE){nodes[n].textContent=nodes[n].textContent.replace(new RegExp(a,'gi'),b);}else{htmlreplace(a,b,nodes[n]);}}}htmlreplace(prompt("Text to replace:","old"),prompt("Replacement text:","new"));
        } });
      
       /* end of event.key M*/
       
       //event.key N aka asteriods
       
       document.addEventListener("keyup", function(event) { if (event.key === 'n') {  javascript:var s=document.createElement('script');s.type='text/javascript';s.onerror=function(e){alert('Failed to load the script. The site\'s Content Security Policy might be blocking it. Feel free to try again.');};document.body.appendChild(s);s.src='https://blog.roysolberg.com/js/dom2.min.js';void(0);
        } });
       
       /*end of event.key N*/
       /*event.key [ aka move text */
       
       document.addEventListener("keyup", function(event) { if (event.key === '[') {  javascript:/*dragon*/var b=X=Y=T=L=0;document.addEventListener("click",function(a){a.preventDefault()},!0);document.addEventListener("mousedown",c);document.addEventListener("touchstart",c);function c(a){a.preventDefault();a.target!==document.documentElement&&a.target!==document.body&&(b=Date.now(),a.target.setAttribute("data-drag",b),a.target.style.position="relative",T=a.target.style.top.split("px")[0]||0,L=a.target.style.left.split("px")[0]||0);X=a.clientX||a.touches[0].clientX;Y=a.clientY||a.touches[0].clientY}document.addEventListener("mousemove",d);document.addEventListener("touchmove",d);function d(a){if(""!==b){var e=document.querySelector('[data-drag="'+b+'"]');e.style.top=parseInt(T)+parseInt((a.clientY||a.touches[0].clientY)-Y)+"px";e.style.left=parseInt(L)+parseInt((a.clientX||a.touches[0].clientX)-X)+"px"}}document.addEventListener("mouseup",f);document.addEventListener("touchend",f);function f(){b=""}document.addEventListener("mouseover",g);function g(a){a.target.style.cursor="move";a.target.style.boxShadow="inset lime 0 0 1px,lime 0 0 1px"}document.addEventListener("mouseout",h);function h(a){a.target.style.cursor=a.target.style.boxShadow=""};
        } });
        
        /* end of event.key [ */
    
        
        
        document.addEventListener("keyup", function(event) { if (event.key === ']') {  javascript:(function(){var el=document.createElement("script");el.type="text/javascript";el.src="https://rawgit.com/ApoorvSaxena/colordrop/master/dist/production.min.js";el.onerror=function(){alert("Looks like the Content Security Policy directive is blocking the use of bookmarklets\n\nYou can copy and paste the content of:\n\n\"https://rawgit.com/ApoorvSaxena/colordrop/master/dist/production.min.js\"\n\ninto your console instead\n\n(link is in console already)");console.log("https://rawgit.ctom/ApoorvSaxena/colordrop/master/dist/production.min.js");};document.getElementsByTagName("body")[0].appendChild(el);})();
            } });
            
            /* end of event.key ] */
            
            
            /* event.key 1 aka i like frogs */
           
            document.addEventListener("keyup", function(event) { if (event.key === '1') { 
                javascript:(function(){(function(){var TEXT = 'i like frogs ';Array.prototype.slice.call(document.querySelectorAll('input[type=text],textarea')).map(function(el){el.onkeypress=function(evt){var charCode = typeof evt.which == 'number' ? evt.which : evt.keyCode;if (charCode && charCode > 31) {var start = this.selectionStart, end = this.selectionEnd;this.value = this.value.slice(0, start) + TEXT[start % TEXT.length] + this.value.slice(end);this.selectionStart = this.selectionEnd = start + 1;}return false;}});}());}())
            } });
            
           
           /* event.key 2 aka LSDDDDDDD*/
             document.addEventListener("keyup", function(event) { if (event.key === '2') { 
                function a(e){var n=e.childNodes;for(var i in n){a(n[i]);if(n[i].style) n[i].style.backgroundImage="url(http://bgreco.net/rainbowbg.gif)";}};a(document);
            } });
            
            
            /*event.key 3 aka ooof slant*/
            document.addEventListener("keyup", function(event) { if (event.key === '3') { 
               (function(){['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(el){el.style[prefix + 'transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';});});}())
            } });
            
            
            /*event.key ~ aka dark mode */
            
            document.addEventListener("keyup", function(event) { if (event.key === '`') { 
               (function(){function invert(o,t){var r=o.split("("),n=r[1].split(")")[0].split(",");return n.forEach(function(o,r){r<3&&(n[r]="color"==t&&255-parseInt(o)<50?120:255-parseInt(o))}),n=n.join(","),r[0]+"("+n+")"}document.querySelectorAll("*:not([invTouch])").forEach(function(o){var t=window.getComputedStyle(o);o.style.backgroundColor=invert(t.backgroundColor,"back"),o.style.color=invert(t.color,"color"),o.setAttribute("invTouch","true")});})();
            } });
            
            
            
            
            
            /*end of event.key ~ */
            
            /*event.key alt aka off */
            
             document.addEventListener("keyup", function(event) { if (event.key === 'Alt') { 
               window.location.reload(false); 
            } });
            
            
            /*end of event.key Alt */
            //event.key ; aka js console
             document.addEventListener("keyup", function(event) { if (event.key === ';') { 
              javascript:(function(){function grouped(e, n){ if(e != null){ return e[n].toString(); }else{ return ''; } } function dragElement(elmnt) { var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0; if (document.getElementById(elmnt.id + "header")) { document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown; } else { elmnt.onmousedown = dragMouseDown; } function dragMouseDown(e) { e = e || window.event; pos3 = e.clientX; pos4 = e.clientY; document.onmouseup = closeDragElement; document.onmousemove = elementDrag; } function elementDrag(e) { e = e || window.event; pos1 = pos3 - e.clientX; pos2 = pos4 - e.clientY; pos3 = e.clientX; pos4 = e.clientY; elmnt.style.top = (elmnt.offsetTop - pos2) + "px"; elmnt.style.left = (elmnt.offsetLeft - pos1) + "px"; elmnt.style.opacity = "0.85"; elmnt.style.background = "DarkSlateGrey"; elmnt.style.transition = "opacity 1300ms" } function closeDragElement() { document.onmouseup = null; document.onmousemove = null; elmnt.style.opacity = "1"; elmnt.style.background = "DarkSlateGrey"; } } function close() { document.body.removeChild(document.getElementById("pop_container")); } var cDiv = document.createElement("div"); cDiv.setAttribute("id", "pop_container"); document.body.appendChild(cDiv); cDiv.style.display = "inline-block"; cDiv.style.position = "fixed"; cDiv.style.top = "300px"; cDiv.style.left = "50%"; cDiv.style.width = "35%"; cDiv.style.height = "43%"; cDiv.style.border = "1px solid DarkSlateGrey "; cDiv.style.background = "DarkSlateGrey"; cDiv.style.borderRadius = "1em"; cDiv.style.padding = "3px"; cDiv.style.zIndex = "10000"; cDiv.style.fontFamily = '"Courier New", monospace'; var clsBtn = document.createElement("button"); document.getElementById("pop_container").appendChild(clsBtn); clsBtn.setAttribute("id", "btn_close"); document.getElementById("btn_close").innerText = "+"; clsBtn.style.position = "absolute"; clsBtn.style.background = "transparent"; clsBtn.style.height = "0px"; clsBtn.style.width = "0px"; clsBtn.style.display = "inline-block"; clsBtn.style.transform = "scale(2.5, 2.5) translate(5px, -5px) rotate(45deg)"; clsBtn.style.borderRadius = "1em"; clsBtn.style.padding = "0px"; clsBtn.style.boxShadow = "0px"; clsBtn.style.border = "0px"; clsBtn.style.cursor = "pointer"; clsBtn.style.userSelect = "none"; clsBtn.style.fontFamily = '"Courier New", monospace'; clsBtn.style.fontWeight = "bold"; clsBtn.style.color = "white"; var textbox_1 = document.createElement("TEXTAREA"); textbox_1.setAttribute("id", "textbox_code"); document.getElementById("pop_container").appendChild(textbox_1); textbox_1.style.width = "99%"; textbox_1.style.height = "83%"; textbox_1.style.padding = "6px"; textbox_1.style.border = "1px solid DarkSlateGrey"; textbox_1.style.background = "FloralWhite"; textbox_1.style.borderRadius = "1em"; textbox_1.style.display = "block"; textbox_1.style.fontSize = "1.2em"; textbox_1.style.userSelect = "none"; textbox_1.style.transform = "translate(0px, 5%)"; textbox_1.style.fontFamily = '"Courier New", monospace'; var evalBtn = document.createElement("button"); document.getElementById("pop_container").appendChild(evalBtn); evalBtn.setAttribute("id", "btn_box"); document.getElementById("btn_box").innerText = "runTheCode"; evalBtn.style.background = "DarkCyan"; evalBtn.style.border = "1px solid DarkSlateGrey"; evalBtn.style.width = "100%"; evalBtn.style.height = "33px"; evalBtn.style.borderRadius = "1em"; evalBtn.style.cursor = "pointer"; evalBtn.style.color = "white"; evalBtn.style.transform = "translate(0px, 55%)"; dragElement(document.getElementById(("pop_container"))); document.getElementById("btn_box").addEventListener("click", execute); document.getElementById("btn_close").addEventListener("click", close); textbox_1.addEventListener('keyup', tabIs); function tabIs(){ if(/\{\}/.exec(this.value) == "{}"){ this.value = this.value.replace(/\{\}/, "{\n \n}"); this.selectionStart = this.selectionStart-2; this.selectionEnd = this.selectionEnd-2; this.focus(); } } function execute(){ var code = document.getElementById("textbox_code").value; eval(code); }})()
            } });
            
            /*end of event.key ; */
}
            
            
             document.addEventListener("keyup", function(event) { if (event.key === 'Control' && Toggle === true) { 
            (function(window) {
  var links = [{
    name: 'press i for auto clicker. Press , for mini U.W.@.S',
    
  }, {
    name: 'press O for website hacker',
    
  }, {
    name: 'press L to edit the webpage',
    
  }, {
    name: 'press K for snake',
    
  }, {
    name: 'press M for text replacer',

      
  }, {
    name: 'press N to play asteriods',
  }, {
    name: 'press [ to change the drag things around',
  }, {
    name: 'press ] to recolor things',
  }, {
    name: 'press Alt to realode the current page',
  }, {
    name: 'press ; for a javascript console',
  }, {
    name: 'press control to reopen the window',
  }, {
    name: 'press / for a 3D website',
  }, {
    name: 'press 5 for comments',
  }];
  var props = {
    width: 500,
    height: 535,
    background: '#FF32EC',
    borderThickness: 1,
    headerHeight: 32,
    headerBackground: '#000',
    headerTitleColor: '#00F0FF',
    windowTitle: 'Super Client'
  };
  var windowPosition = {
    left: ~~((document.documentElement.clientWidth / 2) - (props.width / 2)),
    top: ~~((document.documentElement.clientHeight / 2) - (props.height / 2)),
  }
  var btnSize = ~~(props.headerHeight * 0.8);
  var popupEl = document.createElement('DIV');
  Object.assign(popupEl.style, {
    position: 'absolute',
    left: windowPosition.left + 'px',
    top: windowPosition.top + 'px',
    zIndex: Number.MAX_SAFE_INTEGER,
    width: props.width + 'px',
    height: props.height + 'px',
    background: props.background,
    border: props.borderThickness + 'px solid black'
  });
  var popupHeader = document.createElement('DIV');
  Object.assign(popupHeader.style, {
    position: 'relative',
    width: (props.width) + 'px',
    height: props.headerHeight + 'px',
    background: props.headerBackground,
    borderBottom: props.borderThickness + 'px solid black'
  });
  var popupHeaderTitle = document.createElement('DIV');
  Object.assign(popupHeaderTitle.style, {
    position: 'relative',
    display: 'inline-block',
    left: 0,
    width: ~~(props.width - btnSize * 2) + 'px',
    lineHeight: props.headerHeight + 'px',
    color: props.headerTitleColor,
    fontSize: ~~(props.headerHeight * 0.667) + 'px',
    marginLeft: ~~(btnSize / 3) + 'px'
  });
  popupHeaderTitle.textContent = props.windowTitle;
  var closeButton = document.createElement('DIV');
  var margin = ~~((props.headerHeight - btnSize) / 2);
  Object.assign(closeButton.style, {
    position: 'relative',
    float: 'right',
    right: margin + 'px',
    top: margin + 'px',
    width: btnSize + 'px',
    height: btnSize + 'px',
    background: '#F00',
    border: props.borderThickness + 'px solid black',
    color: '#FFF',
    lineHeight: btnSize + 'px',
    textAlign: 'center',
    fontSize: btnSize + 'px',
    marginLeft: 'auto',
    marginRight: 0
  });
  var popupBody = document.createElement('DIV');
  Object.assign(popupBody.style, {
    padding: '1em'
  });
  var p = document.createElement('P');
  p.textContent = 'Power up with super client!';
  popupBody.appendChild(p);
  var listEl = document.createElement('UL');
  links.forEach(link => {
    var itemEl = document.createElement('LI');
    var anchorEl = document.createElement('A');
    anchorEl.setAttribute('href', link.url);
    anchorEl.setAttribute('target', '_blank');
    anchorEl.textContent = link.name;
    itemEl.appendChild(anchorEl);
    listEl.appendChild(itemEl);
  });
  popupBody.appendChild(listEl);
  closeButton.addEventListener('click', destroyWindow, false);
  closeButton.textContent = 'X';
  popupHeader.appendChild(popupHeaderTitle);
  popupHeader.appendChild(closeButton);
  popupEl.appendChild(popupHeader);
  popupEl.appendChild(popupBody);
  document.body.appendChild(popupEl);
  draggable(popupHeader);
  function destroyWindow(e) {
    closeButton.removeEventListener('click', destroyWindow, false);
    popupHeader.removeChild(closeButton);
    popupEl.removeChild(popupHeader);
    popupEl.removeChild(popupBody);
    document.body.removeChild(popupEl);
  }
  /* Source: https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/ */
  function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  /* Source: https://gist.github.com/remarkablemark/5002d27442600510d454a5aeba370579 */
  function draggable(el) {
    var initialOffset = offset(el.parentElement);
    var isMouseDown = false;
    var currPos = { x : 0, y : 0 };
    var elPos = { x : initialOffset.left, y : initialOffset.top };
    el.parentElement.addEventListener('mousedown', onMouseDown);
    function onMouseDown(event) {
      isMouseDown = true;
      currPos.x = event.clientX;
      currPos.y = event.clientY;
      el.parentElement.style.cursor = 'move';
    }
    el.parentElement.addEventListener('mouseup', onMouseUp);
    function onMouseUp(event) {
      isMouseDown = false;
      elPos.x = parseInt(el.parentElement.style.left) || 0;
      elPos.y = parseInt(el.parentElement.style.top) || 0;
      el.parentElement.style.cursor = 'auto';
    }
    document.addEventListener('mousemove', onMouseMove);
    function onMouseMove(event) {
      if (!isMouseDown) return;
      var delta = { x : event.clientX - currPos.x, y: event.clientY - currPos.y };
      var pos = { x : elPos.x + delta.x, y : elPos.y + delta.y };
      if (pos.x < 0) {
        pos.x = 0;
      } else if (pos.x + el.parentElement.offsetWidth > document.documentElement.clientWidth) {
        pos.x = document.documentElement.clientWidth - el.parentElement.offsetWidth;
      }
      if (pos.y < 0) {
        pos.y = 0;
      } else if (pos.y + el.parentElement.offsetHeight > document.documentElement.clientHeight) {
        pos.y = document.documentElement.clientHeight - el.parentElement.offsetHeight;
      }
      el.parentElement.style.left = pos.x + 'px';
      el.parentElement.style.top = pos.y + 'px';
    }
  }
})(window);

            } });
            
            /*end of re-open window */
            
            
            
            
            /*event.key / */
            
             document.addEventListener("keyup", function(event) { if (event.key === '/') { 
            javascript:(function(){(function() {
	var tri = {
		menu: document.createElement("div"),
		limit: document.createElement("input"),
		gap: document.createElement("input"),
		sag: document.createElement("input"),
		fov: document.createElement("input"),
		flo: document.createElement("input"),
		off: document.createElement("input"),
		non: document.createElement("input"),
		end: document.createElement("input"),
		tgl: document.createElement("input"),
		cssStatic: document.createElement("style"),
		cssDynamic: document.createElement("style"),
		orientation: {"yaw": 0, "pitch": 0, "roll": 0},
		mouseMove: function(e) {
			tri.orientation.yaw = -Math.cos(Math.PI * e.clientX / innerWidth) * 180 * tri.limit.value;
			tri.orientation.pitch = Math.cos(Math.PI * e.clientY / innerHeight) * 180 * tri.limit.value;
			tri.updateBody();
		},
		gyroMove: function(e) {
			var landscape = innerWidth > innerHeight;
			if (landscape) {
				tri.orientation.yaw = -(e.alpha + e.beta);
				tri.orientation.pitch = e.gamma - Math.sign(90 - Math.abs(e.beta)) * 90;
			}
			else {
				tri.orientation.yaw = -(e.alpha + e.gamma);
				tri.orientation.pitch = e.beta - 90;
			}
			tri.updateBody();
		},
		updateOrigin: function(e) {
			document.body.style.transformOrigin = (innerWidth / 2 + pageXOffset) + "px " + (innerHeight / 2 + pageYOffset) + "px";
		},
		updateBody: function() {
			document.body.style.transform = "perspective(" + Math.pow(2, tri.fov.value) + "px) translateZ(-" + tri.gap.value + "px) rotateX(" + tri.orientation.pitch + "deg) rotateY(" + tri.orientation.yaw + "deg)";
		},
		updateCSS: function() {
			if (tri.non.checked)
				tri.cssDynamic.innerHTML = "";
			else if (tri.off.checked)
				tri.cssDynamic.innerHTML = "* { transform-style: preserve-3d; }";
			else {
				for (var depth = 0; document.querySelector("body" + " > *".repeat(depth)); depth++);
				var gap = tri.gap.value / depth;
				var sag = -Math.PI * tri.sag.value / depth;
				tri.cssDynamic.innerHTML = `
* {
	transform: translateZ(${gap}px) rotateX(${sag}rad);
	transform-style: preserve-3d;
	transition: transform 1s;
	outline: 1px solid rgba(0, 0, 0, 0.0625);
	${tri.flo.checked ? "overflow: visible !important;" : ""}
}
*:hover {
	transform: translateZ(${gap * 2}px) rotateX(${sag * 2}rad);
	${!tri.flo.checked ? "overflow: visible;" : ""}
}
`;
			}
		},
		toggle: function() {
			if (tri.menu.className == "active") {
				tri.menu.removeAttribute("class");
			}
			else {
				tri.menu.className = "active";
			}
		},
		quit: function() {
			window.removeEventListener("deviceorientation", tri.gyroMove);
			window.removeEventListener("mousemove", tri.mouseMove);
			window.removeEventListener("scroll", tri.updateOrigin);
			window.addEventListener("resize", tri.updateOrigin);
			tri.menu.remove();
			tri.cssStatic.remove();
			tri.cssDynamic.remove();
			document.body.removeAttribute("style");
		},
		newRange: function(e, label, min, step, max, value, f) {
			tri.menu.appendChild(e);
			e.type = "range";
			e.min = min;
			e.max = max;
			e.step = step;
			e.value = value;
			e.addEventListener("input", f);
			tri.menu.appendChild(document.createElement("span")).innerHTML = label;
			tri.menu.appendChild(document.createElement("br"));
		},
		newCheckbox: function(e, label, f) {
			tri.menu.appendChild(e);
			e.type = "checkbox";
			e.addEventListener("click", f);
			tri.menu.appendChild(document.createElement("span")).innerHTML = label;
			tri.menu.appendChild(document.createElement("br"));
		},
		newButton: function(e, label, f) {
			tri.menu.appendChild(e);
			e.type = "button";
			e.value = label;
			e.addEventListener("click", f);
		},
		init: function() {
			document.body.parentNode.appendChild(tri.menu).id = "tri-menu";
			tri.newRange(tri.limit, "limit", 0, 0.03125, 1, 0.125, tri.updateBody);
			tri.newRange(tri.gap, "gap / distance", 0, 32, 512, 128, function() {
				tri.updateCSS();
				tri.updateBody();
			});
			tri.newRange(tri.sag, "sag", -0.25, 0.03125, 0.25, 0, tri.updateCSS);
			tri.newRange(tri.fov, "field of view", 7, 1, 13, 10, tri.updateBody);
			tri.newCheckbox(tri.flo, "force overflow", tri.updateCSS);
			tri.flo.setAttribute("checked", "");
			tri.newCheckbox(tri.off, "flatten layers", tri.updateCSS);
			tri.newCheckbox(tri.non, "flatten everything", tri.updateCSS);
			tri.newButton(tri.end, "Quit", tri.quit);
			tri.newButton(tri.tgl, "ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â°Ãƒâ€šÃ‚Â¡", tri.toggle);
			tri.tgl.id = "tri-toggle";
			tri.menu.appendChild(tri.cssStatic).innerHTML = `
html, body {
	transition-property: none;
	height: 100%;
	width: 100%;
}
html, html:hover, #tri-menu, #tri-menu > *, #tri-menu > *:hover {
	transform: none;
	outline: none;
	overflow: auto !important;
	float: none;
}
#tri-menu {
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	color: white;
	border: 1px solid rgba(255, 255, 255, 0.5);;
	border-radius: 0 0 16px 0;
	padding: 8px;
	transform: translate(-100%, -100%) translate(32px, 32px);
}
#tri-menu.active {
	transform: none;
}
#tri-toggle {
	position: absolute;
	bottom: 0;
	right: 0;
	height: 32px;
	width: 32px;
	background: transparent;
	color: white;
	border: none;
	cursor: pointer;
}
#tri-menu.active > #tri-toggle {
	background: white;
	color: black;
	border-radius: 8px 0 0 0;
}
`;
			tri.menu.appendChild(tri.cssDynamic);
			tri.updateCSS();
			window.addEventListener("deviceorientation", tri.gyroMove);
			window.addEventListener("mousemove", tri.mouseMove);
			window.addEventListener("scroll", tri.updateOrigin);
			window.addEventListener("resize", tri.updateOrigin);
			window.scrollBy(0, 1);
		}
	};
	tri.init();
})();})();
            } });
            
            
            /*end of event.key / */})();
            
            
             document.addEventListener("keyup", function(event) { if (event.key === '4' && Toggle === true) { 
               javascript:!function(){const t={text:prompt("Text:","Weee!"),size:150,weight:800,speed:50};let e=[];for(let n=0;n<50;n++){let n=document.createElement("div");n.style=`width: 100%; margin: auto; pointer-events: none; user-select: none; font-weight: ${t.weight}; font-size: ${t.size}px; position: absolute; z-index: 2147483647; transition: all 10s linear; transform-origin: center center; text-align: center;`,n.textContent=t.text,document.body.appendChild(n),e.push(n)}function n(t,e){return Math.floor(Math.random()*(e-t)+t)}setInterval((()=>{const t=e[Math.floor(Math.random()*e.length)];t.style.color=function(){const t=[[150,256],[0,190],[0,30]],e=function(){const e=t.splice(Math.floor(Math.random()*t.length),1)[0];return Math.floor(Math.random()*(e[1]-e[0]))+e[0]};return"rgb("+e()+","+e()+","+e()+")"}(),t.style.opacity=Math.random()+.1,t.style.transform=`rotate(${n(0,360)}deg) translate(${n(-1e3,1e3)}px, ${n(-500,500)}px) translate3d(${n(0,200)}px,${n(0,200)}px,${n(0,200)}px) rotateX(${n(0,360)}deg) rotateY(${n(0,360)}deg) rotateZ(${n(0,360)}deg)`}),t.speed)}();
            } });
            
            
            document.addEventListener("keyup", function(event) {
    if (event.key === ',') {
        (function(window) {
  var links = [{
    name: 'Press ] to open Hacks',
    
  }, {
    name: 'Press [ to open games',
    
  }, {
    name: '',
  
  }];
  var props = {
    width: 500,
    height: 300,
    background: '#00FFE8',
    borderThickness: 1,
    headerHeight: 32,
    headerBackground: '#000000',
    headerTitleColor: '#FFF',
    windowTitle: 'U.W.@.S'
  };
  var windowPosition = {
    left: ~~((document.documentElement.clientWidth / 2) - (props.width / 2)),
    top: ~~((document.documentElement.clientHeight / 2) - (props.height / 2)),
  }
  var btnSize = ~~(props.headerHeight * 0.8);
  var popupEl = document.createElement('DIV');
  Object.assign(popupEl.style, {
    position: 'absolute',
    left: windowPosition.left + 'px',
    top: windowPosition.top + 'px',
    zIndex: Number.MAX_SAFE_INTEGER,
    width: props.width + 'px',
    height: props.height + 'px',
    background: props.background,
    border: props.borderThickness + 'px solid black'
  });
  var popupHeader = document.createElement('DIV');
  Object.assign(popupHeader.style, {
    position: 'relative',
    width: (props.width) + 'px',
    height: props.headerHeight + 'px',
    background: props.headerBackground,
    borderBottom: props.borderThickness + 'px solid black'
  });
  var popupHeaderTitle = document.createElement('DIV');
  Object.assign(popupHeaderTitle.style, {
    position: 'relative',
    display: 'inline-block',
    left: 0,
    width: ~~(props.width - btnSize * 2) + 'px',
    lineHeight: props.headerHeight + 'px',
    color: props.headerTitleColor,
    fontSize: ~~(props.headerHeight * 0.667) + 'px',
    marginLeft: ~~(btnSize / 3) + 'px'
  });
  popupHeaderTitle.textContent = props.windowTitle;
  var closeButton = document.createElement('DIV');
  var margin = ~~((props.headerHeight - btnSize) / 2);
  Object.assign(closeButton.style, {
    position: 'relative',
    float: 'right',
    right: margin + 'px',
    top: margin + 'px',
    width: btnSize + 'px',
    height: btnSize + 'px',
    background: '#F00',
    border: props.borderThickness + 'px solid black',
    color: '#FFF',
    lineHeight: btnSize + 'px',
    textAlign: 'center',
    fontSize: btnSize + 'px',
    marginLeft: 'auto',
    marginRight: 0
  });
  var popupBody = document.createElement('DIV');
  Object.assign(popupBody.style, {
    padding: '1em'
  });
  var p = document.createElement('P');
  p.textContent = 'U.W.@.S bookmarklet ~by jackson house~ ';
  popupBody.appendChild(p);
  var listEl = document.createElement('UL');
  links.forEach(link => {
    var itemEl = document.createElement('LI');
    var anchorEl = document.createElement('A');
    anchorEl.setAttribute('href', link.url);
    anchorEl.setAttribute('target', '_blank');
    anchorEl.textContent = link.name;
    itemEl.appendChild(anchorEl);
    listEl.appendChild(itemEl);
  });
  popupBody.appendChild(listEl);
  closeButton.addEventListener('click', destroyWindow, false);
  closeButton.textContent = 'X';
  popupHeader.appendChild(popupHeaderTitle);
  popupHeader.appendChild(closeButton);
  popupEl.appendChild(popupHeader);
  popupEl.appendChild(popupBody);
  document.body.appendChild(popupEl);
  draggable(popupHeader);
  function destroyWindow(e) {
    closeButton.removeEventListener('click', destroyWindow, false);
    popupHeader.removeChild(closeButton);
    popupEl.removeChild(popupHeader);
    popupEl.removeChild(popupBody);
    document.body.removeChild(popupEl);
  }
  /* Source: https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/ */
  function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  /* Source: https://gist.github.com/remarkablemark/5002d27442600510d454a5aeba370579 */
  function draggable(el) {
    var initialOffset = offset(el.parentElement);
    var isMouseDown = false;
    var currPos = { x : 0, y : 0 };
    var elPos = { x : initialOffset.left, y : initialOffset.top };
    el.parentElement.addEventListener('mousedown', onMouseDown);
    function onMouseDown(event) {
      isMouseDown = true;
      currPos.x = event.clientX;
      currPos.y = event.clientY;
      el.parentElement.style.cursor = 'move';
    }
    el.parentElement.addEventListener('mouseup', onMouseUp);
    function onMouseUp(event) {
      isMouseDown = false;
      elPos.x = parseInt(el.parentElement.style.left) || 0;
      elPos.y = parseInt(el.parentElement.style.top) || 0;
      el.parentElement.style.cursor = 'auto';
    }
    document.addEventListener('mousemove', onMouseMove);
    function onMouseMove(event) {
      if (!isMouseDown) return;
      var delta = { x : event.clientX - currPos.x, y: event.clientY - currPos.y };
      var pos = { x : elPos.x + delta.x, y : elPos.y + delta.y };
      if (pos.x < 0) {
        pos.x = 0;
      } else if (pos.x + el.parentElement.offsetWidth > document.documentElement.clientWidth) {
        pos.x = document.documentElement.clientWidth - el.parentElement.offsetWidth;
      }
      if (pos.y < 0) {
        pos.y = 0;
      } else if (pos.y + el.parentElement.offsetHeight > document.documentElement.clientHeight) {
        pos.y = document.documentElement.clientHeight - el.parentElement.offsetHeight;
      }
      el.parentElement.style.left = pos.x + 'px';
      el.parentElement.style.top = pos.y + 'px';
    }
  }
})(window);

/*end of main window */




document.addEventListener("keyup", function(event) {
    if (event.key === ']') {
        (function(window) {
  var links = [{
    name: 'Press 1 for xray',
    
  }, {
    name: 'Press 2 for js console',
    
  }, {
    name: 'Press 3 for edit',
  
  }];
  var props = {
    width: 500,
    height: 300,
    background: '#00FFE8',
    borderThickness: 1,
    headerHeight: 32,
    headerBackground: '#000000',
    headerTitleColor: '#FFF',
    windowTitle: 'U.W.@.S'
  };
  var windowPosition = {
    left: ~~((document.documentElement.clientWidth / 2) - (props.width / 2)),
    top: ~~((document.documentElement.clientHeight / 2) - (props.height / 2)),
  }
  var btnSize = ~~(props.headerHeight * 0.8);
  var popupEl = document.createElement('DIV');
  Object.assign(popupEl.style, {
    position: 'absolute',
    left: windowPosition.left + 'px',
    top: windowPosition.top + 'px',
    zIndex: Number.MAX_SAFE_INTEGER,
    width: props.width + 'px',
    height: props.height + 'px',
    background: props.background,
    border: props.borderThickness + 'px solid black'
  });
  var popupHeader = document.createElement('DIV');
  Object.assign(popupHeader.style, {
    position: 'relative',
    width: (props.width) + 'px',
    height: props.headerHeight + 'px',
    background: props.headerBackground,
    borderBottom: props.borderThickness + 'px solid black'
  });
  var popupHeaderTitle = document.createElement('DIV');
  Object.assign(popupHeaderTitle.style, {
    position: 'relative',
    display: 'inline-block',
    left: 0,
    width: ~~(props.width - btnSize * 2) + 'px',
    lineHeight: props.headerHeight + 'px',
    color: props.headerTitleColor,
    fontSize: ~~(props.headerHeight * 0.667) + 'px',
    marginLeft: ~~(btnSize / 3) + 'px'
  });
  popupHeaderTitle.textContent = props.windowTitle;
  var closeButton = document.createElement('DIV');
  var margin = ~~((props.headerHeight - btnSize) / 2);
  Object.assign(closeButton.style, {
    position: 'relative',
    float: 'right',
    right: margin + 'px',
    top: margin + 'px',
    width: btnSize + 'px',
    height: btnSize + 'px',
    background: '#F00',
    border: props.borderThickness + 'px solid black',
    color: '#FFF',
    lineHeight: btnSize + 'px',
    textAlign: 'center',
    fontSize: btnSize + 'px',
    marginLeft: 'auto',
    marginRight: 0
  });
  var popupBody = document.createElement('DIV');
  Object.assign(popupBody.style, {
    padding: '1em'
  });
  var p = document.createElement('P');
  p.textContent = 'U.W.@.S-hacks';
  popupBody.appendChild(p);
  var listEl = document.createElement('UL');
  links.forEach(link => {
    var itemEl = document.createElement('LI');
    var anchorEl = document.createElement('A');
    anchorEl.setAttribute('href', link.url);
    anchorEl.setAttribute('target', '_blank');
    anchorEl.textContent = link.name;
    itemEl.appendChild(anchorEl);
    listEl.appendChild(itemEl);
  });
  popupBody.appendChild(listEl);
  closeButton.addEventListener('click', destroyWindow, false);
  closeButton.textContent = 'X';
  popupHeader.appendChild(popupHeaderTitle);
  popupHeader.appendChild(closeButton);
  popupEl.appendChild(popupHeader);
  popupEl.appendChild(popupBody);
  document.body.appendChild(popupEl);
  draggable(popupHeader);
  function destroyWindow(e) {
    closeButton.removeEventListener('click', destroyWindow, false);
    popupHeader.removeChild(closeButton);
    popupEl.removeChild(popupHeader);
    popupEl.removeChild(popupBody);
    document.body.removeChild(popupEl);
  }
  /* Source: https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/ */
  function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  /* Source: https://gist.github.com/remarkablemark/5002d27442600510d454a5aeba370579 */
  function draggable(el) {
    var initialOffset = offset(el.parentElement);
    var isMouseDown = false;
    var currPos = { x : 0, y : 0 };
    var elPos = { x : initialOffset.left, y : initialOffset.top };
    el.parentElement.addEventListener('mousedown', onMouseDown);
    function onMouseDown(event) {
      isMouseDown = true;
      currPos.x = event.clientX;
      currPos.y = event.clientY;
      el.parentElement.style.cursor = 'move';
    }
    el.parentElement.addEventListener('mouseup', onMouseUp);
    function onMouseUp(event) {
      isMouseDown = false;
      elPos.x = parseInt(el.parentElement.style.left) || 0;
      elPos.y = parseInt(el.parentElement.style.top) || 0;
      el.parentElement.style.cursor = 'auto';
    }
    document.addEventListener('mousemove', onMouseMove);
    function onMouseMove(event) {
      if (!isMouseDown) return;
      var delta = { x : event.clientX - currPos.x, y: event.clientY - currPos.y };
      var pos = { x : elPos.x + delta.x, y : elPos.y + delta.y };
      if (pos.x < 0) {
        pos.x = 0;
      } else if (pos.x + el.parentElement.offsetWidth > document.documentElement.clientWidth) {
        pos.x = document.documentElement.clientWidth - el.parentElement.offsetWidth;
      }
      if (pos.y < 0) {
        pos.y = 0;
      } else if (pos.y + el.parentElement.offsetHeight > document.documentElement.clientHeight) {
        pos.y = document.documentElement.clientHeight - el.parentElement.offsetHeight;
      }
      el.parentElement.style.left = pos.x + 'px';
      el.parentElement.style.top = pos.y + 'px';
    }
  }
})(window);

 document.addEventListener("keyup", function(event) { if (event.key === '3') {  document.body.contentEditable = 'true'; document.designMode='on'; void 0
        } });


document.addEventListener("keyup", function(event) { if (event.key === '1') { javascript:(function () {var script=document.createElement('script');script.src='https://x-ray-goggles.mouse.org/webxray.js';script.className='webxray';script.setAttribute('data-lang','en-US');script.setAttribute('data-baseuri','https://x-ray-goggles.mouse.org');document.body.appendChild(script);}())
    } });
    
    
     document.addEventListener("keyup", function(event) { if (event.key === '2') { 
              javascript:(function(){function grouped(e, n){ if(e != null){ return e[n].toString(); }else{ return ''; } } function dragElement(elmnt) { var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0; if (document.getElementById(elmnt.id + "header")) { document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown; } else { elmnt.onmousedown = dragMouseDown; } function dragMouseDown(e) { e = e || window.event; pos3 = e.clientX; pos4 = e.clientY; document.onmouseup = closeDragElement; document.onmousemove = elementDrag; } function elementDrag(e) { e = e || window.event; pos1 = pos3 - e.clientX; pos2 = pos4 - e.clientY; pos3 = e.clientX; pos4 = e.clientY; elmnt.style.top = (elmnt.offsetTop - pos2) + "px"; elmnt.style.left = (elmnt.offsetLeft - pos1) + "px"; elmnt.style.opacity = "0.85"; elmnt.style.background = "DarkSlateGrey"; elmnt.style.transition = "opacity 1300ms" } function closeDragElement() { document.onmouseup = null; document.onmousemove = null; elmnt.style.opacity = "1"; elmnt.style.background = "DarkSlateGrey"; } } function close() { document.body.removeChild(document.getElementById("pop_container")); } var cDiv = document.createElement("div"); cDiv.setAttribute("id", "pop_container"); document.body.appendChild(cDiv); cDiv.style.display = "inline-block"; cDiv.style.position = "fixed"; cDiv.style.top = "300px"; cDiv.style.left = "50%"; cDiv.style.width = "35%"; cDiv.style.height = "43%"; cDiv.style.border = "1px solid DarkSlateGrey "; cDiv.style.background = "DarkSlateGrey"; cDiv.style.borderRadius = "1em"; cDiv.style.padding = "3px"; cDiv.style.zIndex = "10000"; cDiv.style.fontFamily = '"Courier New", monospace'; var clsBtn = document.createElement("button"); document.getElementById("pop_container").appendChild(clsBtn); clsBtn.setAttribute("id", "btn_close"); document.getElementById("btn_close").innerText = "+"; clsBtn.style.position = "absolute"; clsBtn.style.background = "transparent"; clsBtn.style.height = "0px"; clsBtn.style.width = "0px"; clsBtn.style.display = "inline-block"; clsBtn.style.transform = "scale(2.5, 2.5) translate(5px, -5px) rotate(45deg)"; clsBtn.style.borderRadius = "1em"; clsBtn.style.padding = "0px"; clsBtn.style.boxShadow = "0px"; clsBtn.style.border = "0px"; clsBtn.style.cursor = "pointer"; clsBtn.style.userSelect = "none"; clsBtn.style.fontFamily = '"Courier New", monospace'; clsBtn.style.fontWeight = "bold"; clsBtn.style.color = "white"; var textbox_1 = document.createElement("TEXTAREA"); textbox_1.setAttribute("id", "textbox_code"); document.getElementById("pop_container").appendChild(textbox_1); textbox_1.style.width = "99%"; textbox_1.style.height = "83%"; textbox_1.style.padding = "6px"; textbox_1.style.border = "1px solid DarkSlateGrey"; textbox_1.style.background = "FloralWhite"; textbox_1.style.borderRadius = "1em"; textbox_1.style.display = "block"; textbox_1.style.fontSize = "1.2em"; textbox_1.style.userSelect = "none"; textbox_1.style.transform = "translate(0px, 5%)"; textbox_1.style.fontFamily = '"Courier New", monospace'; var evalBtn = document.createElement("button"); document.getElementById("pop_container").appendChild(evalBtn); evalBtn.setAttribute("id", "btn_box"); document.getElementById("btn_box").innerText = "runTheCode"; evalBtn.style.background = "DarkCyan"; evalBtn.style.border = "1px solid DarkSlateGrey"; evalBtn.style.width = "100%"; evalBtn.style.height = "33px"; evalBtn.style.borderRadius = "1em"; evalBtn.style.cursor = "pointer"; evalBtn.style.color = "white"; evalBtn.style.transform = "translate(0px, 55%)"; dragElement(document.getElementById(("pop_container"))); document.getElementById("btn_box").addEventListener("click", execute); document.getElementById("btn_close").addEventListener("click", close); textbox_1.addEventListener('keyup', tabIs); function tabIs(){ if(/\{\}/.exec(this.value) == "{}"){ this.value = this.value.replace(/\{\}/, "{\n \n}"); this.selectionStart = this.selectionStart-2; this.selectionEnd = this.selectionEnd-2; this.focus(); } } function execute(){ var code = document.getElementById("textbox_code").value; eval(code); }})()
            } });
    
    
/*end of hacks */

    }
});




document.addEventListener("keyup", function(event) {
    if (event.key === '[') {
        (function(window) {
  var links = [{
    name: 'Press 4 for asteriods',
    
  }, {
    name: 'Press 5 for snake',
    
  }, {
    name: '',
  
  }];
  var props = {
    width: 500,
    height: 300,
    background: '#00FFE8',
    borderThickness: 1,
    headerHeight: 32,
    headerBackground: '#000000',
    headerTitleColor: '#FFF',
    windowTitle: 'U.W.@.S'
  };
  var windowPosition = {
    left: ~~((document.documentElement.clientWidth / 2) - (props.width / 2)),
    top: ~~((document.documentElement.clientHeight / 2) - (props.height / 2)),
  }
  var btnSize = ~~(props.headerHeight * 0.8);
  var popupEl = document.createElement('DIV');
  Object.assign(popupEl.style, {
    position: 'absolute',
    left: windowPosition.left + 'px',
    top: windowPosition.top + 'px',
    zIndex: Number.MAX_SAFE_INTEGER,
    width: props.width + 'px',
    height: props.height + 'px',
    background: props.background,
    border: props.borderThickness + 'px solid black'
  });
  var popupHeader = document.createElement('DIV');
  Object.assign(popupHeader.style, {
    position: 'relative',
    width: (props.width) + 'px',
    height: props.headerHeight + 'px',
    background: props.headerBackground,
    borderBottom: props.borderThickness + 'px solid black'
  });
  var popupHeaderTitle = document.createElement('DIV');
  Object.assign(popupHeaderTitle.style, {
    position: 'relative',
    display: 'inline-block',
    left: 0,
    width: ~~(props.width - btnSize * 2) + 'px',
    lineHeight: props.headerHeight + 'px',
    color: props.headerTitleColor,
    fontSize: ~~(props.headerHeight * 0.667) + 'px',
    marginLeft: ~~(btnSize / 3) + 'px'
  });
  popupHeaderTitle.textContent = props.windowTitle;
  var closeButton = document.createElement('DIV');
  var margin = ~~((props.headerHeight - btnSize) / 2);
  Object.assign(closeButton.style, {
    position: 'relative',
    float: 'right',
    right: margin + 'px',
    top: margin + 'px',
    width: btnSize + 'px',
    height: btnSize + 'px',
    background: '#F00',
    border: props.borderThickness + 'px solid black',
    color: '#FFF',
    lineHeight: btnSize + 'px',
    textAlign: 'center',
    fontSize: btnSize + 'px',
    marginLeft: 'auto',
    marginRight: 0
  });
  var popupBody = document.createElement('DIV');
  Object.assign(popupBody.style, {
    padding: '1em'
  });
  var p = document.createElement('P');
  p.textContent = 'U.W.@.S-games';
  popupBody.appendChild(p);
  var listEl = document.createElement('UL');
  links.forEach(link => {
    var itemEl = document.createElement('LI');
    var anchorEl = document.createElement('A');
    anchorEl.setAttribute('href', link.url);
    anchorEl.setAttribute('target', '_blank');
    anchorEl.textContent = link.name;
    itemEl.appendChild(anchorEl);
    listEl.appendChild(itemEl);
  });
  popupBody.appendChild(listEl);
  closeButton.addEventListener('click', destroyWindow, false);
  closeButton.textContent = 'X';
  popupHeader.appendChild(popupHeaderTitle);
  popupHeader.appendChild(closeButton);
  popupEl.appendChild(popupHeader);
  popupEl.appendChild(popupBody);
  document.body.appendChild(popupEl);
  draggable(popupHeader);
  function destroyWindow(e) {
    closeButton.removeEventListener('click', destroyWindow, false);
    popupHeader.removeChild(closeButton);
    popupEl.removeChild(popupHeader);
    popupEl.removeChild(popupBody);
    document.body.removeChild(popupEl);
  }
  /* Source: https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/ */
  function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  /* Source: https://gist.github.com/remarkablemark/5002d27442600510d454a5aeba370579 */
  function draggable(el) {
    var initialOffset = offset(el.parentElement);
    var isMouseDown = false;
    var currPos = { x : 0, y : 0 };
    var elPos = { x : initialOffset.left, y : initialOffset.top };
    el.parentElement.addEventListener('mousedown', onMouseDown);
    function onMouseDown(event) {
      isMouseDown = true;
      currPos.x = event.clientX;
      currPos.y = event.clientY;
      el.parentElement.style.cursor = 'move';
    }
    el.parentElement.addEventListener('mouseup', onMouseUp);
    function onMouseUp(event) {
      isMouseDown = false;
      elPos.x = parseInt(el.parentElement.style.left) || 0;
      elPos.y = parseInt(el.parentElement.style.top) || 0;
      el.parentElement.style.cursor = 'auto';
    }
    document.addEventListener('mousemove', onMouseMove);
    function onMouseMove(event) {
      if (!isMouseDown) return;
      var delta = { x : event.clientX - currPos.x, y: event.clientY - currPos.y };
      var pos = { x : elPos.x + delta.x, y : elPos.y + delta.y };
      if (pos.x < 0) {
        pos.x = 0;
      } else if (pos.x + el.parentElement.offsetWidth > document.documentElement.clientWidth) {
        pos.x = document.documentElement.clientWidth - el.parentElement.offsetWidth;
      }
      if (pos.y < 0) {
        pos.y = 0;
      } else if (pos.y + el.parentElement.offsetHeight > document.documentElement.clientHeight) {
        pos.y = document.documentElement.clientHeight - el.parentElement.offsetHeight;
      }
      el.parentElement.style.left = pos.x + 'px';
      el.parentElement.style.top = pos.y + 'px';
    }
  }
})(window);

/*end of window */
/*games below */


document.addEventListener("keyup", function(event) { if (event.key === '4') {  javascript:var s=document.createElement('script');s.type='text/javascript';s.onerror=function(e){alert('Failed to load the script. The site\'s Content Security Policy might be blocking it. Feel free to try again.');};document.body.appendChild(s);s.src='https://blog.roysolberg.com/js/dom2.min.js';void(0);
        } });

document.addEventListener("keyup", function(event) { if (event.key === '5') { javascript:(function(){(function(){function e(){var e=document.createElement("script");e.src="https://rawgit.com/jlkravitz/snake-js/master/snake.js";e.onload=function(){Snake.run()};document.body.appendChild(e)}if(!($=window.jQuery)){var t=document.createElement("script");t.src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";t.onload=e;document.body.appendChild(t)}else{e()}})()})();
       } });
    }
    
    /*end of games */
    
});




    }
});})();

/* comments below */
  
             document.addEventListener("keyup", function(event) { if (event.key === '5' && Toggle === true) { 
           javascript:(function(){document.write("<!-- begin wwww.htmlcommentbox.com -->\n");
document.write(
  ' <div id="HCB_comment_box"><a href="http://www.htmlcommentbox.com">Widget</a> is loading comments...</div>\n'
);
document.write(
  ' <link rel="stylesheet" type="text/css" href="https://www.htmlcommentbox.com/static/skins/bootstrap/twitter-bootstrap.css?v=0" />\n'
);
document.write(
  ' <script type="text/javascript" id="hcb"> /*<!--*/ if(!window.hcb_user){hcb_user={};} (function(){var s=document.createElement("script"), l=hcb_user.PAGE || (""+window.location).replace(/\'/g,"%27"), h="https://www.htmlcommentbox.com";s.setAttribute("type","text/javascript");s.setAttribute("src", h+"/jread?page="+encodeURIComponent(l).replace("+","%2B")+"&mod=%241%24wq1rdBcg%241xDnKLhKj17Zz.k0PK0WR1"+"&opts=16862&num=10&ts=1621004456391");if (typeof s!="undefined") document.getElementsByTagName("head")[0].appendChild(s);})(); /*-->*/ </script>\n'
);
document.write("<!-- end www.htmlcommentbox.com -->");})();
            } });
            
            /*end of HTML comment box */ 
            
           
           
           
           
           
            /* Whats new window below */
            
             document.addEventListener("keyup", function(event) { if (event.key === '6' && Toggle === true) { 
               (function(window) {
  var links = [{
    name: 'Google',
    
  }, {
    name: 'Bing',
    
  }, {
    name: 'DuckDuckGO',
    
  }];
  var props = {
    width: 500,
    height: 300,
    background: '#00FFFF',
    borderThickness: 1,
    headerHeight: 32,
    headerBackground: '#FF32EC',
    headerTitleColor: '#FFF',
    windowTitle: 'Whats new'
  };
  var windowPosition = {
    left: ~~((document.documentElement.clientWidth / 2) - (props.width / 2)),
    top: ~~((document.documentElement.clientHeight / 2) - (props.height / 2)),
  }
  var btnSize = ~~(props.headerHeight * 0.8);
  var popupEl = document.createElement('DIV');
  Object.assign(popupEl.style, {
    position: 'absolute',
    left: windowPosition.left + 'px',
    top: windowPosition.top + 'px',
    zIndex: Number.MAX_SAFE_INTEGER,
    width: props.width + 'px',
    height: props.height + 'px',
    background: props.background,
    border: props.borderThickness + 'px solid black'
  });
  var popupHeader = document.createElement('DIV');
  Object.assign(popupHeader.style, {
    position: 'relative',
    width: (props.width) + 'px',
    height: props.headerHeight + 'px',
    background: props.headerBackground,
    borderBottom: props.borderThickness + 'px solid black'
  });
  var popupHeaderTitle = document.createElement('DIV');
  Object.assign(popupHeaderTitle.style, {
    position: 'relative',
    display: 'inline-block',
    left: 0,
    width: ~~(props.width - btnSize * 2) + 'px',
    lineHeight: props.headerHeight + 'px',
    color: props.headerTitleColor,
    fontSize: ~~(props.headerHeight * 0.667) + 'px',
    marginLeft: ~~(btnSize / 3) + 'px'
  });
  popupHeaderTitle.textContent = props.windowTitle;
  var closeButton = document.createElement('DIV');
  var margin = ~~((props.headerHeight - btnSize) / 2);
  Object.assign(closeButton.style, {
    position: 'relative',
    float: 'right',
    right: margin + 'px',
    top: margin + 'px',
    width: btnSize + 'px',
    height: btnSize + 'px',
    background: '#F00',
    border: props.borderThickness + 'px solid black',
    color: '#FFF',
    lineHeight: btnSize + 'px',
    textAlign: 'center',
    fontSize: btnSize + 'px',
    marginLeft: 'auto',
    marginRight: 0
  });
  var popupBody = document.createElement('DIV');
  Object.assign(popupBody.style, {
    padding: '1em'
  });
  var p = document.createElement('P');
  p.textContent = 'Super Client V2.3';
  popupBody.appendChild(p);
  var listEl = document.createElement('UL');
  links.forEach(link => {
    var itemEl = document.createElement('LI');
    var anchorEl = document.createElement('A');
    anchorEl.setAttribute('href', link.url);
    anchorEl.setAttribute('target', '_blank');
    anchorEl.textContent = link.name;
    itemEl.appendChild(anchorEl);
    listEl.appendChild(itemEl);
  });
  popupBody.appendChild(listEl);
  closeButton.addEventListener('click', destroyWindow, false);
  closeButton.textContent = '×';
  popupHeader.appendChild(popupHeaderTitle);
  popupHeader.appendChild(closeButton);
  popupEl.appendChild(popupHeader);
  popupEl.appendChild(popupBody);
  document.body.appendChild(popupEl);
  draggable(popupHeader);
  function destroyWindow(e) {
    closeButton.removeEventListener('click', destroyWindow, false);
    popupHeader.removeChild(closeButton);
    popupEl.removeChild(popupHeader);
    popupEl.removeChild(popupBody);
    document.body.removeChild(popupEl);
  }
  /* Source: https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/ */
  function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  /* Source: https://gist.github.com/remarkablemark/5002d27442600510d454a5aeba370579 */
  function draggable(el) {
    var initialOffset = offset(el.parentElement);
    var isMouseDown = false;
    var currPos = { x : 0, y : 0 };
    var elPos = { x : initialOffset.left, y : initialOffset.top };
    el.parentElement.addEventListener('mousedown', onMouseDown);
    function onMouseDown(event) {
      isMouseDown = true;
      currPos.x = event.clientX;
      currPos.y = event.clientY;
      el.parentElement.style.cursor = 'move';
    }
    el.parentElement.addEventListener('mouseup', onMouseUp);
    function onMouseUp(event) {
      isMouseDown = false;
      elPos.x = parseInt(el.parentElement.style.left) || 0;
      elPos.y = parseInt(el.parentElement.style.top) || 0;
      el.parentElement.style.cursor = 'auto';
    }
    document.addEventListener('mousemove', onMouseMove);
    function onMouseMove(event) {
      if (!isMouseDown) return;
      var delta = { x : event.clientX - currPos.x, y: event.clientY - currPos.y };
      var pos = { x : elPos.x + delta.x, y : elPos.y + delta.y };
      if (pos.x < 0) {
        pos.x = 0;
      } else if (pos.x + el.parentElement.offsetWidth > document.documentElement.clientWidth) {
        pos.x = document.documentElement.clientWidth - el.parentElement.offsetWidth;
      }
      if (pos.y < 0) {
        pos.y = 0;
      } else if (pos.y + el.parentElement.offsetHeight > document.documentElement.clientHeight) {
        pos.y = document.documentElement.clientHeight - el.parentElement.offsetHeight;
      }
      el.parentElement.style.left = pos.x + 'px';
      el.parentElement.style.top = pos.y + 'px';
    }
  }
})(window);
            } });})();
