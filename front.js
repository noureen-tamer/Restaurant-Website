function change(val) {
    var urlParams = new URLSearchParams(window.location.search);
    var val = urlParams.get('val');
    document.getElementById("order").value=val;
}
window.onload = change();
