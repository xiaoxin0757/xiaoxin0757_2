var preloaded = [];
// here is a lame preloading script i am putting in just for demonstration
for (var i = 1; i <= 8; i++){
	preloaded[i] = [loadImage(i + "-0.gif"), loadImage(i + "-1.gif")];
}
function init(){
if(mtDropDown.isSupported()){
	mtDropDown.initialize();
	}
}
// this is a crappy example preloader. Use whichever one you want.
function loadImage(sFilename) {
//var img = new Image();
//img.src ="../inc/img/nav/" + sFilename;
//return img;
}
// this is a crappy example image swapper. Use whichever you want.
function swapImage(imgName, sFilename) {document.images[imgName].src = sFilename;}		