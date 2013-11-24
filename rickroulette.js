var rick_roll = "http://www.youtube.com/watch?v=dQw4w9WgXcQ";

$("a").each(function (index) {
    if (Math.random() < 0.25) {
        $(this).attr("href", rick_roll);
    }
});
