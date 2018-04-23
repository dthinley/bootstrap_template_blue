$(document).ready(function(){
	$('.category_items').click(function(){
		var category =$(this).attr('id');
		if(category=='all'){
			$(".project_list").show("1000");
		}else
		{
			$(".project_list").not("."+category).hide("1000");
			$(".project_list").filter("."+category).show("1000");
			
		}

		
	});
});