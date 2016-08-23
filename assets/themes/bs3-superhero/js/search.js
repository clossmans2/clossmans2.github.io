---
---

var docs = 
[ 
{% for post in site.posts limit:10 %}
  {% include themes/bs3-superhero/post.json %},
{% endfor %}
];
// init lunr
var idx = lunr(function () {
  this.field('title', 10);
  this.field('content');
})
// add each document to be index
for(var index in docs) {
  idx.add(docs[index]);
}

$(function() {
	$("#searchButton").click(function() {
		search();
	});
	$("#searchBox").keypress(function(e) {
		if(e.which == 13) {
			e.preventDefault();
			search();
		}
	});
})

function search() {
	var result = idx.search($('#searchBox').val());
	if(result && result.length > 0) {
		window.location.replace(result[0].ref);
	} else {
		alert('Found nothing');
	}
}