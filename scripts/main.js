function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
	var iframeSource = $("#"+event.target.id).parent().find("iframe").attr("src");
    ev.dataTransfer.setData("iframeSource", iframeSource);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("iframeSource");
    $("#"+event.target.id).parent().find("iframe").attr("src", data);
}