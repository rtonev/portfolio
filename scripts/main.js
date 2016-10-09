function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    dragAllowed=false;
    console.log("iframe drag - " + dragAllowed);
	var iframeSource = $("#"+event.target.id).parent().find("iframe").attr("src");
    ev.dataTransfer.setData("iframeSource", iframeSource);
}

function drop(ev) {
    dragAllowed=true;
    console.log("iframe drop - " + dragAllowed);
    ev.preventDefault();
    ev.stopPropagation();
    var data = ev.dataTransfer.getData("iframeSource");
    var $iframe = $("#"+event.target.id).parent().find("iframe");
    $iframe.attr("src", data);
    $iframe.css('-webkit-transform-origin', 'center center');
}

function allowDrop2(ev) {
    ev.preventDefault();
}

function drag2(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop2(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

// function on_drag_start(event) {
//     var style = window.getComputedStyle(event.target, null);
//     var offset_data = (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY);
//     console.log("offest_data" + offset_data);
//     // event.dataTransfer.setData("text/plain",offset_data);
//     localStorage.setItem("drag-offset", offset_data);
// }
// function on_drag_over(event) {
//     // console.log("drag_over - " + dragAllowed);
//     if (dragAllowed) {
//         var offset;
//         try {
//     //        offset = event.dataTransfer.getData("text/plain").split(',');
//             offset = localStorage.getItem("drag-offset");
//         }
//         catch(e) {
//             offset = offset_data.split(',');
//         }
//         // var dm = document.getElementById('dragme');
//         var dm = event.target;
//         console.log("offset:" + offset);
//         dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
//         dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
//         // event.preventDefault();
//         return false;
//     }
// }
// function on_drop(event) {
//     // console.log("drop - " + dragAllowed);
//     if (dragAllowed) {
//
//         var offset;
//         try {
//             offset = event.dataTransfer.getData("text/plain").split(',');
//         }
//         catch (e) {
//             offset = offset_data.split(',');
//         }
//         var dm = document.getElementById('dragme');
//         dm.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
//         dm.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
//         event.preventDefault();
//         return false;
//     }
// }

function on_drag_start(event)
{
    $(event.target).find('.iframe-container').hide();
    var style = window.getComputedStyle(event.target, null);
    var str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY)+ ',' + event.target.id;
    event.dataTransfer.setData("Text",str);
}

function on_drop(event)
{
    var offset = event.dataTransfer.getData("Text").split(',');
    var dm = document.getElementById(offset[2]);
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    $(dm).find('.iframe-container').show();
    event.preventDefault();
    return false;
}

function on_drag_over(event)
{
    event.preventDefault();
    return false;
}


$(document).ready(function() {

    $('.frame-hor').css('height', window.innerHeight);
    $('.frame-hor').css('width', window.innerWidth);
//     /* experiment start */
//     var offset_data; //Global variable as Chrome doesn't allow access to event.dataTransfer in dragover
//      window.dragAllowed=true;
//
//     /* make this work for multiple elements */
//     var dm = $('.draggable');
//     $.each($('.draggable'), function() {
//         $(this)[0].addEventListener('dragstart',on_drag_start,false);
//         $(this).draggable();
//     });
//     document.body.addEventListener('dragover',on_drag_over,false);
//     document.body.addEventListener('drop',on_drop,false);

    /* experiment end */
	var $divUrlPopup = $('#divUrlPopup');
	var $inputUrlPopup = $('#inputUrlPopup');
	$divUrlPopup.popup({
    	vertical:'center'
    });
    
    $('div[class^=scr]').click(function(event) {
        $iframe = $(this).find('iframe');
        var iframeSrc = $iframe.attr('src');
       	$inputUrlPopup.val(iframeSrc);
       	$inputUrlPopup.data("iframeSrc", $iframe.attr('id'));
        $divUrlPopup.popup('show');
    });

    $('#formUrlPopup').submit(function(event) {
    	event.preventDefault();
    	var inputVal = $inputUrlPopup.val();
    	var iframeId = $inputUrlPopup.data().iframeSrc;
    	$('#'+iframeId).attr('src', inputVal);
    	$divUrlPopup.popup('hide');
    })
});