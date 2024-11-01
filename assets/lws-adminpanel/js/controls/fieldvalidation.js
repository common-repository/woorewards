(function($){$.widget("lws.lws_validation",{_create:function(){this.validation='';if(this.element.data('validation')!=undefined&&this.element.data('validation')!=''){this.validation=this.element.data('validation');this.wrapper=$("<span>").css('position','relative').insertBefore(this.element);this.element.detach().appendTo(this.wrapper).css('width','100%');this.valElement=$("<div>").css({'position':'absolute','right':'0px','top':'0px','bottom':'0px','width':'30px','display':'flex','justify-content':'center','align-items':'center'}).insertAfter(this.element);this.validInfo=$("<div>").css({'width':'24px','height':'24px','border-radius':'12px','color':'#fff','display':'flex','justify-content':'center','align-items':'center','font-size':'16px'}).appendTo(this.valElement);var me=this;var timer;var keyData=[];this.element.on('keyup',function(event,data){keyData[0]=event.key;keyData[1]=event.keyCode;sentData=[keyData];timer&&clearTimeout(timer);timer=setTimeout(me._bindD(me._validateField,me,sentData),'500')})}},_bind:function(fn,me){return function(){return fn.apply(me,arguments)}},_bindD:function(fn,me,data){return function(){return fn.apply(me,data)}},_validateField:function(){result='';switch(this.validation){case 'email':result=this._validateEmail(this.element.val());break;case 'numeric':result=this._validateNumeric(this.element.val());break;case 'password':result=this._validatePassword(this.element.val());break;case 'alpha':result=this._validateAlpha(this.element.val());break;default:break}
this.validInfo.removeClass().css('background-color','transparent');if(result===!1||result=='weak'){this.validInfo.addClass('lws-icon-cross').css('background-color','#cc1d25')}
if(result===!0||result=='strong'){this.validInfo.addClass('lws-icon-checkmark').css('background-color','#559977')}
if(result==='medium'){this.validInfo.addClass('lws-icon-checkmark').css('background-color','#f79d00')}},_validateEmail:function(email){const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(String(email).toLowerCase())},_validateAlpha:function(alpha){const re=/^[a-zA-Z]+$/;return re.test(String(alpha))},_validatePassword:function(password){const strongPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;const mediumPassword=/^((?=.*[a-z])(=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/;if(strongPassword.test(password)){result="strong"}else if(mediumPassword.test(password)){result="medium"}else{result="weak"}
return result},_validateNumeric:function(number){return $.isNumeric(number)}})})(jQuery)
jQuery(function($){$(".lws_validation").lws_validation()})