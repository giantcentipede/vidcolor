function preload() {

}

function setup() {
    canvas= createCanvas(640,483)
    canvas.position(425,300)
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";

}

function draw() {
    image(video,0,0,639,483);
    tint(tint_color)
}
function apply_filter() {
    tint_color=document.getElementById("color_name").value ;

}

function take_snapshot() {
    save("🌮🌮🌮🌮.png")
}