---
layout: default
title: Projects
---

<div class='section'>
  <div class='header'>
    <h1>
      My Projects
    </h1>
  </div>
  <div class='content'>
  </div>
  <ul id='projects-container' class='projects-container'>
    {% for project in site.projects %}
    <li>
      <a id='link' href='/public/assets/pages/projects/project1.html' class='project-card'>
        <div class='date-section'>
          <div class='date'>
            <h3 id='date'>{{ project.year }}</h3>
          </div>
        </div>
        <div class='content-section'>
          <div class='title'>
            <h2 id='title'>{{ project.title }}</h2>
          </div>
          <div class='desc'>
            <p id='desc'>{{ project.desc }}</p>
          </div>
        </div>
      </a>
    </li>
    {% endfor %}
  </ul>
</div>