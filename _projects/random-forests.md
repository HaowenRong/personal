---
layout: project
project-no: 3
title: 'Research Paper: Random Forests in Detecting Credit Card Fraud'
desc: A group research paper 
year: 2025
permalink: /projects/:title/
tags: [Research]
icon: 'icons/LineiconsCreditCardMultiple.svg' 

---

<div class='section-background'>
  <div class='section-content'>
    <div class='content'>
      <p>
        This is a group project which investigated how effectively Random Forest classifiers can detect credit card fraud.
      </p>
      <h3 class='sub-heading'>Abstract</h3>
      <p>
        Credit card fraud detection presents a significant challenge in the financial sector, with global losses reaching $32 billion in 2021. The difficulty in identifying fraudulent transactions stems from the extreme class imbalance in fraud datasets, where fraudulent cases often account for less than 1% of total transactions, causing traditional machine learning models to favour the majority class and underperform. Random Forests were selected for this study due to their robustness, interpretability, and effectiveness in managing high dimensional data and class imbalance.
      </p>
      <p>
        The research focused on three key areas:
      </p>
      <ul>
        <li>
          The impact of data balancing techniques
        </li>
        <li>
          The role of model refinement
        </li>
        <li>
          The replicability of previous research outcomes
        </li>
      </ul>
      <p>
        Data balancing methods, including SMOTE, undersampling, and class weighting, were assessed for their influence on recall and overall performance. Model refinement techniques, such as boosting and bagging, were considered for improved detection, with hyper-parameter tuning further optimising performance. The results showed that Feature reduction based on importance metrics provided the best balance between precision and recall, while boosting techniques, particularly XGBoost, significantly enhanced fraud recall and F1-scores. The findings suggest that customised data balancing and refinement strategies can significantly enhance Random Forest performance in fraud detection, providing valuable insights for deploying machine learning models in real world financial systems.
      </p>
    </div>
  </div>
</div>

<div class='section-background'>
  <div class='section-content'>
    <div class='content'>
      <div class='project-links'>
        {% assign paperPath = '/public/assets/random-forests-in-detecting-credit-card-fraud.pdf' | relative_url %}
        {%
          include hyperlink-card.html
          img='https://api.iconify.design/solar:document-text-bold.svg'
          method='View Paper'
          display-link='random-forests-in-detecting-credit-card-fraud.pdf'
          link=paperPath
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