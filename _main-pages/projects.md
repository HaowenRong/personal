---
layout: default
title: Projects
permalink: /projects/
order: 1
---

<div class='section-background'>
  {% include header.html title='Projects' %}
  <div class='section-content'>
    <ul id='projects-container' class='projects-container'>
      {% assign sortedPojects = site.projects | sort: 'year' | reverse %}
      {% for project in sortedPojects %}
      <li>
        {% include project-card.html
          title = project.title
          desc  = project.desc
          year  = project.year
          page  = project.url
          tags  = project.tags
          icon  = project.icon
        %}
      </li>
      {% endfor %}
    </ul>
  </div>
  {% include footer.html %}
</div>