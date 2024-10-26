---
title: Welkom op mijn Eleventy-site
layout: base.njk
---

Welkom op de blog

{% for post in collections.posts %}
  - [{{ post.data.title }}]({{ post.url }})
{% endfor %}