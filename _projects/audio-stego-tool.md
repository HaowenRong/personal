---
layout: project
title: Audio Stego Tool
desc: A multi-platform desktop application enabling users to covertly embed and extract data within audio files, built with Python and GTK-4 graphical library.
year: 2025
permalink: /projects/:title/
---

<div class='section-background'>
  <div class='section-content'>
    <div class='content'>
      <p>
        This is a multi-platform desktop application I built that enables users to covertly embed secret text within FLAC and WAV audio files, and extract secret messages from stego audio files produced using the same tool. My implementation places emphasis on configurability, allowing users to adjust key parameters such as:
      </p>
      <ul>
        <li>
          Starting frame - where in the audio the message will be located
        </li>
        <li>
          Bit depth - how many bits to utilise per frame
        </li>
        <li>
          Channels - how many channels to use
        </li>
      </ul>
      <p>
        to influence how the algorithm behaves. This gives users more control over the algorithms process, allowing the same message to be to embedded into the same audio file in different ways.
      </p>
      <h3 class='sub-heading'>Python Development</h3>
      <p>
        I opted to use Python as the programming language for this project because of its extensive library that I leveraged throughout the project for processes such as accessing the raw Pulse Code Modulation (PCM) samples of audio files, and building the GUI. As well as its clear syntax, which improves code readability and maintainability.
      </p>
      <h3 class='sub-heading'>User Interface</h3>
      <p>
        For this project I wanted to provide users with different ways of using it. So the application offers both a Command Line Interface (CLI) for scripting and automation, and a Graphical User Interface (GUI) that serves as the primary interface for most users. While features were typically developed using the CLI first, I ensured that all CLI functionality was also available in the GUI as well.
      </p>
      <h3 class='sub-heading'>GTK-4 GUI</h3>
      <p>
        GTK-4 was chosen for the GUI as it offers an effective means of creating a modern, cross-platform interface, that is supported by Python through the PyGObject package. Its CSS theming, rich built-in components, and native cross-platform rendering simplified development without any compromises. As a result, the GUI is clean, intuitive, and compatible with Linux, Windows, and MacOS.
      </p>
      <button class='figure'>
        <img src='{{ site.baseurl }}/public/assets/GTK4-GUI.png' fetchpriority="high" alt="alt">
        <p>Application GTK-4 GUI</p>
      </button>
    </div>
  </div>
</div>
<div class='section-background'>
  <div class='section-content'>
    {%
      include hyperlink-card.html
      img='https://api.iconify.design/pajamas:github.svg'
      method='View on GitHub'
      display-link='github.com/HaowenRong/audio-stego-tool'
      link='https://www.github.com/HaowenRong/audio-stego-tool'
    %}
  </div>
</div>