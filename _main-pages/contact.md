---
layout: default
title: Contact
permalink: /contact/
order: 2
---

<div class='section-background'>
  <div class='section-content'>
    {% include header.html title='Contact' %}
    <div class='content'>
      <h2 class='sub-heading'>If you'd like to get in touch, feel free to:</h2>
      <div class='hyperlink-card-list'>
        {%
          include hyperlink-card.html
          img='https://api.iconify.design/pajamas:mail.svg'
          method='Send me an email'
          display-link='HaowenRong@protonmail.com'
          link='mailto:HaowenRong@protonmail.com'
        %}
        {%
          include hyperlink-card.html
          img='https://api.iconify.design/pajamas:linkedin.svg'
          method='Connect with me on Linkedin'
          display-link='linkedin.com/in/alex-rong-71a808225'
          link='https://www.linkedin.com/in/alex-rong-71a808225'
        %}
        {%
          include hyperlink-card.html
          img='https://api.iconify.design/pajamas:github.svg'
          method='Follow me on github to see my current projects'
          display-link='github.com/HaowenRong'
          link='https://www.github.com/HaowenRong'
        %}
      </div>
    </div>
  </div>
</div>