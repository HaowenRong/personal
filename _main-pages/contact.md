---
layout: default
title: Contact
permalink: /contact/
order: 2
---

<div class='section-background'>
  {% include header.html title='Contact' %}
  <div class='section-content'>
    <div class='content'>
      <h2 class='sub-heading'>If you'd like to get in touch, feel free to:</h2>
      <div class='hyperlink-card-list'>
        {%
          include hyperlink-card.html
          icon='icons/PajamasMail.svg'
          method='Send me an email'
          display-link='HaowenRong@protonmail.com'
          link='mailto:HaowenRong@protonmail.com'
        %}
        {%
          include hyperlink-card.html
          icon='icons/PajamasLinkedin.svg'
          method='Connect with me on Linkedin'
          display-link='https://www.linkedin.com/in/h-rong'
          link='https://www.linkedin.com/in/h-rong'
        %}
        {%
          include hyperlink-card.html
          icon='icons/PajamasGithub.svg'
          method='Follow me on github to see my current projects'
          display-link='github.com/HaowenRong'
          link='https://www.github.com/HaowenRong'
        %}
      </div>
    </div>
  </div>
</div>