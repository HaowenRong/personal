---
layout: default
title: Home
---

<div class='section-background'>
  <div class='section-content'>
    {% include header.html title="Hi, I'm Haowen" %}
    <div class='content'>
      <div class='img-inline-text'>
        <img src='/public/assets/DSC08972.jpg' alt="alt">
        <div class='text'>
          <p>
            I’m a software engineer who takes pride in writing clean and reliable code. You can view some of my projects <a href='/projects/'>here</a>. I'm currently based in Liverpool, UK, and open to relocating.
          </p>
          <p>
            I recently earned a masters degree from the University of Liverpool where I studied advanced computer science. Here I worked on several hands-on projects and collaborated with peers to research and develop effective solutions for projects.
          </p>
          <p>
            Outside of software development, I also enjoy doing photography, practising archery, and playing badminton.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class='section-background section-background--alternative'>
  <div class='section-content'>
    {% include header.html title='Projects' %}
    <ul id='projects-container' class='projects-container'>
      {% for project in site.projects limit: 3 %}
      <li>
        {% include project-card.html
          title = project.title
          desc  = project.desc
          year  = project.year
          page  = project.url
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
    {% include header.html title='About' %}
    <div class='content'>
      <div class='about'>
        <p>
          Welcome to my website! This is a site I made to share more about myself and showcase some of my projects.
        </p>
        <br>
        <p>
          Given the relatively small scope of this website, I’ve kept the design simple, opting to build it as a static and JavaScript-free website to optimise load times and page weight. It’s currently hosted on GitHub pages and built using Jekyll, leveraging GitHub pages native integration of jekyll, which allows for a very streamlined deployment.
        </p>
      </div>
    </div>
    {% include footer.html %}
  </div>
</div>