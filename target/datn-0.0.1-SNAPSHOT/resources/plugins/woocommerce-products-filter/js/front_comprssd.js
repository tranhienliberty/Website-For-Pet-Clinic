/* https://jscompress.com/ 2.2.5.6 */
"use strict";
function woof_init_checkboxes() {
    "none" == icheck_skin ? jQuery(".woof_checkbox_term").on("change", function() {
        jQuery(this).is(":checked") ? (jQuery(this).attr("checked", !0),
        woof_checkbox_process_data(this, !0)) : (jQuery(this).attr("checked", !1),
        woof_checkbox_process_data(this, !1))
    }) : (jQuery(".woof_checkbox_term").iCheck("destroy"),
    jQuery(".woof_checkbox_term").iCheck({
        checkboxClass: "icheckbox_" + icheck_skin.skin + "-" + icheck_skin.color
    }),
    jQuery(".woof_checkbox_term").off("ifChecked"),
    jQuery(".woof_checkbox_term").on("ifChecked", function() {
        jQuery(this).attr("checked", !0),
        jQuery(".woof_select_radio_check input").attr("disabled", "disabled"),
        woof_checkbox_process_data(this, !0)
    }),
    jQuery(".woof_checkbox_term").off("ifUnchecked"),
    jQuery(".woof_checkbox_term").on("ifUnchecked", function() {
        jQuery(this).attr("checked", !1),
        woof_checkbox_process_data(this, !1)
    }),
    jQuery(".woof_checkbox_label").off(),
    jQuery("label.woof_checkbox_label").on("click", function() {
        return !jQuery(this).prev().find(".woof_checkbox_term").is(":disabled") && void (jQuery(this).prev().find(".woof_checkbox_term").is(":checked") ? (jQuery(this).prev().find(".woof_checkbox_term").trigger("ifUnchecked"),
        jQuery(this).prev().removeClass("checked")) : (jQuery(this).prev().find(".woof_checkbox_term").trigger("ifChecked"),
        jQuery(this).prev().addClass("checked")))
    }))
}
function woof_checkbox_process_data(a, b) {
    var c = jQuery(a).data("tax")
      , d = jQuery(a).attr("name")
      , e = jQuery(a).data("term-id");
    woof_checkbox_direct_search(e, d, c, b)
}
function woof_checkbox_direct_search(a, b, c, d) {
    var e = ""
      , f = !0;
    if (d)
        woof_current_values[c] = c in woof_current_values ? woof_current_values[c] + "," + b : b,
        f = !0;
    else {
        e = woof_current_values[c],
        e = e.split(",");
        var g = [];
        jQuery.each(e, function(a, c) {
            c != b && g.push(c)
        }),
        e = g,
        e.length ? woof_current_values[c] = e.join(",") : delete woof_current_values[c],
        f = !1
    }
    jQuery(".woof_checkbox_term_" + a).attr("checked", f),
    woof_ajax_page_num = 1,
    woof_autosubmit && woof_submit_link(woof_get_submit_link())
}
function woof_init_mselects() {
    try {
        jQuery("select.woof_mselect").chosen()
    } catch (a) {}
    jQuery(".woof_mselect").change(function() {
        var a = jQuery(this).val()
          , b = jQuery(this).attr("name");
        if (is_woof_use_chosen) {
            var c = jQuery(this).chosen().val();
            jQuery(".woof_mselect[name=" + b + "] option:selected").removeAttr("selected"),
            jQuery(".woof_mselect[name=" + b + "] option").each(function() {
                var a = jQuery(this).val();
                -1 !== jQuery.inArray(a, c) && jQuery(this).prop("selected", !0)
            })
        }
        return woof_mselect_direct_search(b, a),
        !0
    });
    var a = jQuery(".woof_hide_empty_container_ms");
    jQuery.each(a, function(a, b) {
        var c = jQuery(b).val();
        c && jQuery(c).hide()
    })
}
function woof_mselect_direct_search(a) {
    var b = [];
    jQuery(".woof_mselect[name=" + a + "] option:selected").each(function() {
        b.push(jQuery(this).val())
    }),
    b = b.filter(function(a, c) {
        return b.indexOf(a) == c
    }),
    b = b.join(","),
    b.length ? woof_current_values[a] = b : delete woof_current_values[a],
    woof_ajax_page_num = 1,
    woof_autosubmit && woof_submit_link(woof_get_submit_link())
}
function woof_init_radios() {
    "none" == icheck_skin ? jQuery(".woof_radio_term").on("change", function() {
        jQuery(this).attr("checked", !0);
        var a = jQuery(this).data("slug")
          , b = jQuery(this).attr("name")
          , c = jQuery(this).data("term-id");
        jQuery(this).parents(".woof_list").find(".woof_radio_term_reset").removeClass("woof_radio_term_reset_visible"),
        jQuery(this).parents(".woof_list").find(".woof_radio_term_reset").hide(),
        jQuery(this).parents("li").eq(0).find(".woof_radio_term_reset").eq(0).addClass("woof_radio_term_reset_visible"),
        woof_radio_direct_search(c, b, a)
    }) : (jQuery(".woof_radio_term").iCheck("destroy"),
    jQuery(".woof_radio_term").iCheck({
        radioClass: "iradio_" + icheck_skin.skin + "-" + icheck_skin.color
    }),
    jQuery(".woof_radio_term").off("ifChecked"),
    jQuery(".woof_radio_term").on("ifChecked", function() {
        jQuery(this).attr("checked", !0),
        jQuery(this).parents(".woof_list").find(".woof_radio_term_reset").removeClass("woof_radio_term_reset_visible"),
        jQuery(this).parents(".woof_list").find(".woof_radio_term_reset").hide(),
        jQuery(this).parents("li").eq(0).find(".woof_radio_term_reset").eq(0).addClass("woof_radio_term_reset_visible");
        var a = jQuery(this).data("slug")
          , b = jQuery(this).attr("name")
          , c = jQuery(this).data("term-id");
        woof_radio_direct_search(c, b, a)
    })),
    jQuery(".woof_radio_term_reset").on("click", function() {
        return woof_radio_direct_search(jQuery(this).data("term-id"), jQuery(this).attr("data-name"), 0),
        jQuery(this).parents(".woof_list").find(".checked").removeClass("checked"),
        jQuery(this).parents(".woof_list").find("input[type=radio]").removeAttr("checked"),
        jQuery(this).removeClass("woof_radio_term_reset_visible"),
        !1
    })
}
function woof_radio_direct_search(a, b, c) {
    jQuery.each(woof_current_values, function(a) {
        if (a == b)
            return void delete woof_current_values[b]
    }),
    0 == c ? (jQuery("a.woof_radio_term_reset_" + a).hide(),
    jQuery("woof_radio_term_" + a).attr("checked", !1),
    jQuery("woof_radio_term_" + a).parent().removeClass("checked"),
    jQuery("woof_radio_term_" + a).parents("ul.woof_list").find("label").css({
        fontWeight: "normal"
    })) : (woof_current_values[b] = c,
    jQuery("a.woof_radio_term_reset_" + a).hide(),
    jQuery("woof_radio_term_" + a).filter(":checked").parents("li").find("a.woof_radio_term_reset").show(),
    jQuery("woof_radio_term_" + a).parents("ul.woof_list").find("label").css({
        fontWeight: "normal"
    }),
    jQuery("woof_radio_term_" + a).filter(":checked").parents("li").find("label.woof_radio_label_" + c).css({
        fontWeight: "bold"
    })),
    woof_ajax_page_num = 1,
    woof_autosubmit && woof_submit_link(woof_get_submit_link())
}
function woof_init_selects() {
    if (is_woof_use_chosen)
        try {
            jQuery("select.woof_select, select.woof_price_filter_dropdown").chosen()
        } catch (a) {}
    jQuery(".woof_select").change(function() {
        var a = jQuery(this).val()
          , b = jQuery(this).attr("name");
        woof_select_direct_search(this, b, a)
    });
    var a = jQuery(".woof_hide_empty_container");
    jQuery.each(a, function(a, b) {
        var c = jQuery(b).val();
        c && jQuery(c).hide()
    })
}
function woof_select_direct_search(a, b, c) {
    jQuery.each(woof_current_values, function(a) {
        if (a == b)
            return void delete woof_current_values[b]
    }),
    0 != c && (woof_current_values[b] = c),
    woof_ajax_page_num = 1,
    (woof_autosubmit || 0 == jQuery(a).within(".woof").length) && woof_submit_link(woof_get_submit_link())
}
var woof_redirect = ""
  , woof_reset_btn_action = !1;
if (jQuery(function() {
    try {
        woof_current_values = JSON.parse(woof_current_values)
    } catch (a) {
        woof_current_values = null
    }
    (null == woof_current_values || 0 == woof_current_values.length) && (woof_current_values = {})
}),
"undefined" == typeof woof_lang_custom)
    var woof_lang_custom = {};
"undefined" != typeof woof_ext_filter_titles && (woof_lang_custom = Object.assign({}, woof_lang_custom, woof_ext_filter_titles)),
jQuery(function() {
    jQuery("body").append("<div id=\"woof_html_buffer\" class=\"woof_info_popup\" style=\"display: none;\"></div>"),
    jQuery.extend(jQuery.fn, {
        within: function(a) {
            return this.filter(function() {
                return jQuery(this).closest(a).length
            })
        }
    }),
    0 < jQuery("#woof_results_by_ajax").length && (woof_is_ajax = 1),
    woof_autosubmit = parseInt(jQuery(".woof").eq(0).data("autosubmit"), 10),
    woof_ajax_redraw = parseInt(jQuery(".woof").eq(0).data("ajax-redraw"), 10),
    woof_ext_init_functions = JSON.parse(woof_ext_init_functions),
    woof_init_native_woo_price_filter(),
    jQuery("body").on("price_slider_change", function() {
        if (woof_autosubmit && !woof_show_price_search_button && 3 > jQuery(".price_slider_wrapper").length)
            jQuery(".woof .widget_price_filter form").trigger("submit");
        else {
            var a = jQuery(this).find(".price_slider_amount #min_price").val()
              , b = jQuery(this).find(".price_slider_amount #max_price").val();
            woof_current_values.min_price = a,
            woof_current_values.max_price = b
        }
    }),
    jQuery("body").on("change", ".woof_price_filter_dropdown", function() {
        var a = jQuery(this).val();
        if (-1 == parseInt(a, 10))
            delete woof_current_values.min_price,
            delete woof_current_values.max_price;
        else {
            var a = a.split("-");
            woof_current_values.min_price = a[0],
            woof_current_values.max_price = a[1]
        }
        (woof_autosubmit || 0 == jQuery(this).within(".woof").length) && woof_submit_link(woof_get_submit_link())
    }),
    woof_recount_text_price_filter(),
    jQuery("body").on("change", ".woof_price_filter_txt", function() {
        var a = parseInt(jQuery(this).parent().find(".woof_price_filter_txt_from").val(), 10)
          , b = parseInt(jQuery(this).parent().find(".woof_price_filter_txt_to").val(), 10);
        b < a || 0 > a ? (delete woof_current_values.min_price,
        delete woof_current_values.max_price) : ("undefined" != typeof woocs_current_currency && (a = Math.ceil(a / parseFloat(woocs_current_currency.rate)),
        b = Math.ceil(b / parseFloat(woocs_current_currency.rate))),
        woof_current_values.min_price = a,
        woof_current_values.max_price = b),
        (woof_autosubmit || 0 == jQuery(this).within(".woof").length) && woof_submit_link(woof_get_submit_link())
    }),
    jQuery("body").on("click", ".woof_open_hidden_li_btn", function() {
        var a = jQuery(this).data("state")
          , b = jQuery(this).data("type");
        return "closed" == a ? (jQuery(this).parents(".woof_list").find(".woof_hidden_term").addClass("woof_hidden_term2"),
        jQuery(this).parents(".woof_list").find(".woof_hidden_term").removeClass("woof_hidden_term"),
        "image" == b ? jQuery(this).find("img").attr("src", jQuery(this).data("opened")) : jQuery(this).html(jQuery(this).data("opened")),
        jQuery(this).data("state", "opened")) : (jQuery(this).parents(".woof_list").find(".woof_hidden_term2").addClass("woof_hidden_term"),
        jQuery(this).parents(".woof_list").find(".woof_hidden_term2").removeClass("woof_hidden_term2"),
        "image" == b ? jQuery(this).find("img").attr("src", jQuery(this).data("closed")) : jQuery(this).text(jQuery(this).data("closed")),
        jQuery(this).data("state", "closed")),
        !1
    }),
    woof_open_hidden_li(),
    jQuery(".widget_rating_filter li.wc-layered-nav-rating a").on("click", function() {
        var a = jQuery(this).parent().hasClass("chosen")
          , b = woof_parse_url(jQuery(this).attr("href"))
          , c = 0;
        if (void 0 !== b.query && -1 !== b.query.indexOf("min_rating")) {
            var d = b.query.split("min_rating=");
            c = parseInt(d[1], 10)
        }
        return jQuery(this).parents("ul").find("li").removeClass("chosen"),
        a ? delete woof_current_values.min_rating : (woof_current_values.min_rating = c,
        jQuery(this).parent().addClass("chosen")),
        woof_submit_link(woof_get_submit_link()),
        !1
    }),
    jQuery("body").on("click", ".woof_start_filtering_btn", function() {
        var a = jQuery(this).parents(".woof").data("shortcode");
        jQuery(this).html(woof_lang_loading),
        jQuery(this).addClass("woof_start_filtering_btn2"),
        jQuery(this).removeClass("woof_start_filtering_btn");
        return jQuery.post(woof_ajaxurl, {
            action: "woof_draw_products",
            page: 1,
            shortcode: "woof_nothing",
            woof_shortcode: a
        }, function(a) {
            a = JSON.parse(a),
            jQuery("div.woof_redraw_zone").replaceWith(jQuery(a.form).find(".woof_redraw_zone")),
            woof_mass_reinit()
        }),
        !1
    });
    var a = window.location.href;
    window.onpopstate = function() {
        try {
            if (Object.keys(woof_current_values).length) {
                var b = a.split("?")
                  , c = "";
                null != b[1] && (c = b[1].split("#"));
                var d = window.location.href
                  , e = d.split("?");
                if (null == e[1])
                    var f = {
                        0: "",
                        1: ""
                    };
                else
                    var f = e[1].split("#");
                return f[0] != c[0] && (woof_show_info_popup(woof_lang_loading),
                window.location.reload()),
                !1
            }
        } catch (a) {
            console.log(a)
        }
    }
    ,
    woof_init_ion_sliders(),
    woof_init_show_auto_form(),
    woof_init_hide_auto_form(),
    woof_remove_empty_elements(),
    woof_init_search_form(),
    woof_init_pagination(),
    woof_init_orderby(),
    woof_init_reset_button(),
    woof_init_beauty_scroll(),
    woof_draw_products_top_panel(),
    woof_shortcode_observer(),
    woof_init_tooltip(),
    woof_init_mobile_filter(),
    woof_is_ajax || woof_redirect_init(),
    woof_init_toggles()
});
function woof_redirect_init() {
    try {
        if (jQuery(".woof").length && void 0 !== jQuery(".woof").val())
            return woof_redirect = jQuery(".woof").eq(0).data("redirect"),
            0 < woof_redirect.length && (woof_shop_page = woof_current_page_link = woof_redirect),
            woof_redirect
    } catch (a) {
        console.log(a)
    }
}
function woof_init_orderby() {
    jQuery("body").on("submit", "form.woocommerce-ordering", function() {
        if (!jQuery("#is_woo_shortcode").length)
            return !1
    }),
    jQuery("body").on("change", "form.woocommerce-ordering select.orderby", function() {
        if (!jQuery("#is_woo_shortcode").length)
            return woof_current_values.orderby = jQuery(this).val(),
            woof_ajax_page_num = 1,
            woof_submit_link(woof_get_submit_link(), 0),
            !1
    })
}
function woof_init_reset_button() {
    jQuery("body").on("click", ".woof_reset_search_form", function() {
        if (woof_ajax_page_num = 1,
        woof_ajax_redraw = 0,
        woof_reset_btn_action = !0,
        woof_is_permalink)
            woof_current_values = {},
            woof_submit_link(woof_get_submit_link().split("page/")[0]);
        else {
            var a = woof_shop_page;
            woof_current_values.hasOwnProperty("page_id") && (a = location.protocol + "//" + location.host + "/?page_id=" + woof_current_values.page_id,
            woof_current_values = {
                page_id: woof_current_values.page_id
            },
            woof_get_submit_link()),
            woof_submit_link(a),
            woof_is_ajax && (history.pushState({}, "", a),
            woof_current_values = woof_current_values.hasOwnProperty("page_id") ? {
                page_id: woof_current_values.page_id
            } : {})
        }
        return !1
    })
}
function woof_init_pagination() {
    1 === woof_is_ajax && jQuery("body").on("click", ".woocommerce-pagination a.page-numbers", function() {
        var a = jQuery(this).attr("href");
        if (woof_ajax_first_done) {
            var b = a.split("paged=");
            woof_ajax_page_num = "undefined" == typeof b[1] ? 1 : parseInt(b[1]);
            var c = a.split("product-page=");
            "undefined" != typeof c[1] && (woof_ajax_page_num = parseInt(c[1]))
        } else {
            var b = a.split("page/");
            woof_ajax_page_num = "undefined" == typeof b[1] ? 1 : parseInt(b[1]);
            var c = a.split("product-page=");
            "undefined" != typeof c[1] && (woof_ajax_page_num = parseInt(c[1]))
        }
        return woof_submit_link(woof_get_submit_link(), 0),
        !1
    })
}
function woof_init_search_form() {
    woof_init_checkboxes(),
    woof_init_mselects(),
    woof_init_radios(),
    woof_price_filter_radio_init(),
    woof_init_selects(),
    null !== woof_ext_init_functions && jQuery.each(woof_ext_init_functions, function(type, func) {
        eval(func + "()")
    }),
    jQuery(".woof_submit_search_form").on("click", function() {
        return woof_ajax_redraw && (woof_ajax_redraw = 0,
        woof_is_ajax = 0),
        woof_submit_link(woof_get_submit_link()),
        !1
    }),
    jQuery("ul.woof_childs_list").parent("li").addClass("woof_childs_list_li"),
    woof_remove_class_widget(),
    woof_checkboxes_slide()
}
var woof_submit_link_locked = !1;
function woof_submit_link(a, b) {
    if (!woof_submit_link_locked) {
        if ("undefined" != typeof WoofTurboMode)
            return void WoofTurboMode.woof_submit_link(a);
        if ("undefined" == typeof b && (b = woof_ajax_redraw),
        woof_submit_link_locked = !0,
        woof_show_info_popup(woof_lang_loading),
        1 === woof_is_ajax && !b) {
            woof_ajax_first_done = !0;
            var c = {
                action: "woof_draw_products",
                link: a,
                page: woof_ajax_page_num,
                shortcode: jQuery("#woof_results_by_ajax").data("shortcode"),
                woof_shortcode: jQuery("div.woof").data("shortcode")
            };
            jQuery.post(woof_ajaxurl, c, function(b) {
                if (b = JSON.parse(b),
                !jQuery(".woof_results_by_ajax_shortcode").length)
                    "undefined" != typeof b.products && jQuery(".woof_shortcode_output").replaceWith(b.products);
                else if ("undefined" != typeof b.products) {
                    jQuery("#woof_results_by_ajax").replaceWith(b.products);
                    var c = jQuery(".woof_found_count");
                    if (jQuery(c).show(),
                    0 < c.length) {
                        var d = jQuery("#woof_results_by_ajax").data("count");
                        "undefined" != typeof d && jQuery(c).text(d)
                    }
                }
                "undefined" != typeof b.additional_fields && jQuery.each(b.additional_fields, function(a, b) {
                    jQuery(a).replaceWith(b)
                }),
                jQuery("div.woof_redraw_zone").replaceWith(jQuery(b.form).find(".woof_redraw_zone")),
                woof_draw_products_top_panel(),
                woof_mass_reinit(),
                woof_submit_link_locked = !1,
                jQuery.each(jQuery("#woof_results_by_ajax"), function(a, b) {
                    0 == a || jQuery(b).removeAttr("id")
                }),
                jQuery(".woof_hide_mobile_filter").trigger("click"),
                woof_infinite(),
                woof_js_after_ajax_done(),
                woof_change_link_addtocart(),
                woof_init_tooltip(),
                document.dispatchEvent(new CustomEvent("woof-ajax-form-redrawing",{
                    detail: {
                        link: a
                    }
                }))
            })
        } else if (b) {
            var c = {
                action: "woof_draw_products",
                link: a,
                page: 1,
                shortcode: "woof_nothing",
                woof_shortcode: jQuery("div.woof").eq(0).data("shortcode")
            };
            jQuery.post(woof_ajaxurl, c, function(b) {
                b = JSON.parse(b),
                jQuery("div.woof_redraw_zone").replaceWith(jQuery(b.form).find(".woof_redraw_zone")),
                woof_mass_reinit(),
                woof_submit_link_locked = !1,
                woof_init_tooltip(),
                document.dispatchEvent(new CustomEvent("woof-ajax-form-redrawing",{
                    detail: {
                        link: a
                    }
                }))
            })
        } else
            window.location = a,
            woof_show_info_popup(woof_lang_loading)
    }
}
function woof_remove_empty_elements() {
    jQuery.each(jQuery(".woof_container select"), function(a, b) {
        var c = jQuery(b).find("option").length;
        0 === c && jQuery(b).parents(".woof_container").remove()
    }),
    jQuery.each(jQuery("ul.woof_list"), function(a, b) {
        var c = jQuery(b).find("li").length;
        0 === c && jQuery(b).parents(".woof_container").remove()
    })
}
function woof_get_submit_link() {
    if (woof_is_ajax && (woof_current_values.page = woof_ajax_page_num),
    0 < Object.keys(woof_current_values).length && jQuery.each(woof_current_values, function(a) {
        a == swoof_search_slug && delete woof_current_values[a],
        "s" == a && delete woof_current_values[a],
        "product" == a && delete woof_current_values[a],
        "really_curr_tax" == a && delete woof_current_values[a]
    }),
    2 === Object.keys(woof_current_values).length && "min_price"in woof_current_values && "max_price"in woof_current_values) {
        woof_current_page_link = woof_current_page_link.replace(new RegExp(/page\/(\d+)\//), "");
        var a = woof_current_page_link + "?min_price=" + woof_current_values.min_price + "&max_price=" + woof_current_values.max_price;
        return woof_is_ajax && history.pushState({}, "", a),
        a
    }
    if (0 === Object.keys(woof_current_values).length)
        return woof_is_ajax && history.pushState({}, "", woof_current_page_link),
        woof_current_page_link;
    0 < Object.keys(woof_really_curr_tax).length && (woof_current_values.really_curr_tax = woof_really_curr_tax.term_id + "-" + woof_really_curr_tax.taxonomy);
    var b = woof_current_page_link + "?" + swoof_search_slug + "=1";
    woof_is_permalink || (0 < woof_redirect.length ? (b = woof_redirect + "?" + swoof_search_slug + "=1",
    woof_current_values.hasOwnProperty("page_id") && delete woof_current_values.page_id) : b = location.protocol + "//" + location.host + "?" + swoof_search_slug + "=1");
    var c = ["path"];
    return 0 < Object.keys(woof_current_values).length && jQuery.each(woof_current_values, function(a, d) {
        "page" == a && woof_is_ajax && (a = "paged"),
        "product-page" == a || "undefined" != typeof d && (typeof d && 0 < d.length || "number" == typeof d) && -1 == jQuery.inArray(a, c) && (b = b + "&" + a + "=" + d)
    }),
    b = b.replace(new RegExp(/page\/(\d+)\//), ""),
    woof_is_ajax && history.pushState({}, "", b),
    b
}
function woof_show_info_popup(a) {
    "default" == woof_overlay_skin ? (jQuery("#woof_html_buffer").text(a),
    jQuery("#woof_html_buffer").fadeTo(200, .9)) : "loading-balls" === woof_overlay_skin || "loading-bars" === woof_overlay_skin || "loading-bubbles" === woof_overlay_skin || "loading-cubes" === woof_overlay_skin || "loading-cylon" === woof_overlay_skin || "loading-spin" === woof_overlay_skin || "loading-spinning-bubbles" === woof_overlay_skin || "loading-spokes" === woof_overlay_skin ? jQuery("body").plainOverlay("show", {
        progress: function() {
            return jQuery("<div id=\"woof_svg_load_container\"><img style=\"height: 100%; width: 100%\" src=\"" + woof_link + "img/loading-master/" + woof_overlay_skin + ".svg\" alt=\"\"></div>")
        }
    }) : jQuery("body").plainOverlay("show", {
        duration: -1
    })
}
function woof_hide_info_popup() {
    "default" == woof_overlay_skin ? window.setTimeout(function() {
        jQuery("#woof_html_buffer").fadeOut(400)
    }, 200) : jQuery("body").plainOverlay("hide")
}
function woof_draw_products_top_panel() {
    woof_is_ajax && jQuery("#woof_results_by_ajax").prev(".woof_products_top_panel").remove();
    var a = jQuery(".woof_products_top_panel");
    if (a.html(""),
    0 < Object.keys(woof_current_values).length) {
        a.show(),
        a.html("<ul></ul>"),
        a.find("ul").attr("class", "woof_products_top_panel_ul");
        var b = !1;
        jQuery.each(woof_current_values, function(c, d) {
            -1 == jQuery.inArray(c, woof_accept_array) && -1 == jQuery.inArray(c.replace("rev_", ""), woof_accept_array) || ("min_price" == c || "max_price" == c) && b || (("min_price" == c || "max_price" == c) && !b && (b = !0,
            c = "price",
            d = woof_lang_pricerange),
            d = d.toString().trim(),
            d.search(",") && (d = d.split(",")),
            jQuery.each(d, function(b, d) {
                if ("page" != c && "post_type" != c) {
                    var e = d;
                    if ("orderby" == c)
                        e = void 0 === woof_lang[d] ? woof_lang.orderby + ": " + d : woof_lang.orderby + ": " + woof_lang[d];
                    else if ("perpage" == c)
                        e = woof_lang.perpage;
                    else if ("price" == c)
                        e = woof_lang.pricerange;
                    else {
                        var f = !1;
                        if (0 < Object.keys(woof_lang_custom).length && jQuery.each(woof_lang_custom, function(a, b) {
                            a == c && (f = !0,
                            e = b,
                            "woof_sku" == c && (e += " " + d))
                        }),
                        !f) {
                            try {
                                e = jQuery("input[data-anchor='woof_n_" + c + "_" + d + "']").val()
                            } catch (a) {
                                console.log(a)
                            }
                            "undefined" == typeof e && (e = d)
                        }
                    }
                    if ("undefined" != typeof woof_filter_titles[c]) {
                        var g = a.find("ul.woof_products_top_panel_ul li ul[data-container=" + c + "]");
                        g.length ? g.append(jQuery("<li>").append(jQuery("<a>").attr("href", "").attr("data-tax", c).attr("data-slug", d).append(jQuery("<span>").attr("class", "woof_remove_ppi").append(e)))) : a.find("ul.woof_products_top_panel_ul").append(jQuery("<li>").append(jQuery("<ul>").attr("data-container", c).append(jQuery("<li>").text(woof_filter_titles[c] + ":")).append(jQuery("<li>").append(jQuery("<a>").attr("href", "").attr("data-tax", c).attr("data-slug", d).append(jQuery("<span>").attr("class", "woof_remove_ppi").append(e))))))
                    } else
                        a.find("ul.woof_products_top_panel_ul").append(jQuery("<li>").append(jQuery("<a>").attr("href", "").attr("data-tax", c).attr("data-slug", d).append(jQuery("<span>").attr("class", "woof_remove_ppi").append(e))))
                }
            }))
        })
    }
    0 != jQuery(a).find("li").length && jQuery(".woof_products_top_panel").length ? a.find("ul.woof_products_top_panel_ul").prepend(jQuery("<li>").append(jQuery("<button>").attr("class", "woof_reset_button_2").append(woof_lang.clear_all))) : a.hide(),
    jQuery(".woof_reset_button_2").on("click", function() {
        if (woof_ajax_page_num = 1,
        woof_ajax_redraw = 0,
        woof_reset_btn_action = !0,
        woof_is_permalink)
            woof_current_values = {},
            woof_submit_link(woof_get_submit_link().split("page/")[0]);
        else {
            var a = woof_shop_page;
            woof_current_values.hasOwnProperty("page_id") && (a = location.protocol + "//" + location.host + "/?page_id=" + woof_current_values.page_id,
            woof_current_values = {
                page_id: woof_current_values.page_id
            },
            woof_get_submit_link()),
            woof_submit_link(a),
            woof_is_ajax && (history.pushState({}, "", a),
            woof_current_values = woof_current_values.hasOwnProperty("page_id") ? {
                page_id: woof_current_values.page_id
            } : {})
        }
        return !1
    }),
    jQuery(".woof_remove_ppi").parent().on("click", function() {
        event.preventDefault();
        var a = jQuery(this).data("tax")
          , b = jQuery(this).data("slug");
        if ("price" != a) {
            var c = woof_current_values[a];
            c = c.split(",");
            var d = [];
            jQuery.each(c, function(a, c) {
                c != b && d.push(c)
            }),
            c = d,
            c.length ? woof_current_values[a] = c.join(",") : delete woof_current_values[a]
        } else
            delete woof_current_values.min_price,
            delete woof_current_values.max_price;
        return woof_ajax_page_num = 1,
        woof_reset_btn_action = !0,
        woof_submit_link(woof_get_submit_link()),
        jQuery(".woof_products_top_panel").find("[data-tax='" + a + "'][href='" + b + "']").hide(333),
        !1
    })
}
function woof_shortcode_observer() {
    var a = !0;
    (jQuery(".woof_shortcode_output").length || jQuery(".woocommerce .products").length && !jQuery(".single-product").length) && (a = !1),
    jQuery(".woocommerce .woocommerce-info").length && (a = !1),
    "undefined" != typeof woof_not_redirect && 1 == woof_not_redirect && (a = !1),
    jQuery(".woot-data-table").length && (a = !1),
    a || (woof_current_page_link = location.protocol + "//" + location.host + location.pathname),
    jQuery("#woof_results_by_ajax").length && (woof_is_ajax = 1)
}
function woof_init_beauty_scroll() {
    if (woof_use_beauty_scroll)
        try {
            jQuery(".woof_section_scrolled, .woof_sid_auto_shortcode .woof_container_radio .woof_block_html_items, .woof_sid_auto_shortcode .woof_container_checkbox .woof_block_html_items, .woof_sid_auto_shortcode .woof_container_label .woof_block_html_items").addClass("woof_use_beauty_scroll")
        } catch (a) {
            console.log(a)
        }
}
function woof_remove_class_widget() {
    jQuery(".woof_container_inner").find(".widget").removeClass("widget")
}
function woof_init_show_auto_form() {
    jQuery(".woof_show_auto_form").off("click"),
    jQuery(".woof_show_auto_form.woof_btn").length && jQuery(".woof_btn_default").remove(),
    jQuery(".woof_show_auto_form").on("click", function() {
        var a = this;
        return jQuery(a).addClass("woof_hide_auto_form").removeClass("woof_show_auto_form"),
        jQuery(".woof_auto_show").show().animate({
            height: jQuery(".woof_auto_show_indent").height() + 20 + "px",
            opacity: 1
        }, 377, function() {
            woof_init_hide_auto_form(),
            jQuery(".woof_auto_show").removeClass("woof_overflow_hidden"),
            jQuery(".woof_auto_show_indent").removeClass("woof_overflow_hidden"),
            jQuery(".woof_auto_show").height("auto")
        }),
        !1
    })
}
function woof_init_hide_auto_form() {
    jQuery(".woof_hide_auto_form").off("click"),
    jQuery(".woof_hide_auto_form").on("click", function() {
        var a = this;
        return jQuery(a).addClass("woof_show_auto_form").removeClass("woof_hide_auto_form"),
        jQuery(".woof_auto_show").show().animate({
            height: "1px",
            opacity: 0
        }, 377, function() {
            jQuery(".woof_auto_show").addClass("woof_overflow_hidden"),
            jQuery(".woof_auto_show_indent").addClass("woof_overflow_hidden"),
            woof_init_show_auto_form()
        }),
        !1
    })
}
function woof_checkboxes_slide() {
    if (!0 == woof_checkboxes_slide_flag) {
        var a = jQuery("ul.woof_childs_list");
        a.length && (jQuery.each(a, function(a, b) {
            if (!jQuery(b).parents(".woof_no_close_childs").length) {
                var c = "woof_is_closed";
                if (woof_supports_html5_storage()) {
                    var d = localStorage.getItem(jQuery(b).closest("li").attr("class"));
                    if (d && "woof_is_opened" == d) {
                        var c = "woof_is_opened";
                        jQuery(b).show()
                    }
                    jQuery(b).parent("li").children("label").after("<a href=\"javascript:void(0);\" class=\"woof_childs_list_opener\" ><span class=\"" + c + "\"></span></a>")
                } else
                    jQuery(b).find("input[type=checkbox],input[type=radio]").is(":checked") && (jQuery(b).show(),
                    c = "woof_is_opened"),
                    jQuery(b).parent("li").children("label").after("<a href=\"javascript:void(0);\" class=\"woof_childs_list_opener\" ><span class=\"" + c + "\"></span></a>")
            }
        }),
        jQuery.each(jQuery("a.woof_childs_list_opener span"), function(b, c) {
            jQuery(c).on("click", function() {
                var a = jQuery(this)
                  , b = jQuery(this).parent(".woof_childs_list_opener");
                if (a.hasClass("woof_is_closed") ? (jQuery(b).parent().find("ul.woof_childs_list").first().show(333),
                a.removeClass("woof_is_closed"),
                a.addClass("woof_is_opened")) : (jQuery(b).parent().find("ul.woof_childs_list").first().hide(333),
                a.removeClass("woof_is_opened"),
                a.addClass("woof_is_closed")),
                woof_supports_html5_storage()) {
                    var c = jQuery(b).closest("li").attr("class")
                      , d = jQuery(b).children("span").attr("class");
                    localStorage.setItem(c, d)
                }
                return !1
            })
        }))
    }
}
function woof_init_ion_sliders() {
    jQuery.each(jQuery(".woof_range_slider"), function(a, b) {
        try {
            jQuery(b).ionRangeSlider({
                min: jQuery(b).data("min"),
                max: jQuery(b).data("max"),
                from: jQuery(b).data("min-now"),
                to: jQuery(b).data("max-now"),
                type: "double",
                prefix: jQuery(b).data("slider-prefix"),
                postfix: jQuery(b).data("slider-postfix"),
                prettify: !0,
                hideMinMax: !1,
                hideFromTo: !1,
                grid: !0,
                step: jQuery(b).data("step"),
                onFinish: function(a) {
                    var c = jQuery(b).data("taxes");
                    return woof_current_values.min_price = parseFloat(a.from, 10) / c,
                    woof_current_values.max_price = parseFloat(a.to, 10) / c,
                    "undefined" != typeof woocs_current_currency && (woof_current_values.min_price /= parseFloat(woocs_current_currency.rate),
                    woof_current_values.max_price /= parseFloat(woocs_current_currency.rate)),
                    woof_ajax_page_num = 1,
                    (woof_autosubmit || 0 == jQuery(b).within(".woof").length) && woof_submit_link(woof_get_submit_link()),
                    !1
                },
                onChange: function(a) {
                    if (jQuery(".woof_price_filter_txt")) {
                        var c = jQuery(b).data("taxes");
                        jQuery(".woof_price_filter_txt_from").val(parseInt(a.from, 10) / c),
                        jQuery(".woof_price_filter_txt_to").val(parseInt(a.to, 10) / c),
                        "undefined" != typeof woocs_current_currency && (jQuery(".woof_price_filter_txt_from").val(Math.ceil(jQuery(".woof_price_filter_txt_from").val() / parseFloat(woocs_current_currency.rate))),
                        jQuery(".woof_price_filter_txt_to").val(Math.ceil(jQuery(".woof_price_filter_txt_to").val() / parseFloat(woocs_current_currency.rate))))
                    }
                }
            })
        } catch (a) {}
    })
}
function woof_init_native_woo_price_filter() {
    jQuery(".widget_price_filter form").off("submit"),
    jQuery(".widget_price_filter form").on("submit", function() {
        var a = jQuery(this).find(".price_slider_amount #min_price").val()
          , b = jQuery(this).find(".price_slider_amount #max_price").val();
        return woof_current_values.min_price = a,
        woof_current_values.max_price = b,
        woof_ajax_page_num = 1,
        woof_autosubmit && woof_submit_link(woof_get_submit_link()),
        !1
    })
}
function woof_reinit_native_woo_price_filter() {
    if ("undefined" == typeof woocommerce_price_slider_params)
        return !1;
    jQuery("input#min_price, input#max_price").hide(),
    jQuery(".price_slider, .price_label").show();
    var a = jQuery(".price_slider_amount #min_price").data("min")
      , b = jQuery(".price_slider_amount #max_price").data("max")
      , c = parseInt(a, 10)
      , d = parseInt(b, 10);
    woof_current_values.hasOwnProperty("min_price") ? (c = parseInt(woof_current_values.min_price, 10),
    d = parseInt(woof_current_values.max_price, 10)) : (woocommerce_price_slider_params.min_price && (c = parseInt(woocommerce_price_slider_params.min_price, 10)),
    woocommerce_price_slider_params.max_price && (d = parseInt(woocommerce_price_slider_params.max_price, 10)));
    var e = woocommerce_price_slider_params.currency_symbol;
    "undefined" == typeof e && (e = woocommerce_price_slider_params.currency_format_symbol),
    jQuery(document.body).on("price_slider_create price_slider_slide", function(a, b, c) {
        if ("undefined" != typeof woocs_current_currency) {
            var d = b
              , f = c;
            "undefined" == typeof e && (e = woocs_current_currency.symbol),
            1 !== woocs_current_currency.rate && (d = Math.ceil(d * parseFloat(woocs_current_currency.rate)),
            f = Math.ceil(f * parseFloat(woocs_current_currency.rate))),
            d = woof_front_number_format(d, 2, ".", ","),
            f = woof_front_number_format(f, 2, ".", ","),
            (jQuery.inArray(woocs_current_currency.name, woocs_array_no_cents) || 1 == woocs_current_currency.hide_cents) && (d = d.replace(".00", ""),
            f = f.replace(".00", "")),
            "left" === woocs_current_currency.position ? (jQuery(".price_slider_amount span.from").html(e + d),
            jQuery(".price_slider_amount span.to").html(e + f)) : "left_space" === woocs_current_currency.position ? (jQuery(".price_slider_amount span.from").html(e + " " + d),
            jQuery(".price_slider_amount span.to").html(e + " " + f)) : "right" === woocs_current_currency.position ? (jQuery(".price_slider_amount span.from").html(d + e),
            jQuery(".price_slider_amount span.to").html(f + e)) : "right_space" === woocs_current_currency.position && (jQuery(".price_slider_amount span.from").html(d + " " + e),
            jQuery(".price_slider_amount span.to").html(f + " " + e))
        } else
            "left" === woocommerce_price_slider_params.currency_pos ? (jQuery(".price_slider_amount span.from").html(e + b),
            jQuery(".price_slider_amount span.to").html(e + c)) : "left_space" === woocommerce_price_slider_params.currency_pos ? (jQuery(".price_slider_amount span.from").html(e + " " + b),
            jQuery(".price_slider_amount span.to").html(e + " " + c)) : "right" === woocommerce_price_slider_params.currency_pos ? (jQuery(".price_slider_amount span.from").html(b + e),
            jQuery(".price_slider_amount span.to").html(c + e)) : "right_space" === woocommerce_price_slider_params.currency_pos && (jQuery(".price_slider_amount span.from").html(b + " " + e),
            jQuery(".price_slider_amount span.to").html(c + " " + e));
        jQuery(document.body).trigger("price_slider_updated", [b, c])
    }),
    jQuery(".price_slider").slider({
        range: !0,
        animate: !0,
        min: a,
        max: b,
        values: [c, d],
        create: function() {
            jQuery(".price_slider_amount #min_price").val(c),
            jQuery(".price_slider_amount #max_price").val(d),
            jQuery(document.body).trigger("price_slider_create", [c, d])
        },
        slide: function(a, b) {
            jQuery("input#min_price").val(b.values[0]),
            jQuery("input#max_price").val(b.values[1]),
            jQuery(document.body).trigger("price_slider_slide", [b.values[0], b.values[1]])
        },
        change: function(a, b) {
            jQuery(document.body).trigger("price_slider_change", [b.values[0], b.values[1]])
        }
    }),
    woof_init_native_woo_price_filter()
}
function woof_mass_reinit() {
    woof_remove_empty_elements(),
    woof_open_hidden_li(),
    woof_init_search_form(),
    woof_hide_info_popup(),
    woof_init_beauty_scroll(),
    woof_init_ion_sliders(),
    woof_reinit_native_woo_price_filter(),
    woof_recount_text_price_filter(),
    woof_draw_products_top_panel()
}
function woof_recount_text_price_filter() {
    "undefined" != typeof woocs_current_currency && jQuery.each(jQuery(".woof_price_filter_txt_from, .woof_price_filter_txt_to"), function() {
        jQuery(this).val(Math.ceil(jQuery(this).data("value")))
    })
}
function woof_init_toggles() {
    jQuery("body").on("click", ".woof_front_toggle", function() {
        "opened" == jQuery(this).data("condition") ? (jQuery(this).removeClass("woof_front_toggle_opened"),
        jQuery(this).addClass("woof_front_toggle_closed"),
        jQuery(this).data("condition", "closed"),
        "text" == woof_toggle_type ? jQuery(this).text(woof_toggle_closed_text) : jQuery(this).find("img").prop("src", woof_toggle_closed_image)) : (jQuery(this).addClass("woof_front_toggle_opened"),
        jQuery(this).removeClass("woof_front_toggle_closed"),
        jQuery(this).data("condition", "opened"),
        "text" == woof_toggle_type ? jQuery(this).text(woof_toggle_opened_text) : jQuery(this).find("img").prop("src", woof_toggle_opened_image)),
        jQuery(this).parents(".woof_container_inner").find(".woof_block_html_items").slideToggle(500);
        var a = jQuery(this).parents(".woof_container_inner").find(".chosen-container");
        return a.length && jQuery(this).hasClass("woof_front_toggle_opened") && (jQuery(this).parents(".woof_container_inner").find("select").chosen("destroy").trigger("liszt:updated"),
        jQuery(this).parents(".woof_container_inner").find("select").chosen()),
        !1
    })
}
function woof_open_hidden_li() {
    0 < jQuery(".woof_open_hidden_li_btn").length && jQuery.each(jQuery(".woof_open_hidden_li_btn"), function(a, c) {
        jQuery(c).parents("ul").find("li.woof_hidden_term input[type=checkbox],li.woof_hidden_term input[type=radio]").is(":checked") && jQuery(c).trigger("click")
    })
}
function $_woof_GET(a, b) {
    b = b ? b : window.location.search;
    var c = new RegExp("&" + a + "=([^&]*)","i");
    return (b = b.replace(/^\?/, "&").match(c)) ? b = b[1] : b = ""
}
function woof_parse_url(a) {
    var b = a.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/);
    return {
        scheme: b[2],
        authority: b[4],
        path: b[5],
        query: b[7],
        fragment: b[9]
    }
}
function woof_price_filter_radio_init() {
    "none" == icheck_skin ? jQuery("body").on("change", ".woof_price_filter_radio", function() {
        var a = jQuery(this).val();
        if (jQuery(".woof_radio_price_reset").removeClass("woof_radio_term_reset_visible"),
        -1 == parseInt(a, 10))
            delete woof_current_values.min_price,
            delete woof_current_values.max_price,
            jQuery(this).removeAttr("checked"),
            jQuery(this).siblings(".woof_radio_price_reset").removeClass("woof_radio_term_reset_visible");
        else {
            var a = a.split("-");
            woof_current_values.min_price = a[0],
            woof_current_values.max_price = a[1],
            jQuery(this).siblings(".woof_radio_price_reset").addClass("woof_radio_term_reset_visible"),
            jQuery(this).attr("checked", !0)
        }
        (woof_autosubmit || 0 == jQuery(this).within(".woof").length) && woof_submit_link(woof_get_submit_link())
    }) : (jQuery(".woof_price_filter_radio").iCheck("destroy"),
    jQuery(".woof_price_filter_radio").iCheck({
        radioClass: "iradio_" + icheck_skin.skin + "-" + icheck_skin.color
    }),
    jQuery(".woof_price_filter_radio").siblings("div").removeClass("checked"),
    jQuery(".woof_price_filter_radio").off("ifChecked"),
    jQuery(".woof_price_filter_radio").on("ifChecked", function() {
        jQuery(this).attr("checked", !0),
        jQuery(".woof_radio_price_reset").removeClass("woof_radio_term_reset_visible"),
        jQuery(this).parents(".woof_list").find(".woof_radio_price_reset").removeClass("woof_radio_term_reset_visible"),
        jQuery(this).parents(".woof_list").find(".woof_radio_price_reset").hide(),
        jQuery(this).parents("li").eq(0).find(".woof_radio_price_reset").eq(0).addClass("woof_radio_term_reset_visible");
        var a = jQuery(this).val();
        if (-1 == parseInt(a, 10))
            delete woof_current_values.min_price,
            delete woof_current_values.max_price,
            jQuery(this).removeAttr("checked"),
            jQuery(this).siblings(".woof_radio_price_reset").removeClass("woof_radio_term_reset_visible");
        else {
            var a = a.split("-");
            woof_current_values.min_price = a[0],
            woof_current_values.max_price = a[1],
            jQuery(this).siblings(".woof_radio_price_reset").addClass("woof_radio_term_reset_visible"),
            jQuery(this).attr("checked", !0)
        }
        (woof_autosubmit || 0 == jQuery(this).within(".woof").length) && woof_submit_link(woof_get_submit_link())
    })),
    jQuery(".woof_radio_price_reset").on("click", function() {
        return delete woof_current_values.min_price,
        delete woof_current_values.max_price,
        jQuery(this).siblings("div").removeClass("checked"),
        jQuery(this).parents(".woof_list").find("input[type=radio]").removeAttr("checked"),
        jQuery(this).removeClass("woof_radio_term_reset_visible"),
        woof_autosubmit && woof_submit_link(woof_get_submit_link()),
        !1
    })
}
function woof_serialize(a) {
    for (var b, c, d = decodeURI(a), e = d.split("&"), f = {}, g = 0, h = e.length; g < h; g++)
        if (b = e[g].split("="),
        c = b[0],
        c.indexOf("[]") == c.length - 2) {
            var j = c.substring(0, c.length - 2);
            void 0 === f[j] && (f[j] = []),
            f[j].push(b[1])
        } else
            f[c] = b[1];
    return f
}
function woof_infinite() {
    if ("undefined" != typeof yith_infs) {
        var a = {
            nextSelector: ".woocommerce-pagination li .next",
            navSelector: yith_infs.navSelector,
            itemSelector: yith_infs.itemSelector,
            contentSelector: yith_infs.contentSelector,
            loader: "<img src=\"" + yith_infs.loader + "\">",
            is_shop: yith_infs.shop
        }
          , b = window.location.href
          , c = b.split("?")
          , d = "";
        if (null != c[1]) {
            var e = woof_serialize(c[1]);
            delete e.paged,
            d = decodeURIComponent(jQuery.param(e))
        }
        var f = jQuery(".woocommerce-pagination li .next").attr("href");
        null == f && (f = c + "page/1/");
        var g = f.split("?")
          , h = "";
        if (null != g[1]) {
            var i = woof_serialize(g[1]);
            null != i.paged && (h = "page/" + i.paged + "/")
        }
        f = c[0] + h + "?" + d,
        jQuery(".woocommerce-pagination li .next").attr("href", f),
        jQuery(window).off("yith_infs_start"),
        jQuery(yith_infs.contentSelector).yit_infinitescroll(a)
    }
}
function woof_change_link_addtocart() {
    woof_is_ajax && jQuery(".add_to_cart_button").each(function(a, b) {
        var c = jQuery(b).attr("href");
        if (c) {
            var d = c.split("?")
              , e = window.location.href.split("?");
            d[1] != null && (c = e[0] + "?" + d[1],
            jQuery(b).attr("href", c))
        }
    })
}
function woof_front_number_format(a, b, c, d) {
    a = (a + "").replace(/[^0-9+\-Ee.]/g, "");
    var e = isFinite(+a) ? +a : 0
      , f = isFinite(+b) ? Math.abs(b) : 0
      , g = "undefined" == typeof d ? "," : d
      , h = "undefined" == typeof c ? "." : c
      , i = "";
    return i = (f ? function(a, b) {
        var c = Math.pow(10, b);
        return "" + (Math.round(a * c) / c).toFixed(b)
    }(e, f) : "" + Math.round(e)).split("."),
    3 < i[0].length && (i[0] = i[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, g)),
    (i[1] || "").length < f && (i[1] = i[1] || "",
    i[1] += Array(f - i[1].length + 1).join("0")),
    i.join(h)
}
function woof_supports_html5_storage() {
    try {
        return "localStorage"in window && null !== window.localStorage
    } catch (a) {
        return !1
    }
}
function woof_init_tooltip() {
    var a = jQuery(".woof_tooltip_header");
    a.length && jQuery(a).tooltipster({
        theme: "tooltipster-noir",
        side: "right"
    })
}
function woof_init_mobile_filter() {
    var a = jQuery(".woof_show_mobile_filter")
      , b = jQuery(".woof_show_mobile_filter_container")
      , c = jQuery(woof_m_b_container);
    b.length || (b = c),
    a && b && jQuery(b).append(a),
    jQuery(".woof_show_mobile_filter").on("click", function() {
        var a = jQuery(this).data("sid");
        jQuery(".woof.woof_sid_" + a).toggleClass("woof_show_filter_for_mobile"),
        setTimeout(function() {
            try {
                jQuery(".woof.woof_sid_" + a).find("select.woof_mselect").chosen("destroy"),
                jQuery(".woof.woof_sid_" + a).find("select.woof_select").chosen("destroy"),
                jQuery(".woof.woof_sid_" + a).find("select.woof_mselect").chosen(),
                jQuery(".woof.woof_sid_" + a).find("select.woof_select").chosen()
            } catch (a) {}
        }, 300)
    }),
    jQuery(".woof_hide_mobile_filter").on("click", function() {
        jQuery(this).parents(".woof").toggleClass("woof_show_filter_for_mobile")
    })
}
