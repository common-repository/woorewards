jQuery(function($){$('.lwsip_button').on('click',function(event){var button=$(event.currentTarget);button.closest(".lwsip-wrapper").find(".lwsip-popup-wrapper").removeClass("hidden")});$('.lwsip-popup-wrapper').on('mouseleave',function(event){$(event.currentTarget).addClass("hidden")});$('.lwsip_icon_choice').on('click',function(event){var selected=$(event.currentTarget);var master=selected.closest(".lwsip_master");var input=master.find(".lws_adminpanel_icon_value");var shownIcon=master.find(".lwsip-show-icon");var newIcon=selected.data('value');shownIcon.removeClass(input.val());master.find('.lwsip-icon-value').removeClass('selected');selected.addClass('selected');shownIcon.addClass(newIcon).addClass("filled");input.val(newIcon).trigger('change')});$('.remove-btn').on('click',function(event){var master=$(event.currentTarget).closest(".lwsip_master");var input=master.find(".lws_adminpanel_icon_value");var shownIcon=master.find(".lwsip-show-icon");master.find('.lwsip-icon-value').removeClass('selected');shownIcon.removeClass(input.val()).removeClass("filled");input.val('').trigger('change')})})