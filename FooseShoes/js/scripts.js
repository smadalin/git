    //Search Bar
    $(function() {
        var availableTags = [
            "MEN SHOES",
            "KIDS",
            "PINK SHOES",
            "WOMEN SHOES",
            "CHEAP SHOES",
            "PRADA",
            "ANNA FIELD"
        ];
    $( "#tags" ).autocomplete({
        source: availableTags
    });
    $( "#tags2" ).autocomplete({
        source: availableTags
    });
    });
    //Newsletter Subscribe
    var subscribers=[];
    function subscribe_newsletter(){
        var x=document.getElementById('subscribe_email').value;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(x)) {
            return false;
        }
        var temp={
            "email": x
        };
        subscribers.push(temp);
        document.getElementById("subscribe_email").value="";
        console.log(subscribers);
    }
    //Blog News Widget
    $.getJSON("widgets_data.json", function (data){
        var count1=0;
        function changeBlogPost() {
            function increment(){
                count1=count1+2;
                if(count1==data.blogPosts.length) 
                count1=0;
            }
            $("#postDate1").text(data.blogPosts[count1].postDate).fadeIn(1000).delay(5000).fadeOut(1000);
            $("#postTitle1").text(data.blogPosts[count1].postTitle).fadeIn(1000).delay(5000).fadeOut(1000);
            $("#postMessage1").text(data.blogPosts[count1].postMessage).fadeIn(1000).delay(5000).fadeOut(1000);
            $("#postDate2").text(data.blogPosts[count1+1].postDate).fadeIn(1000).delay(5000).fadeOut(1000);
            $("#postTitle2").text(data.blogPosts[count1+1].postTitle).fadeIn(1000).delay(5000).fadeOut(1000);
            $("#postMessage2").text(data.blogPosts[count1+1].postMessage).fadeIn(1000).delay(5000).fadeOut(1000,increment());
        }
        changeBlogPost();
        setInterval(changeBlogPost,7000);
    });
    //Twitter widget
    $.getJSON("widgets_data.json",function(data){
        var count2=0;
        function changeText() {
            $("#twitterUser1").text(data.messages[count2].user);
            $("#twitterMessage1").text(data.messages[count2].message);
            $("#twitterDate1").text(data.messages[count2].date);
            $("#twitterUser2").text(data.messages[count2+1].user);
            $("#twitterMessage2").text(data.messages[count2+1].message);
            $("#twitterDate2").text(data.messages[count2+1].date);
            count2=count2+2;
            if(count2==data.messages.length) 
                count2=0;
            }
            changeText();
            setInterval(changeText, 5000);
    });
    $(document).ready(function() {
        $(".fancybox").fancybox();
        $('.flexslider').flexslider({
            animation: "slide",
          });
    });