'use strict';

/* global bookmarks, store, Item, api */

$(document).ready(function() {
	// api.getBookmarks((bookmarks) => {
	// 	bookmarks.forEach((bookmark) => store.addBookmark(bookmark));
	// 	bookmarks.render();
	// });
	bookmarks.bindEventListeners();
	bookmarks.render();
});