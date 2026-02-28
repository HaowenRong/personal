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
      <div class='contact-list'>
        <h2>If you'd like to get in touch, feel free to:</h2>
        {%
          include contact.html
          img='https://api.iconify.design/pajamas:mail.svg'
          method='Send me an email'
          contact='HaowenRong@protonmail.com'
        %}
        {%
          include contact.html
          img='https://api.iconify.design/pajamas:linkedin.svg'
          method='Connect with me on Linkedin'
          contact='linkedin.com/in/alex-rong-71a808225'
        %}
        {%
          include contact.html
          img='https://api.iconify.design/pajamas:github.svg'
          method='Follow me on github to see my current projects'
          contact='github.com/HaowenRong'
        %}
      </div>
    </div>
    {% include footer.html %}
  </div>
</div>