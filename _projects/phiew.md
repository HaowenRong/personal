---
layout: project
title: Personal Photography Gallery
desc: A photography portfolio website to organise and showcase my projects.
year: 2026
permalink: /projects/:title/
tags: [Next.js, Vercel, CDN, Web Development]
---


<div class='section-background'>
  <div class='section-content'>
    <div class='content'>
      <p>
        A website I'm developing with Next.js and hosting on Vercel to organise and showcase my photography projects. It's currently a work in progress. At the moment there is a front-end with a developed layout and page navigation along with some place holder images stored within the project. In the near future I hope to:
      </p>
      <ul>
        <li>
          Utilise and integrate a CDN so that images can be dynamically loaded rather than hard coded.
        </li>
        <li>
          Refine the interactive elements to be more intuitive for touch screen devices.
        </li>
        <li>
          Finalise a name for the project.
        </li>
      </ul>
    </div>
  </div>
</div>

<div class='section-background'>
  <div class='section-content'>
    <div class='content'>
      {%
        include hyperlink-card.html
        img='https://api.iconify.design/pajamas:github.svg'
        method='View on GitHub'
        display-link='github.com/HaowenRong/phiew'
        link='https://github.com/HaowenRong/phiew'
      %}
      <p>Tags: 
        {% for tag in page.tags %}
          {{ tag }}{% unless forloop.last %}, {% endunless %}
        {% endfor %}
      </p>
    </div>
  </div>
</div>