class ScrollLoad{

	constructor(){
			
			
	}

	onscroll(callback){
			window.addEventListener('scroll',function(){
				var scrollTop = document.body.scrollTop;

				var totalheight = parseFloat(window.screen.availHeight) + parseFloat(scrollTop);  
				
				if((document.body.clientHeight-50) <= totalheight) {
					callback();
				};
			});

	}
}
export default ScrollLoad


