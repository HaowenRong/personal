---
layout: project
title: Pioneer 2 Obstacle Avoidance
desc: Java-based implementations of obstacle avoidance algorithms for the Pioneer 2-DX robot in Webots simulations.
year: 2024
permalink: /projects/:title/
tags: [Java, Robotics, Obstacle Avoidance, Simulation]
---

<div class='section-background'>
  <div class='section-content'>
    <div class='content'>
      <p>
        These are Java-based implementation of the bug 1 and bug 2 algorithms I implemented for the Pioneer 2 robot in WeBots simulation environments.
      </p>
      <h3 class='sub-heading'>Objective</h3>
      <p>
        The objective for the robot is to get from its starting point to a set goal. With knowledge of its goal, the robot will try to make its way to the goal in a straight line. But what if there are obstacles in its way? It will need to navigate around them, which is what bug 1 and bug 2 aim to do.
      </p>
      <h3 class='sub-heading'>Bug 1 and 2 Algorithms</h3>
      <p>
        Both algorithms start off by rotating the robot to face the goal and moving towards it along the m-line, a direct line between the start position and end position. Where they differ is how they approach avoiding obstacles in its path.
      </p>
      <p>
        Bug 1 takes an exhaustive approach to obstacle avoidance. Where upon encountering an obstacle, the robot fully encircles its perimeter while recording the optimal point to leave. Once the full perimeter has been traversed, the robot returns to its recorded optimal point and carry on towards the goal.
      </p>
      <p>
        Bug 2 takes a greedy approach to obstacle avoidance. Like bug 1, it will begin to traverse the obstacle’s perimeter, but instead leaves as soon as it meets the m-line again. While this can yield significantly faster results, it risks looping where the robot becomes trapped circling concave obstacles.
      </p>
      <h3 class='sub-heading'>Results</h3>
      <p>In terms of speed, bug 1 is much slower than bug 2, reaching the goal in 1 minutes compared to bug 2's 2 minutes and 45 seconds. An almost 3 times faster time.</p>
      <div class='figure-container-duel'>
        <button class='figure'>
          <video autoplay loop muted playsinline>
            <source src='{{ site.baseurl }}/public/assets/bug1.mp4' type='video/mp4'>
          </video>
          <p>Bug 1 Traversal</p>
        </button>
        <button class='figure'>
          <video autoplay loop muted playsinline>
            <source src='{{ site.baseurl }}/public/assets/bug2.mp4' type='video/mp4'>
          </video>
          <p>Bug 2 Traversal</p>
        </button>
      </div>
      <p>While bug 2 is generally much faster bug 1, bug 1 can outperform bug 2 in more complex environments with concave shapes as mentioned before. In such cases, bug 2 may not be able to reach the goal at all as it gets stuck in a loop, whereas bug 1 will still find a path to the goal.</p>
      <div class='figure-container-duel'>
        <button class='figure'>
          <video autoplay loop muted playsinline>
            <source src='{{ site.baseurl }}/public/assets/bug1-concave.mp4' type='video/mp4'>
          </video>
          <p>Bug 1 Traversal with concave obstacle</p>
        </button>
        <button class='figure'>
          <video autoplay loop muted playsinline>
            <source src='{{ site.baseurl }}/public/assets/bug2-concave.mp4' type='video/mp4'>
          </video>
          <p>Bug 2 Traversal with concave obstacle</p>
        </button>
      </div>
      <h3 class='sub-heading'>Comparison</h3>
      <p>
        In comparison, bug 1 is robust and can reliably find a path regardless of obstacle shapes due to its exhaustive approach. Bug 2 on the other hand, is less robust and has the possibility of getting trapped in certain obstacles, but has a far greater potential speed, often reaching the goal much faster if not stuck.
      </p>
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
        display-link='github.com/HaowenRong'
        link='https://www.github.com/HaowenRong'
      %}
      <p>Tags: 
        {% for tag in page.tags %}
          {{ tag }}{% unless forloop.last %}, {% endunless %}
        {% endfor %}
      </p>
    </div>
  </div>
</div>