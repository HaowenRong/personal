---
layout: project
project-no: 4
title: Aleidoscope Photography Portfolio
desc: A responsive web application to organise and showcase my photography projects.
year: 2026
permalink: /projects/:title/
tags: [Next.js, Vercel, Supabase, Web Development]
icon: 'icons/PixelCamera.svg'

---


<div class='section-background'>
  <div class='section-content'>
    <div class='content'>
      <p>
        Having a hobby in photography, I’ve explored many existing photography sharing platforms and felt that they were too restrictive, with limitations such as locked aspect ratios, heavy image compression, limited uploads, and various paywalls. So I built my own platform where I could share my photography projects how I wanted and express myself without these limitations.
      </p>
      <div class='figure-container-duel'>
        <button class='figure'>
          <img src='{{ site.baseurl }}/public/assets/aleidoscope-desktop-view.png' fetchpriority='high' alt='aleidoscope-desktop-view.png'>
          <p>Desktop View</p>
        </button>
        <button class='figure'>
          <img src='{{ site.baseurl }}/public/assets/aleidoscope-gallery-view.png' fetchpriority='high' alt='aleidoscope-gallery-view.png'>
          <p>Gallery View</p>
        </button>
      </div>
      <h3 class='sub-heading'>Technologies</h3>
        <p>
          For this project, I decide to use Next.js for its image optimisation and ecosystem. Its <code>&lt;Image&gt;</code> component allows images to be automatically scaled based on the viewing device and for lazy loading. On an image heavy site such as this it can greatly reduce the page weight on smaller devices. The ecosystem it provides also streamlined development, namely in database integration and the atlas page.
        </p>
      <h3 class='sub-heading'>Backend</h3>
        <p>
          For hosting and serving images, I opted to use Supabase. Its JavaScript client, <code>@supabase/supabase-js</code>, smoothly integrated with Next.js and provided storage and database access in one package. As well as that, Supabase also provides a built-in CDN for faster image delivery, and makes it easy to manage images and albums. Altogether, this made it a good fit for the project.
        </p>
      <h3 class='sub-heading'>Atlas</h3>
        <p>
          I take most of my photos while travelling, so I wanted a way to visualise where they were taken. To do this, I implemented lat and long values to each of my albums and displayed them into a customised interactive map using Leaflet. I call this page the Atlas and it provides visitors an alternative way to explore my work, and it’s a feature I found missing from other photography platforms or not very well implemented.
        </p>
      <button class='figure'>
        <img src='{{ site.baseurl }}/public/assets/aleidoscope-atlas-view.png' fetchpriority='high' alt='aleidoscope-atlas-view.png'>
        <p>Atlas View</p>
      </button>
      <h3 class='sub-heading'>UX</h3>
        <p>
          For this site I wanted to keep it simple and let the pictures speak for themselves. So the design and layout ended up being quite simple while functional, with most of the space being occupied by images.
        </p>
        <p>
          I also wanted to make sure that the site was comfortable to navigate. As mobile devices are so prevalent (probably the primary device this site will be viewed on), I wanted to ensure that all navigation was within the thumb zone. So on mobile displays the navigation is moved to bottom, which is a design pattern that I hope becomes more common.
        </p>
      <button class='figure'>
        <img src='{{ site.baseurl }}/public/assets/aleidoscope-mobile-view.png' fetchpriority='high' alt='aleidoscope-mobile-view.png'>
        <p>Mobile View</p>
      </button>
    </div>
  </div>
</div>

<div class='section-background'>
  <div class='section-content'>
    <div class='content'>
      <div class='project-links'>
        {%
          include hyperlink-card.html
          img='https://api.iconify.design/pajamas:github.svg'
          method='View on GitHub'
          display-link='github.com/HaowenRong/aleidoscope'
          link='https://github.com/HaowenRong/aleidoscope'
        %}
        {%
          include hyperlink-card.html
          img='https://api.iconify.design/pajamas:earth.svg'
          method='Visit Website'
          display-link='aleidoscope.vercel.app/'
          link='https://aleidoscope.vercel.app/'
        %}
      </div>
      
      <p>Tags: 
        {% for tag in page.tags %}
          {{ tag }}{% unless forloop.last %}, {% endunless %}
        {% endfor %}
      </p>
    </div>
  </div>
</div>