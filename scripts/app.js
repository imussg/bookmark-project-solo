'use strict';

/* global bookmarks, store, api */

$(document).ready(function() {
	api.getBookmarks((tempBookmarks) => {
		console.log(tempBookmarks);
		tempBookmarks.forEach((bookmark) => store.addBookmark(bookmark));
		bookmarks.render();
	});
	bookmarks.bindEventListeners();
	bookmarks.render();
});