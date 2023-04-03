// Define an asynchronous function that handles form submissions for creating comments
const commentFormHandler = async function (event) {
	event.preventDefault(); // Prevent the default form submission behavior

	// Get the blog ID and comment description from the form fields
	const blog_id = document.querySelector('.new-comment-form').dataset.blogid;
	const comment_description = document.querySelector('#comment_description').value.trim();

	// If a comment description was entered, make a POST request to the server to create the comment
	if (comment_description) {
		await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({
				blog_id,
				comment_description,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		// Reload the page to display the new comment
		document.location.reload();
	}
};

// Attach the comment form submission handler to the form's submit event
document
	.querySelector('.new-comment-form')
	.addEventListener('submit', commentFormHandler);