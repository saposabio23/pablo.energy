
// TOOLTIP

// var tooltip = document.getElementById('tooltip');
// var sel = window.getSelection();
// var rel1= document.createRange();
// rel1.selectNode(document.getElementById('cal1'));
// var rel2= document.createRange();
// rel2.selectNode(document.getElementById('cal2'));
// window.addEventListener('mouseup', function () {
//     if (!sel.isCollapsed) {
//         // debugger;
//         var r = sel.getRangeAt(0).getBoundingClientRect();
//         var rb1 = rel1.getBoundingClientRect();
//         var rb2 = rel2.getBoundingClientRect();
//         tooltip.style.top = (r.bottom - rb2.top)*100/(rb1.top-rb2.top) + 'px'; //this will place ele below the selection
//         tooltip.style.left = (r.left - rb2.left)*100/(rb1.left-rb2.left) + 'px'; //this will align the right edges together

//         //code to set content

//         tooltip.style.display = 'block';
//     }
// });
// window.addEventListener('mousedown', function () {
//     tooltip.style.display = 'none';
// });


// tooltip.addEventListener("mouseenter", () => {
//         highlightSelection()
//         getSelectedText()
//         window.getSelection().removeAllRanges()
//         notesPanel.scrollTop = notesPanel.scrollHeight;
// });