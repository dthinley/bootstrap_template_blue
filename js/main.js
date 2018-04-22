$(document).ready(function(){
	$('.category_items').click(function(){
		var category =$(this).attr('id');
		if(category=='all'){
			$('.project_list').addClass('hide');
			setTimeout(function(){
				$('.project_list').removeClass('hide');

			}, 300);

		} else{
			$('.project_list').addClass('hide');
			setTimeout(function(){
				$('.' + category).removeClass('hide')
			}, 300);
		}

		
	});
});