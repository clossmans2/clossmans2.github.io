---
layout: page
title: The Bluffton Clossman Story
tagline: Occasional snippets and life lessons from those on the coast
---

My personal blog.

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
