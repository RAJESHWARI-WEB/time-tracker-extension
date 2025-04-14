# time-tracker-extension

CODETECH IT SOLUTIONS PROJECT TASK-4

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: RAJESHWARI D

*INTERN ID*: CT04WL201

*DOMAIN*: FULL STACK DEVELOPMENT

*DURATION*: 4 WEEEKS

*MENTOR*: NEELA SANTOSH

*DESCRIPTION*: Description:

The Time Tracker & Productivity Analytics Chrome extension is a productivity tool designed to monitor and evaluate how users spend their time across different websites. Built using web technologies such as JavaScript, HTML, and the Chrome Extensions API, this project helps users stay mindful of their online habits by categorizing websites and tracking time spent on each.

At its core, this extension offers real-time monitoring of browser activity. It listens for tab switches and updates through Chrome’s event listeners (tabs.onActivated and tabs.onUpdated) to determine which tab is currently active. It then records the duration spent on each website and stores it locally using the Chrome Storage API. This allows users to revisit their browsing stats anytime without relying on external databases or services.

The background logic is housed in the background.js file, which handles tracking the active website and calculating the total time spent per domain. The extension resets and logs time when the user switches tabs or a tab finishes loading, ensuring accuracy in data collection.

In parallel, the content.js script categorizes each website visited as Productive, Unproductive, or Neutral. For instance, websites like GitHub, Stack Overflow, and Coursera are tagged as “Productive,” while YouTube, Facebook, and Twitter fall under “Unproductive.” All other sites are labeled “Neutral” by default. These classifications help users reflect on whether their browsing habits align with their productivity goals.

The extension includes a popup interface (popup.html), which is displayed when the user clicks the extension icon in the Chrome toolbar. This popup displays the total time spent on each domain and, optionally, its productivity classification. The user interface is clean and minimalistic, allowing for quick insights into browsing patterns without any distractions.

A manifest.json file defines the extension’s metadata, including its name, version, permissions (like access to tabs and local storage), and the required scripts. This file is essential for Chrome to recognize and run the extension correctly.

This project is particularly useful for students, remote workers, and anyone aiming to improve their time management skills. By visualizing how much time is being spent on various websites, users can make informed decisions about minimizing distractions and increasing focus.

Key Features:

Real-time tracking of website usage

Local storage of browsing data (no privacy concerns)

Automatic classification of websites by productivity level

Simple popup interface to view stats instantly

Lightweight, fast, and easy to use

Learning Outcomes: This project helps developers understand the fundamentals of:

Chrome Extension development

Using background and content scripts

Working with Chrome's tabs and storage APIs

Implementing time tracking logic

Basic web development (HTML, CSS, JavaScript)

Conclusion:

The Time Tracker & Productivity Analytics Chrome Extension is a practical and impactful tool for improving digital wellbeing. It seamlessly integrates into the browsing experience, delivering valuable insights in a non-intrusive way. Whether for personal use or as a portfolio project, this extension is an excellent example of how simple technologies can create powerful solutions for everyday challenges.

# OUTPUT

