'use strict';

/* global store, api */

const bookmarks = (function() {

	function generateBookmarksHtml(links) {
		const pages = links.map((link) => generateBookmarkCollapsed(link));
		return pages.join('');
	}

	function generateBookmarkCollapsed(bookmark) {
		const bookmarkTitle = `<span class="bookmark-item-title">${bookmark.title}</span>`;
		const bookmarkRating = `<span class="bookmark-item-title">${bookmark.rating}</span>`;
		return `
		<li class="js-bookmark-item">
			${bookmarkTitle}
			${bookmarkRating}
		</li>`;
	}

	function generateBookmarkExpand(bookmark) {
		// title, delete "x", description, "Visit Site" button, "Edit" button, rating
	}

	function generateButtonsHeader() {
		return `
	<p class="button-group">
		<button type="button" id="add-bookmark-button"> ADD BOOKMARK </button>
		<select name="ratings">
      		<option value="zero">Minimum Rating</option>
      		<option value="five">Five Stars</option>
      		<option value="four">Four Stars</option>
      		<option value="three">Three Stars</option>
      		<option value="two">Two Stars</option>
      		<option value="one">One Star</option>
	    </select>
    </p>`;
	}

	function generateAddBookmarkForm() {
		return `
			<span class="text-boxes">
				<input type="text" id="new-title" placeholder="title">
				<input type="text" id="new-url" placeholder="URL">
				<div class="radio-and-submit">
					<input type="radio" class="radios" id="rating5" name="ratings" value="5">
					<label for="rating5">5 Stars</label>
					<input type="radio" class="radios" id="rating4" name="ratings" value="4">
					<label for="rating5">4 Stars</label>
					<input type="radio" class="radios" id="rating3" name="ratings" value="3">
					<label for="rating5">3 Stars</label>
					<input type="radio" class="radios" id="rating2" name="ratings" value="2">
					<label for="rating5">2 Stars</label>
					<input type="radio" class="radios" id="rating1" name="ratings" value="1">
					<label for="rating5">1 Stars</label>
				</div>
			</span>
			<p>
				<textarea rows=5 columns=200 placeholder="Short description of bookmarked page here" id="new-description"></textarea>
			</p>
			<span>
				<button type="submit" id="add-button">ADD</button>
			</span>`;
	}

	function render() {
		if(!store.adding) {
			// add buttons header
			$('form#js-form-actions').html(generateButtonsHeader());
		} else {
			$('form#js-form-actions').html(generateAddBookmarkForm());
		}
		// const htmlBookmarks = store.bookmarks.map((bookmark) => {
		// 	generateBookmarkCollapsed(bookmark);
		// });
		$('ul#bookmark-list').html(generateBookmarksHtml(store.bookmarks));
	}

	function handleNewBookmarkClicked() {

		// change the store.adding value
		$('form#js-form-actions').submit(function (event) {
			event.preventDefault();
			const newBookmarkTitle = $('#new-title').val();
			const newBookmarkUrl = $('#new-url').val();
			const newBookmarkRating = $('input[name="ratings"]:checked').val();
			const newBookmarkDescription = $('textarea#new-description').val();
			clearValues();
			const newBookmark = {title: newBookmarkTitle, url: newBookmarkUrl, rating: newBookmarkRating, description: newBookmarkDescription};
			api.createBookmark(newBookmark, (newBookmark) => {
				store.addBookmark(newBookmark);
				render();
			});
		});
		// re-render the page
	}

	function clearValues() {
		$('#new-title').val('');
		$('#new-url').val('');
		$('input[name="ratings"]:checked').prop('checked', false);
		$('textarea#new-description').val('');
	}

	function handleFilterSelected() {

	}

	function handleNewBookmarkSubmit() {

	}

	function handleBookmarkClicked() {
		// toggles between detailed and simplified view for a given bookmark item
	}

	function bindEventListeners() {
		handleNewBookmarkClicked();
		handleFilterSelected();
		handleNewBookmarkSubmit();
		handleBookmarkClicked();
	}

	return {
		render: render,
		bindEventListeners: bindEventListeners,
	};
}());