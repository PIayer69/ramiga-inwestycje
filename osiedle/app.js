var active = ""
var images = ["parter", "poddasze", "elewacja"]

window.onscroll = function() {
    if (window.pageYOffset >= 200) {
        $(".to-the-top").css({
            display: "flex"
        })
        gsap.fromTo(".to-the-top", { opacity: 0, duration: .3 }, { opacity: 1 })
    } else {
        $(".to-the-top").css({
            display: "none"
        })
    }
}



function navbar_change_state() {
    $(".nav-bar").toggle()
    $(".dummy-nav-bar").toggle()
}

function enable_overflow() {
    $("body").css({
        overflow: "auto"
    })
}

function disable_overflow() {
    $("body").css({
        overflow: "hidden"
    })
}

$(".seven-segment-button").hover(function() {
    $(".seven-segment").css({
        opacity: .3
    })
}, function() {
    $(".seven-segment").css({
        opacity: 0
    })
})
$(".three-segment-button").hover(function() {
    $(".three-segment").css({
        opacity: .3
    })
}, function() {
    $(".three-segment").css({
        opacity: 0
    })
})


$(".seven-segment-button").click(function() {
    $(".seven-segment-view").css({
            display: "flex"
        })
    navbar_change_state()
    disable_overflow()
    active = ".seven-segment-view"
})

$(".three-segment-button").click(function() {
    $(".three-segment-view").css({
            display: "flex"
        })
    navbar_change_state()
    disable_overflow()
    active = ".three-segment-view"
})

$(".cross-view").click(function() {
    $(active).toggle()
    navbar_change_state()
    enable_overflow()
    active = false
})



$(".left-house-button").click(function() {
    $(".dimmed-window").toggle()
    $(".left").toggle()
    active_galery = ".left"
})

$(".middle-house-button").click(function() {
    $(".dimmed-window").toggle()
    $(".middle").toggle()
    active_galery = ".middle"
})

$(".right-house-button").click(function() {
    $(".dimmed-window").toggle()
    $(".right").toggle()
    active_galery = ".right"
})

$(".container-galery-content-old-button").click(function() {
    $(this).toggle()
    $(".container-galery-content-old-content").css({display: "flex"})
})

$(".cross-galery").click(function() {
    $(".dimmed-window").toggle()
    $(active_galery).toggle()
    active_galery = false
})


$(".arrow-left").click(function() {
    images_length = images.length
    current_image = $(active_galery).find("img").attr("src")
    slash_position = current_image.lastIndexOf("/")
    position = current_image.indexOf("-")
    site = current_image.slice(slash_position + 1, position)
    length = current_image.length
    object = current_image.slice(position + 1, length)
    object = object.slice(0, object.indexOf("."))

    position_in_array = images.indexOf(object)
    if (position_in_array == 0) {
        $(active_galery).find(".projections-galery-image").attr("src", "images/segments/" + site + "-" + images[images_length - 1] + ".png")
    } else {
        $(active_galery).find(".projections-galery-image").attr("src", "images/segments/" + site + "-" + images[position_in_array - 1] + ".png")
    }
    gsap.from(".projections-galery-image", { duration: .3, "margin-left": "200px", opacity: 0 })
})

$(".arrow-right").click(function() {
    images_length = images.length
    current_image = $(active_galery).find("img").attr("src")
    slash_position = current_image.lastIndexOf("/")
    position = current_image.indexOf("-")
    site = current_image.slice(slash_position + 1, position)
    length = current_image.length
    object = current_image.slice(position + 1, length)
    object = object.slice(0, object.indexOf("."))

    position_in_array = images.indexOf(object)
    if (position_in_array == images_length - 1) {
        $(active_galery).find(".projections-galery-image").attr("src", "images/segments/" + site + "-" + images[0] + ".png")
    } else {
        $(active_galery).find(".projections-galery-image").attr("src", "images/segments/" + site + "-" + images[position_in_array + 1] + ".png")
    }
    gsap.from(".projections-galery-image", { duration: .3, "margin-right": "200px", opacity: 0 })
})

$(".mobile-nav-links").click(function() {
    $(".mobile-menu").css({
        display: "flex"
    })
    $(".dimmed-window").toggle()
    disable_overflow()
    active_menu = ".mobile-menu"
})

$(".mobile-menu-link").click(function() {
    $(".mobile-menu").toggle()
    $(".dimmed-window").toggle()
    enable_overflow()
    active_menu = false

})

$(".dimmed-window").click(function() {
    try {
        if (active_galery) {
            $(active_galery).toggle()
            $(".dimmed-window").toggle()
        }
    } catch (err) {
        console.log(err)
    }
    try {
        if (active_menu) {
            $(active_menu).toggle()
            $(".dimmed-window").toggle()
        }
    } catch (err) {
        console.log(err)
    }
})
