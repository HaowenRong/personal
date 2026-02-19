---
layout: default
title: Projects
---

<div class='section'>
  {% include header.html title='Projects' %}
  <ul id='projects-container' class='projects-container'>
    {% for project in site.projects %}
    <li>
      {% include project-card.html
         title = project.title
         desc  = project.desc
         year  = project.year
         page  = project.url
      %}
    </li>
    {% endfor %}
  </ul>
</div>