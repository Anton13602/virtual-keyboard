(()=>{"use strict";(()=>{class e{constructor(e,t,a){this.el=e,this.className=t,this.content=a}create(){const e=document.createElement(this.el);return this.className&&(e.className=this.className),this.content&&(e.innerHTML=this.content),e}}const t=[[{code:"Backquote",charCode:96,key:"`",keyShift:"~"},{code:"Digit1",charCode:49,key:"1",keyShift:"!"},{code:"Digit2",charCode:50,key:"2",keyShift:"@"},{code:"Digit3",charCode:51,key:"3",keyShift:"#"},{code:"Digit4",charCode:52,key:"4",keyShift:"$"},{code:"Digit5",charCode:53,key:"5",keyShift:"%"},{code:"Digit6",charCode:54,key:"6",keyShift:"^"},{code:"Digit7",charCode:55,key:"7",keyShift:"&"},{code:"Digit8",charCode:56,key:"8",keyShift:"*"},{code:"Digit9",charCode:57,key:"9",keyShift:"("},{code:"Digit0",charCode:48,key:"0",keyShift:")"},{code:"Minus",charCode:45,key:"-",keyShift:"_"},{code:"Equal",charCode:61,key:"=",keyShift:"+"},{code:"Backspace",charCode:8,key:"Backspace",keyShift:"Backspace"},{code:"Tab",charCode:9,key:"Tab",keyShift:"Tab"},{code:"KeyQ",charCode:113,key:"q",keyShift:"Q"},{code:"KeyW",charCode:119,key:"w",keyShift:"W"},{code:"KeyE",charCode:101,key:"e",keyShift:"E"},{code:"KeyR",charCode:114,key:"r",keyShift:"R"},{code:"KeyT",charCode:116,key:"t",keyShift:"T"},{code:"KeyY",charCode:121,key:"y",keyShift:"Y"},{code:"KeyU",charCode:117,key:"u",keyShift:"U"},{code:"KeyI",charCode:105,key:"i",keyShift:"I"},{code:"KeyO",charCode:111,key:"o",keyShift:"O"},{code:"KeyP",charCode:112,key:"p",keyShift:"P"},{code:"BracketLeft",charCode:91,key:"[",keyShift:"{"},{code:"BracketRight",charCode:93,key:"]",keyShift:"}"},{code:"Backslash",charCode:92,key:"\\",keyShift:"|"},{code:"Delete",charCode:46,key:"Del",keyShift:"Del"},{code:"CapsLock",charCode:20,key:"CapsLock",keyShift:"CapsLock"},{code:"KeyA",charCode:97,key:"a",keyShift:"A"},{code:"KeyS",charCode:115,key:"s",keyShift:"S"},{code:"KeyD",charCode:100,key:"d",keyShift:"D"},{code:"KeyF",charCode:102,key:"f",keyShift:"F"},{code:"KeyG",charCode:103,key:"g",keyShift:"G"},{code:"KeyH",charCode:104,key:"h",keyShift:"H"},{code:"KeyJ",charCode:106,key:"j",keyShift:"J"},{code:"KeyK",charCode:107,key:"k",keyShift:"K"},{code:"KeyL",charCode:108,key:"l",keyShift:"L"},{code:"Semicolon",charCode:59,key:";",keyShift:":"},{code:"Quote",charCode:39,key:"'",keyShift:'"'},{code:"Enter",charCode:13,key:"Enter",keyShift:"Enter"},{code:"ShiftLeft",charCode:16,key:"Shift",keyShift:"Shift"},{code:"KeyZ",charCode:122,key:"z",keyShift:"Z"},{code:"KeyX",charCode:120,key:"x",keyShift:"X"},{code:"KeyC",charCode:99,key:"c",keyShift:"C"},{code:"KeyV",charCode:118,key:"v",keyShift:"V"},{code:"KeyB",charCode:98,key:"b",keyShift:"B"},{code:"KeyN",charCode:110,key:"n",keyShift:"N"},{code:"KeyM",charCode:109,key:"m",keyShift:"M"},{code:"Comma",charCode:44,key:",",keyShift:"<"},{code:"Period",charCode:46,key:".",keyShift:">"},{code:"Slash",charCode:47,key:"/",keyShift:"?"},{code:"ArrowUp",charCode:38,key:"↑",keyShift:"↑"},{code:"ShiftRight",charCode:16,key:"Shift",keyShift:"Shift"},{code:"ControlLeft",charCode:17,key:"Ctrl",keyShift:"Ctrl"},{code:"MetaLeft",charCode:91,key:"⊞",keyShift:"⊞"},{code:"AltLeft",charCode:18,key:"Alt",keyShift:"Alt"},{code:"Space",charCode:32,key:" ",keyShift:" "},{code:"AltRight",charCode:18,key:"Alt",keyShift:"Alt"},{code:"ControlRight",charCode:17,key:"Ctrl",keyShift:"Ctrl"},{code:"ArrowLeft",charCode:37,key:"←",keyShift:"←"},{code:"ArrowDown",charCode:40,key:"↓",keyShift:"↓"},{code:"ArrowRight",charCode:39,key:"→",keyShift:"→"}],[{code:"Backquote",charCode:192,key:"ё",keyShift:"Ё"},{code:"Digit1",charCode:49,key:"1",keyShift:"!"},{code:"Digit2",charCode:50,key:"2",keyShift:'"'},{code:"Digit3",charCode:51,key:"3",keyShift:"№"},{code:"Digit4",charCode:52,key:"4",keyShift:";"},{code:"Digit5",charCode:53,key:"5",keyShift:"%"},{code:"Digit6",charCode:54,key:"6",keyShift:":"},{code:"Digit7",charCode:55,key:"7",keyShift:"?"},{code:"Digit8",charCode:56,key:"8",keyShift:"*"},{code:"Digit9",charCode:57,key:"9",keyShift:"("},{code:"Digit0",charCode:48,key:"0",keyShift:")"},{code:"Minus",charCode:189,key:"-",keyShift:"_"},{code:"Equal",charCode:187,key:"=",keyShift:"+"},{code:"Backspace",charCode:8,key:"Backspace",keyShift:"Backspace"},{code:"Tab",charCode:9,key:"Tab",keyShift:"Tab"},{code:"KeyQ",charCode:81,key:"й",keyShift:"Й"},{code:"KeyW",charCode:87,key:"ц",keyShift:"Ц"},{code:"KeyE",charCode:69,key:"у",keyShift:"У"},{code:"KeyR",charCode:82,key:"к",keyShift:"К"},{code:"KeyT",charCode:84,key:"е",keyShift:"Е"},{code:"KeyY",charCode:89,key:"н",keyShift:"Н"},{code:"KeyU",charCode:85,key:"г",keyShift:"Г"},{code:"KeyI",charCode:73,key:"ш",keyShift:"Ш"},{code:"KeyO",charCode:79,key:"щ",keyShift:"Щ"},{code:"KeyP",charCode:80,key:"з",keyShift:"З"},{code:"BracketLeft",charCode:219,key:"х",keyShift:"Х"},{code:"BracketRight",charCode:221,key:"ъ",keyShift:"Ъ"},{code:"Backslash",charCode:220,key:"\\",keyShift:"/"},{code:"Delete",charCode:46,key:"Del",keyShift:"Del"},{code:"CapsLock",charCode:20,key:"CapsLock",keyShift:"CapsLock"},{code:"KeyA",charCode:65,key:"ф",keyShift:"Ф"},{code:"KeyS",charCode:83,key:"ы",keyShift:"Ы"},{code:"KeyD",charCode:68,key:"в",keyShift:"В"},{code:"KeyF",charCode:70,key:"а",keyShift:"А"},{code:"KeyG",charCode:71,key:"п",keyShift:"П"},{code:"KeyH",charCode:72,key:"р",keyShift:"Р"},{code:"KeyJ",charCode:74,key:"о",keyShift:"О"},{code:"KeyK",charCode:75,key:"л",keyShift:"Л"},{code:"KeyL",charCode:76,key:"д",keyShift:"Д"},{code:"Semicolon",charCode:186,key:"ж",keyShift:"Ж"},{code:"Quote",charCode:222,key:"э",keyShift:"Э"},{code:"Enter",charCode:13,key:"Enter",keyShift:"Enter"},{code:"ShiftLeft",charCode:16,key:"Shift",keyShift:"Shift"},{code:"KeyZ",charCode:90,key:"я",keyShift:"Я"},{code:"KeyX",charCode:88,key:"ч",keyShift:"Ч"},{code:"KeyC",charCode:67,key:"с",keyShift:"С"},{code:"KeyV",charCode:86,key:"м",keyShift:"М"},{code:"KeyB",charCode:66,key:"и",keyShift:"И"},{code:"KeyN",charCode:78,key:"т",keyShift:"Т"},{code:"KeyM",charCode:77,key:"ь",keyShift:"Ь"},{code:"Comma",charCode:188,key:"б",keyShift:"Б"},{code:"Period",charCode:190,key:"ю",keyShift:"Ю"},{code:"Slash",charCode:191,key:".",keyShift:","},{code:"ArrowUp",charCode:38,key:"↑",keyShift:"↑"},{code:"ShiftRight",charCode:16,key:"Shift",keyShift:"Shift"},{code:"ControlLeft",charCode:17,key:"Ctrl",keyShift:"Ctrl"},{code:"MetaLeft",charCode:91,key:"⊞",keyShift:"⊞"},{code:"AltLeft",charCode:18,key:"Alt",keyShift:"Alt"},{code:"Space",charCode:32,key:" ",keyShift:" "},{code:"AltRight",charCode:18,key:"Alt",keyShift:"Alt"},{code:"ControlRight",charCode:17,key:"Ctrl",keyShift:"Ctrl"},{code:"ArrowLeft",charCode:37,key:"←",keyShift:"←"},{code:"ArrowDown",charCode:40,key:"↓",keyShift:"↓"},{code:"ArrowRight",charCode:39,key:"→",keyShift:"→"}]];class a{constructor(e){this.arrLanguages=e,this.currentLang=localStorage.getItem("lang")||0,this.flagCaps=!1,this.flagShif=!1,this.flagControlLef=!1,this.flagAltLeft=!1}init(){const t=new e("div","wrapper").create();document.body.append(t);const a=new e("h1","title","RSS Virtual Keyboard").create();this.textarea=new e("textarea","textarea").create(),this.textarea.rows=10,this.textarea.cols=80,this.textarea.focus();const c=this.createKeyboard(),i=new e("p","about","The keyboard was created in the Windows operating system.").create(),o=new e("p","languageChange","To switch the language, the combination is: left ctrl + alt.").create();t.append(a,this.textarea,c,i,o),this.keys=document.querySelectorAll(".key"),c.addEventListener("mousedown",(e=>{e.preventDefault(),e.target.closest(".key")&&(e.target.classList.add("active"),this.characterOutput(e.target.innerHTML))})),c.addEventListener("mouseup",(e=>{e.target.closest(".key")&&this.removeMouseListener(e.target)})),c.onmouseout=e=>{e.target.closest(".key")&&this.removeMouseListener(e.target)},document.addEventListener("keydown",(e=>{this.addListener(e)})),document.addEventListener("keyup",(e=>{this.removeListener(e)}))}createKeyboard(){const t=this.currentLang,a=new e("div","keyboard").create(),c=new e("div","row").create(),i=new e("div","row").create(),o=new e("div","row").create(),h=new e("div","row").create(),r=new e("div","row").create();return this.arrLanguages[t].forEach(((t,a)=>{const y=new e("div",`key ${t.code.toLowerCase()}`,t.key).create();switch(y.setAttribute("keyname",t.code),!0){case a<14:c.append(y);break;case a<=28:i.append(y);break;case a<=41:o.append(y);break;case a<=54:h.append(y);break;default:r.append(y)}})),a.append(c,i,o,h,r),a}addListener(e){e.preventDefault(),this.keys.forEach((t=>{t.getAttribute("keyname")===e.code&&(t.classList.add("active"),this.characterOutput(t.innerHTML))})),"ControlLeft"===e.code&&(this.flagControlLef=!0),"AltLeft"===e.code&&(this.flagAltLeft=!0),"ShiftLeft"===e.code&&(this.flagShif=!0),this.flagAltLeft&&this.flagControlLef&&this.switchLanguage(),this.flagShif&&!this.flagCaps?this.keyShift("shift"):this.flagShif&&this.flagCaps&&this.keyShift("capsShift")}removeListener(e){e.preventDefault(),this.keys.forEach((t=>{t.getAttribute("keyname")===e.code&&t.classList.remove("active")})),"ShiftLeft"!==e.code&&"ShiftRight"!==e.code||(this.flagCaps?this.keyShift(""):this.keyShift("removeShift")),"ControlLeft"===e.code&&(this.flagControlLef=!1),"AltLeft"===e.code&&(this.flagAltLeft=!1),"ShiftLeft"===e.code&&(this.flagShif=!1)}removeMouseListener(e){e.classList.remove("active"),this.flagCaps?this.keyShift():"ShiftLeft"!==e.getAttribute("keyname")&&"ShiftRight"!==e.getAttribute("keyname")||this.keyShift("removeShift")}keyShift(e){const t=this.currentLang;this.keys.forEach(((a,c)=>{if(!(a.getAttribute("keyname").includes("CapsLock")||a.getAttribute("keyname").includes("Tab")||a.getAttribute("keyname").includes("Shif")||a.getAttribute("keyname").includes("Control")||a.getAttribute("keyname").includes("Alt")||a.getAttribute("keyname").includes("Backspace")||a.getAttribute("keyname").includes("Delete")||a.getAttribute("keyname").includes("Enter"))){const i=a;if(i.innerHTML="","shift"===e)i.innerHTML=this.arrLanguages[t][c].keyShift;else if("removeShift"===e)i.innerHTML=this.arrLanguages[t][c].key;else if("capsShift"===e)switch(!0){case 0===c:i.innerHTML=this.arrLanguages[t][c].keyShift.toLowerCase();break;case c<14:i.innerHTML=this.arrLanguages[t][c].keyShift;break;default:i.innerHTML=this.arrLanguages[t][c].keyShift.toLowerCase()}else switch(!0){case 0===c:i.innerHTML=this.arrLanguages[t][c].key.toUpperCase();break;case c<14:i.innerHTML=this.arrLanguages[t][c].key;break;default:i.innerHTML=this.arrLanguages[t][c].key.toUpperCase()}}}))}capsLock(){const e=this.currentLang,t=[];this.caps=document.querySelector(".capslock"),this.caps.classList.toggle("active__caps"),this.flagCaps=!!this.caps.className.includes("active__caps"),this.keys.forEach(((a,c)=>{if(a.getAttribute("keyname").includes("Key")||a.getAttribute("keyname").includes("Bracket")||a.getAttribute("keyname").includes("Semicolon")||a.getAttribute("keyname").includes("Quote")||a.getAttribute("keyname").includes("Period")||a.getAttribute("keyname").includes("Backquote")||a.getAttribute("keyname").includes("Comma")){t.push(c);const i=a;i.innerHTML="",this.flagCaps?i.innerHTML=this.arrLanguages[e][c].key.toUpperCase():i.innerHTML=this.arrLanguages[e][c].key}}))}switchLanguage(){this.currentLang=0===this.currentLang?1:0,localStorage.setItem("lang",this.currentLang),this.flagCaps?(this.caps.classList.remove("active__caps"),this.capsLock()):this.keyShift("removeShift")}characterOutput(e){this.textarea.focus();const t=e=>this.textarea.setRangeText(e,this.textarea.selectionStart,this.textarea.selectionEnd,"end"),a=e=>{const a=this.textarea.value;"Backspace"===e?this.textarea.selectionStart>=1?(this.textarea.selectionStart-=1,t("")):t(""):"Del"===e&&(this.textarea.selectionStart!==a.length?(this.textarea.selectionEnd+=1,t("")):t(""))};if("Enter"===e)t("\n");else if("Tab"===e)t("\t");else if("CapsLock"===e)this.capsLock();else if("Shift"===e){const e=this.flagCaps?"capsShift":"shift";this.keyShift(e)}else"Alt"===e||"Ctrl"===e||"⊞"===e?t(""):"Backspace"===e?a("Backspace"):"Del"===e?a("Del"):t("&lt;"===e?"<":"&gt;"===e?">":"&amp;"===e?"&":e)}}window.addEventListener("DOMContentLoaded",(()=>{new a(t).init()}))})()})();