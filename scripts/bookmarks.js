'use strict';

/* global store, api */

const bookmarks = (function() {

	function generateBookmarkCollapsed(bookmark) {

	}

	function generateBookmarkExpand(bookmark) {

	}

	function generateButtonsHeader() {
		return `
		<button type="submit" id="add-bookmark-button"> ADD BOOKMARK </button>
      <select>
        <option value="default" selected> Minimum Rating </option>
        <option value="five"> Five Stars </option>
        <option value="four"> Four Stars </option>
        <option value="three"> Three Stars </option>
        <option value="two"> Two Stars </option>
        <option value="one"> One Star </option>
      </select>`;
	}

	function generateAddBookmarkForm() {

	}

	function render() {
		if(!store.adding) {
			// add buttons header
			$('#js-form-actions').html(generateButtonsHeader());
		}
	}

	function handleNewBookmarkClicked() {

		// change the store.adding value

		// re-render the page
	}

	function handleFilterSelected() {

	}

	function handleNewBookmarkSubmit() {

	}

	function handleBookmarkClicked() {

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