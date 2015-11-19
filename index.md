---
layout: page
title: The Bluffton Clossman Story
tagline: Occasional snippets and life lessons from those on the coast
header-img: pumpkin-patch.jpg
---

My personal blog.
{% for post in site.posts %}
<article class="row" itemscope itemtype="http://schema.org/BlogPosting">
    <div class="col-sm-3 hidden-xs">
        <a itempropr="url" href="{{ BASE_PATH }}{{ post.url }}">
            <span class="fa fa-file-text fa-lg"></span>
        </a>
        <hr class="metaline" />
        <div class="additional-meta">
            <div class="meta-item">
                <span class="fa fa-user"></span>
                <span rel="author" itemprop="author">{{ post.author }}</span>
            </div>
            <div class="meta-item">
                <span class="fa fa-calendar"></span>
                <span rel="author" itemprop="datePublished">{{ post.date | date_to_string }}</span>
            </div>
        </div>
    </div>
    <div class="col-sm-9 content" itemprop="blogPost">
        <h2 class="entry-title" itemprop="title"><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></h2>
        <div class="entry" itemprop="articleBody">
            {{ post.content }}
        </div>
    </div>
</article>
{% endfor %}