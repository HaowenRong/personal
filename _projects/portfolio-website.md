---
layout: project
title: Portfolio Website
desc: A responsive, lightweight website build with Jekyll, and seamlessly hosted on GitHub Pages.
year: 2025
permalink: /projects/:title/
---

<div class='section-background'>
  <div class='section-content'>
    <div class='content'>
      <p>
        The website you’re currently viewing this on. I wanted a personal platform where I could share a bit about myself and show some of my projects. I felt that Linked in was too formal and rigid, and that GitHub too technical, so I decided to build my own website that I could fully customise and express myself.
      </p>
      <h3 class='sub-heading'>Technologies</h3>
      <p>
        I knew that the website would be relatively simple in scope. So when deciding on the technologies behind the website, I opted for a static website using HTML and CSS. While I could have easily used a framework like Next.js or Svelte, it would have come with far too much overhead and result in the page weight of the website being disproportionate to the actual content.
      </p>
      <h3 class='sub-heading'>Hosting</h3>
      <p>
        For hosting, I wanted something reliable with little hassle. Given that this would be a static website and that I was already storing my repo on GitHub, I opted to use GitHub pages which automatically makes deployments as pushes are made.
      </p>
      <h3 class='sub-heading'>Jekyll</h3>
      <p>
        During development I realised some of the limitations of using purely HTML. I noticed that many elements were hard coded, and I was repeating code that ordinarily I would have made into a component when using a framework. So I decided to integrate Jekyll, a static site generator, into the website. It brought some of the benefits of a framework such as the ability to create reusable components, and programmatic logic to HTML while having far less overhead and kept the site static. It was also already supported on GitHub pages which made this an easy decision.
      </p>
      <p>
        It significantly reduced the amount of duplicate code and made the site more scalable, allowing the site to automatically generate elem­ents based on files in a directory rather than hardcoded manually.
      </p>
      <h3 class='sub-heading'>UI</h3>
      <p>
        For the UI, I wanted something simple, uniform, and responsive. So I was very conscious of typography, size of elements, and interactive effects - using global CSS variables to keep fonts consistent, and standardising button effects to make interactive elements recognisable. I also designed the site with mobile devices in mind, ensuring that layouts worked comfortably on mobile displays. Many components adapt their structure and position to better suit smaller displays.
      </p>
      <p>
        A personal addition I made was moving the navi bar to the bottom on mobile displays. While unconventional, it keeps the navigation within thumbs reach which I believe makes the site more comfortable to navigate.
      </p>
    </div>
  </div>
</div>

<div class='section-background'>
  <div class='section-content'>
    {%
      include hyperlink-card.html
      img='https://api.iconify.design/pajamas:github.svg'
      method='View on GitHub'
      display-link='github.com/HaowenRong/personal'
      link='https://www.github.com/HaowenRong/personal'
    %}
  </div>
</div>