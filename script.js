var tiredImages = ["http://brainchase.com/public/uploads/rosetta-stone-logo.jpg", "https://ui-ex.com/images/transparent-emoji-tired-2.png", "https://www.besthealthmag.ca/wp-content/uploads/sites/16/2015/09/Natural-Remedies-for-Fatigue.gif"];

var happyImages = ["http://www.chapterscapistrano.com/wp-content/uploads/2014/08/happy_2.jpg", "http://onehealthyhamptons.com/wp-content/uploads/2013/08/normal_happy_teaser_ad_copy.jpg", "https://images.pexels.com/photos/1282169/pexels-photo-1282169.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500"];

var sadImages = ["https://cdn.shopify.com/s/files/1/1061/1924/products/Unhappy_Face_Emoji_Icon_ios10_large.png?v=1542436007", "https://qotoqot.com/sad-animations/img/400/sitting_alone/sitting_alone.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxx6sy9d5lHc5m6BZQhFw3sMtlEKE8sAupq7NWjIauy0aufsN-"];

var angryImages = ["https://cdn.shopify.com/s/files/1/1061/1924/products/Very_Angry_Emoji_7f7bb8df-d9dc-4cda-b79f-5453e764d4ea_large.png?v=1480481058", "https://images.fatherly.com/wp-content/uploads/2018/08/angry-men.jpg?q=65&enable=upscale&w=600", "https://cdn.mindful.org/anger.png?q=80&fm=jpg&fit=crop&w=1400&h=875"];

function changeCSS(backgroundColor, fontColor) {
    $("body").css("background-color", backgroundColor);
    $("h1").css("color", fontColor);
    $("#container").show();
    $("#images").css("display", "flex");
    $("#tryAgain").css("display", "block");
}

function changeMood(mood) {
    $("#add").append("<strong>" + "Hello " + mood + "!" + "</strong>");
}

$("button").click(function() {
    var inputValue = $("#mood").val();
    if(inputValue === "Happy") {
        $("img").remove();
        $("strong").remove();
        changeCSS("green", "yellow");
        changeMood("Happy");
        happyImages.forEach(function(image) {
            $("#images").append("<img src= " + image + ">");
        });
    } else if(inputValue === "Sad") {
        $("img").remove();
        $("strong").remove();
        changeCSS("#003366", "purple");
        changeMood("Sad");
        sadImages.forEach(function(image) {
            $("#images").append("<img src= " + image + ">");
        });
    } else if(inputValue === "Angry") {
        $("img").remove();
        $("strong").remove();
        changeCSS("red", "orange");
        changeMood("Angry");
        angryImages.forEach(function(image) {
            $("#images").append("<img src= " + image + ">");
        });
    } else if(inputValue === "Tired") {
        $("img").remove();
        $("strong").remove();
        changeCSS("grey", "yellow");
        changeMood("Tired");
        tiredImages.forEach(function(image) {
            $("#images").append("<img src= " + image + ">");
        });
    } else {
        alert("Something went wrong!!! make sure you choose from the options and capitalize the first letter in the emotion.");
    }
});