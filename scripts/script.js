
function get_rand_anim(){
    
}


window.onload = function(){

    var button_test = document.querySelector("#testing-control");

    button_test.onclick(function(){
        
        var cub = document.querySelector("#cube");
        cub.classList.remove("")
    });

    const elements_to_grab = {
        cube: "#Cube-container",
        res: "#result-box"
    };

    for(key in elements_to_grab){
        stick(elements_to_grab[key]);
    }


    function stick(el){
        function mouseMoving(e, object){
            var clY = e.clientY;
            var clX = e.clientX;
            
            var width = object.clientWidth / 2;
            var height = object.clientHeight / 2;
            object.style.transform = "translateX(0) translateY(0)";
                clY -= height;
                clX -= width;
            
            object.style.top = clY + "px";
            object.style.left = clX + "px";

        }

        var element = document.querySelector(el);

        element.onmousedown = function(){
            var object = this;
            window.onmousemove = function(e){
                mouseMoving(e, object);
            };
        };

        document.onmouseup = function(){
            window.onmousemove = null;
        };     
    }

}