var posts = [];


function printPosts (){
	 $('.comment').off();
	$('.posts').append('<p class="post" data-id=' 
			+ posts[posts.length-1].id + '>'
			+ posts[posts.length-1].text +
			'</br><a href="#" class="remove">'+
			'<i class="fa fa-trash-o" aria-hidden="true"></i></a> '+'<a href="#" class=" comment"><i class="fa fa-comments-o" aria-hidden="true"></i></a></p>');
	$('.remove').on('click', removePostByID);//event to trigger add 
	 $('.comment').on('click',showComment);
}
function addPost (){
	var postObj={
		text: $('#post-name').val() ,//assign the post text to the object element
		id: posts.length+1, //assign ID int he serial ID
		comments: []
	}; //create new object with text & ID 
	posts.push(postObj);//push the object to the post array
	printPosts();
}

function removePostByID(){
	var postID = $(this).closest('p').data().id;
	posts.splice(postID-1,1);
	$(this).closest('p').remove();
}

function showComment(){
$(this).closest('p').append('<form class="comment-form"><div class="form-group">' + 
	'<input type="text" id="user-name" class="form-control" placeholder="enter your name">' + 
	'<input type="text" id="comment-name" class="form-control" placeholder="Add your comment here">'
	 +' </input></div><button type="button" class="btn btn-primary add-comment">Comment</button></form>');
 $('.add-comment').on('click',addComment);
 }

function addComment(){
	var postID = $(this).closest('p').data().id;
	var postComment={
		text: $('#comment-name').val() ,//assign the post text to the object element
		id: posts[postID-1].comments.length+1, //assign ID int he serial ID
		username:$('#user-name').val()
	}; //create new object with text & ID 
	posts[postID-1].comments.push(postComment);
	var commentArrLength = posts[postID-1].comments.length-1;
	$(this).closest('p').append('<p class="post-comment" data-id=' 
			+ posts[postID-1].comments[commentArrLength].id + '>' + 
			posts[postID-1].comments[commentArrLength].username + ': '
			+ posts[postID-1].comments[commentArrLength].text+ '</p>');
	$(this).closest('div').find('.comment-form').remove();
 }

$('.add-post').on('click', addPost);//event to trigger addPost





 
