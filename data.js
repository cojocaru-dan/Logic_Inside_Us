// WRITE YOUR CODE BELOW THIS LINE
let favoriteBooks = [
	{
			title: "The Namesake",
			author: "Jhumpa Lahiri",
			year: 2003,
			isNewerThan2000: true,
			age: 20,
			characters: ["Ashoke", "Gogol", "Sonia", "Maxine"]
	},
	{
			title: "Norse Mythology",
			author: "Neil Gaiman",
			year: 2017,
			isNewerThan2000: true,
			age: 6,
			characters: ["Odin", "Thor", "Loki", "Freya"]
	}
];

for (let book of favoriteBooks) {
	console.log(book["title"]);
}

for (let i = 0; i < favoriteBooks.length; i++) {
	console.log(favoriteBooks[i].author);
}

if (favoriteBooks[0].isNewerThan2000 === true) {
	console.log(favoriteBooks[0].title);
}

if (favoriteBooks[0].isNewerThan2000 === true) {
	console.log("This book is newer than 2000: " + favoriteBooks[0].title);
} else {
	console.log("This book is older than 2000: " + favoriteBooks[0].title);
}

if (favoriteBooks[1].isNewerThan2000 === true) {
	console.log("This book is newer than 2000: " + favoriteBooks[1].title);
} else {
	console.log("This book is older than 2000: " + favoriteBooks[1].title);
}

if (favoriteBooks[0].isNewerThan2000 !== true) {
	console.log("This book is older than 2000: " + favoriteBooks[0].title);
} else {
	console.log("This book is newer than 2000: " + favoriteBooks[0].title);
}

if (favoriteBooks[1].isNewerThan2000 !== true) {
	console.log("This book is older than 2000: " + favoriteBooks[1].title);
} else {
	console.log("This book is newer than 2000: " + favoriteBooks[1].title);
}

if (favoriteBooks[0].year > 2000) {
	console.log("This book is newer than 2000: " + favoriteBooks[0].title);
} else {
	console.log("This book is older than 2000: " + favoriteBooks[0].title);
}

if (favoriteBooks[1].year > 2000) {
	console.log("This book is newer than 2000: " + favoriteBooks[1].title);
} else {
	console.log("This book is older than 2000: " + favoriteBooks[1].title);
}

for (let index = 0; index < favoriteBooks.length; index++) {
	if (favoriteBooks[index].year < 2000) {
		console.log("This book is older than 2000: " + favoriteBooks[index].title);
	} else {
		console.log("This book is newer than 2000: " + favoriteBooks[index].title);
	}
}

for (let book of favoriteBooks) {
	if (book.year < 2000) {
		console.log("This book is older than 2000: " + book.title);
	} else {
		console.log("This book is newer than 2000: " + book.title);
	}
}

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "favoriteBooks", content: favoriteBooks, type: "array"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport}
