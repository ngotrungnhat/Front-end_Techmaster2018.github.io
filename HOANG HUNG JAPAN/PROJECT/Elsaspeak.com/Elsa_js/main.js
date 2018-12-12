"use strict";
window.elsaScript = function() {
    var t = function() {
        if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
            var e = document.createElement("style");
            e.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")),
            document.querySelector("head").appendChild(e)
        }
    };
    return {
        init: function() {
            var e;
            t(),
            e = $("#js-testimonial"),
            new Swiper(e.find(".swiper-container"),{
                slidesPerView: 2,
                spaceBetween: 30,
                breakpoints: {
                    991: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    }
                },
                navigation: {
                    nextEl: e.find(".swiper-button-next"),
                    prevEl: e.find(".swiper-button-prev")
                },
                pagination: {
                    el: e.find(".swiper-pagination"),
                    type: "bullets"
                }
            }),
            $("#js-result-knob").knob({
                readOnly: !0,
                height: 180,
                width: 180,
                displayInput: !1,
                fgColor: "#12ce66",
                bgColor: "#e0e7ec",
                thickness: .1
            }),
            $("#js-record").on("click", function() {
                $(this).removeClass("btn-info").addClass("active btn-success"),
                setTimeout(function() {
                    window.location.href = "./test-2.html"
                }, 2e3)
            }),
            new window.WOW({
                callback: function(e) {
                    var t = $(e);
                    "counter-up" === t.attr("data-type") && t.find(".js-counter-up").each(function() {
                        var e = $(this)
                          , t = parseInt(e.attr("data-decimals"), 10) || 0
                          , i = parseFloat(e.attr("data-value"));
                        new window.CountUp(e.get(0),0,i,t,2.5,{
                            useEasing: !0,
                            useGrouping: !0,
                            separator: ",",
                            decimal: "."
                        }).start()
                    })
                }
            }).init()
        }
    }
}(),
$(document).ready(function() {
    window.elsaScript.init()
}),
$(document).ready(function() {
    $(".else-list-question li").click(function() {
        var e = $(this).data("id");
        $(".else-list-question li").removeClass("active"),
        $(this).addClass("active"),
        $(".elsa-answer div").hide(),
        $(".elsa-answer #" + e).show()
    }),
    $(".else-list-question").find("a").click(function(e) {
        e.preventDefault();
        var t = $(".elsa-answer");
        $("html, body").animate({
            scrollTop: $(t).offset().top - 60
        }, "slow")
    })
}),
$(document).ready(function() {
    if (window.location.hash) {
        var e = window.location.hash.substring(1);
        t(e, e)
    }
    function t(e, t) {
        $(".elsa-positions-career").addClass("is_open"),
        $(".list-job a").removeClass("active"),
        $(".list-job a." + t).addClass("active"),
        $(".elsa-section-form > div").hide(),
        $(".elsa-section-form #" + e).show();
        var i = $(".elsa-section-form");
        $("html, body").animate({
            scrollTop: $(i).offset().top - 60
        }, "slow")
    }
    $('.upload_cv input[type="file"]').on("change", function() {
        var e = $(this).val().split("\\").pop();
        $(".upload_cv label span").html(e)
    }),
    $('.up_loadportfolio input[type="file"]').on("change", function() {
        var e = $(this).val().split("\\").pop();
        $(".up_loadportfolio label span").html(e)
    }),
    $(".btn-view-job").on("click", function() {
        t($(this).data("id"), $(this).data("title"))
    }),
    $(".back_list_job").on("click", function() {
        $(".elsa-positions-career").removeClass("is_open")
    }),
    $(".list-job a").on("click", function() {
        var e = $(this).data("id");
        $(".list-job a").removeClass("active"),
        $(this).addClass("active"),
        $(".elsa-section-form >div").hide(),
        $(".elsa-section-form #" + e).show();
        var t = $(".elsa-section-form");
        $("html, body").animate({
            scrollTop: $(t).offset().top - 60
        }, "slow")
    })
});




















$(document).ready(function(){
    $(".navbar").append(
        `<div class="container-fluid">
        <a class="navbar-brand mr-4" href="../index.html">
            <img src="https://elsaspeak.com/assets/v2/assets/images/logo.svg" height="41" alt="">
        </a>
        <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="../index.html">Home
                        <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="products.html">Product</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="faqs.html">FAQs</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link" href="#" id="navbarCompanyDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Company
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarCompanyDropdown">
                        <a class="dropdown-item d-flex align-items-center" href="about.html">
                            <i class="elsa-icon icon-info mr-3"></i>
                            About us
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="contact.html">
                            <i class="elsa-icon icon-phone mr-3"></i>
                            Contact
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="careers.html">
                            <i class="elsa-icon icon-job mr-3"></i>
                            Careers
                        </a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://blog.elsaspeak.com/" target="_blank">Blogs</a>
                </li>
            </ul>
            <div id="download-box" class="d-md-flex align-items-center ml-auto">
                <ul class="navbar-nav elsa-navbar--app flex-row justify-content-center">
                    <li class="nav-item mr-3 mr-md-2 mr-lg-3">
                        <a class="nav-link py-2 px-md-0" href="https://itunes.apple.com/us/app/elsa-speak/id1083804886">
                            <img src="https://elsaspeak.com/assets/v2/assets/images/app-store.svg" alt="" height="44">
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link py-2 px-md-0" href="https://play.google.com/store/apps/details?id=us.nobarriers.elsa">
                            <img src="https://elsaspeak.com/assets/v2/assets/images/play-store.svg" alt="" height="44">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>`
    );




    $(".elsa-footer").append(
        `<div class="container">
        <div class="row py-4 py-sm-5">
            <div class="col-12 col-md-6 col-lg-4 mb-4 elsa-footer__info">
                <img src="https://elsaspeak.com/assets/v2/assets/images/white-logo.svg" height="34" alt="ELSA Speak" class="mb-3">
                <div class="mb-3">
                    <p class="mb-0">Email:&nbsp;<a class="text-white" href="mailto:support@elsanow.io">support@elsanow.io</a>
                    </p>
                    <p class="mb-0">Hotline:&nbsp;<a class="text-white" href="tel:+84904065063">+84 904 065 063</a></p>
                </div>
                <p class="m-0">121 Day Street, San Francisco, CA 94131</p>
            </div>
             <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                <ul class="elsa-footer__links list-unstyled mb-0">
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="products.html">Product</a></li>
                    <li><a href="../index.html">Pro Memberships</a></li>
                    <li><a href="faqs.html">FAQs</a></li>
                    <li><a href="terms.html">Terms</a></li>
                </ul>
            </div>
            <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                <ul class="elsa-footer__links list-unstyled mb-0">
                    <li><a href="/about">Company</a></li>
                    <li><a href="/careers">Careers</a></li>
                    <li><a href="/contact">Contact us</a></li>
                    <li><a href="https://blog.elsaspeak.com/" target="_blank">Blogs</a></li>
                    <li><a href="/privacy">Privacy</a></li>
                </ul>
            </div>
            <div class="col-12 col-lg-4 mt-4 mt-md-0">
                <div class="mb-2">Newsletter</div>
                <div class="text-secondary">Please enter your email if want to receive updates on our progress. We won't
                    spam you, ever.
                </div>
                <form action="#" class="elsa__newsletter mt-4">
                    <i class="elsa-icon icon-email text-warning"></i>
                    <input type="text" class="form-control" placeholder="Your Email">
                    <button class="btn btn-submit text-success">
                        <i class="elsa-icon icon-arrow-circle-right"></i>
                    </button>
                </form>
            </div>
        </div>
        <div class="elsa-footer__copyright d-flex flex-column flex-sm-row align-items-center py-3">
            <p class="m-0">ELSA © 2018 All rights reserved</p>
            <ul class="elsa-footer__social d-flex align-items-center list-unstyled mb-0 mt-4 mt-sm-0 mx-auto mx-sm-0 ml-sm-auto">
                <li class="px-2">
                    <a href="https://www.facebook.com/elsaspeak" target="_blank" class="px-1">
                        <i class="elsa-icon icon-facebook"></i>
                    </a>
                </li>
                <li class="px-2">
                    <a href="https://twitter.com/elsa_speak" target="_blank" class="px-1">
                        <i class="elsa-icon icon-twitter"></i>
                    </a>
                </li>
                <li class="px-2">
                    <a href="https://www.instagram.com/elsa_speak" target="_blank" class="px-1">
                        <i class="elsa-icon icon-instagram"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>`
    );
});

