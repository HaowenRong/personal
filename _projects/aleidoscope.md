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
        Feeling that existing image sharing sites were too restrictive, with things such as limited aspect ratios, heavy image compression, and generally unfavourable policies, I decided to make my own platform where I could share my photography projects and better express myself without these limitations.
      </p>
      <h3 class='sub-heading'>Technologies</h3>
        <p>
          For this project, I decided to use Next.js due to the project's scale and Next.js's built-in image optimisations. Next.js's Image component allows for images to be loaded lazily, as well as be given priority, so they can be loaded based on their importance. It also provides automatic resizing and compression based on the viewing device which optimises page weight.
        </p>
      <h3 class='sub-heading'>Backend</h3>
        <p>
          For hosting and serving images, I opted to use Supabase. Its JavaScript client, @supabase package, allowed for smooth integration which was great for development. As well as that, Supabase also provides a built-in CDN for faster image delivery, and images and albums to be easily managed. This all together made it an ideal fit for the project.
        </p>
      <h3 class='sub-heading'>UX</h3>
        <p>
          For this site I wanted to keep it simple and let the pictures speak for themselves while also featuring some commentary. So the design and layout ended up being quite simple while functional, with most of the space being occupied by images.
        </p>
        <p>
          I also wanted to make sure that the site was comfortable to navigate. As mobile devices are so prevalent (probably the primary device this site will be viewed on) and still getting bigger, I wanted to ensure that all navigation was within the thumb zone. So on mobile displays the navigation is moved to bottom, which is a design pattern that I hope becomes more common.
        </p>
      <button class='figure'>
        <img src='{{ site.baseurl }}/public/assets/aleidoscope-desktop-view.png' fetchpriority="high" alt="alt">
        <p>Desktop View</p>
      </button>
      <button class='figure'>
        <img src='{{ site.baseurl }}/public/assets/aleidoscope-gallery-view.png' fetchpriority="high" alt="alt">
        <p>Gallery View</p>
      </button>
      <button class='figure'>
        <img src='{{ site.baseurl }}/public/assets/aleidoscope-mobile-view.png' fetchpriority="high" alt="alt">
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