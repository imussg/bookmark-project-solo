'use strict';
/**
+ store:
 + addBookmark(item: Object)
 + findById(id: cuid
 + findAndUpdate(id: cuid, newData: Object)
 + findAndDelete(id: cuid)
 + bookmarks: Array[...Object]

**/

/**

store: {
	adding: Boolean,
	bookmarks: Array([...bookmark: {id: cuid, title, url, description, rating, isSelected, isVisible}])
	filterValue: Integer(0-5) [0 means no value has been selected in drop down]
}

**/

const store = (function() {

	const addBookmark = function(bookmark) {
		this.bookmarks.push(bookmark);
	};

	const findById = function(id) {
		return this.bookmarks.find(bookmark => bookmark.id === id);
	};

	const findAndUpdate = function(id, newData) {

	};

	const findAndDelete = function(id) {

	};

	const setFilter = function(value) {
		if(value >= 0 && value <= 5) {
			this.filter = value;
		}
	};

	const toggleAdding = function() {
		this.toggleAdding = !this.toggleAdding;
	}

	return {
		adding: false,
		bookmarks: [],
		filter: 0,
		
		addBookmark,
		findById,
		findAndUpdate,
		findAndDelete,
		setFilter,
		toggleAdding
	};
}());