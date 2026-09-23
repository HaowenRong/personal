---
layout: default
title: Home
---

<div class='section-background'>
  <div class='section-content'>
    {% include header.html title="Hi, I'm Haowen" %}
    <div class='content'>
      <div class='img-inline-text'>
        <div class='text'>
          <p>
            I’m a software engineer based in Liverpool who takes pride in building clean and reliable code bases.
          </p>
          <p>
            During my time at university, I gained a lot of experience working on HPC systems, large code bases, and collaborative research papers, which helped to shape how I approach performance, code design, and collaboration.
          </p>
          <p>
            Outside of University, I have been working on a few projects of my own, which you can find <a href='{{ site.baseurl }}/projects/'> here</a>.
          </p>
          <p>
            When I’m not working on a project, you may find me hiking, doing photography, or practising sports such as badminton or archery.
          </p>
        </div>
        <img src='./public/assets/DSC08972.jpg' fetchpriority="high" alt="alt">
      </div>
    </div>
  </div>
</div>

<div class='section-background section-background--alternative'>
  <div class='section-content'>
    {% include header.html title='My Projects' %}
    <ul id='projects-container' class='projects-container'>
      {% assign sortedPojects = site.projects | sort: 'year' | reverse %}
      {% for project in sortedPojects limit: 3 %}
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
      <li>
        {% include projects-link-btn.html %}
      </li>
    </ul>
  </div>
</div>

<div class='section-background'>
  <div class='section-content'>
    {% include header.html title='About this site' %}
    <div class='content'>
      <div class='about'>
        <p>
          Welcome to my website! This is a site I made to share more about myself and showcase some of my projects.
        </p>
        <p>
          Given the relatively small scope of this website, I’ve kept the design simple, opting to build it as a static and JavaScript-free website to optimise load times and page weight. It’s currently hosted on GitHub pages and built using Jekyll, leveraging GitHub pages native integration of jekyll. You can read in more depth <a href='{{ site.baseurl }}/projects/portfolio-website'>here.</a>
        </p>
        <p>
          This site uses the Archivo font from <a href='https://www.fontshare.com/fonts/archivo'>Fontshare</a>, and icons from <a href='https://icones.js.org/collection/pajamas'>Icones</a>.
        </p>
      </div>
    </div>
    {% include footer.html %}
  </div>
</div>