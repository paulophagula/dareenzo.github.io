(()=>{if("contact"===window.location.href.split("/").filter(function(e){return e.length}).pop()){let n={form_url:"https://formspree.io/pphagula+dareenzo.github.io@gmail.com"},l={"error-email-label":"Invalid Email","error-message-label":"Invalid message","error-captcha-label":"Invalid Captcha","general-error-title":"An error happened while submitting your form. Please try again.","success-label":"Message sent. Thanks!"};const i=Math.round(10*Math.random()+1),c=Math.round(10*Math.random()+1),e=document.getElementById("contact-form"),u=document.getElementById("contact-form-msg"),m=document.getElementById("human-check"),d=document.getElementById("user_email"),h=document.getElementById("user_message");function o(e){if(e){var r,a,t=l,s=["alert","alert-danger"];switch(e){case"error_email":a=t["error-email-label"],r=d;break;case"error_message":a=t["error-message-label"],r=d;break;case"error_captcha":a=t["error-captcha-label"],r=m;break;case"success":a=t["success-label"],s=["alert","alert-success"];break;default:a=t["general-error-title"]}u.innerHTML=a,u.classList.remove("alert"),u.classList.remove("alert-danger"),u.classList.remove("alert-success"),s.forEach(function(e,r){u.classList.add(e)}),u.classList.remove("hidden"),r&&r.focus()}else u.classList.add("hidden"),u.innerHTML=""}m.setAttribute("placeholder",i+"+"+c+"=?"),e.addEventListener("submit",function(e){var r=this;if(e.preventDefault(),o(),(()=>{if(d.value&&/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(d.value))if(h.value){if(m.value==i+c)return 1;o("error_captcha")}else o("error_message");else o("error_email")})()){var a,t={user_email:d.value,user_message:h.value,_subject:"New submission from dareenzo.github.io!",_gotcha:null},s=new FormData;for(a in t)s.append(a,t[a]);(e=((e,r)=>{var a=new XMLHttpRequest;return"withCredentials"in a?a.open(e,r,!0):"undefined"!=typeof XDomainRequest?(a=new XDomainRequest).open(e,r):a=null,a})("POST",n.form_url))&&(e.addEventListener("load",function(e){o("success"),r.reset(),i=parseInt(10*Math.random(0,1)+1),c=parseInt(10*Math.random(0,1)+1),m.setAttribute("placeholder",i+"+"+c+"=?")}),e.addEventListener("error",function(e){o("error")}),e.send(s))}})}})();