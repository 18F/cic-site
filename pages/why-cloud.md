---
layout: overview-page
title: Overview
permalink: /why-cloud/
sidenav_ref: why-cloud
link_cards:
  - 
    title: Change Management
    summary: Building buy-in and bringing people along
    link: /implementation/success-plans#change-management
---

For the better part of a decade, the Cloud First policy — government’s mandate to increase cloud adoption — has advised agencies on IT modernization. But while policy guidance has been clear, the reasons behind the mandate have not always been. 

Until recently, agencies had to maintain their own software (applications, programs, etc.) and hardware (servers, workstations, etc.) on-premises. Keeping these systems running required significant time, effort and cost; any time something broke, became obsolete, or no longer met requirements, it was the agency’s job to fix it or procure something new. 

Cloud computing reduces this burden on agencies by reducing the amount of work that needs to be done on-prem. Tasks like maintaining servers or updating software can be contracted out to organizations that specialize in these tasks — letting government teams focus their efforts on providing reliable, innovative services and meeting mission goals.

In addition to efficiency, cloud also lets teams be more agile in the ways they work. Traditionally, agencies had a hard limit on their computing power — however many machines they could afford or fit in a server room. But cloud computing works like a utility; it’s easy to raise or lower the amount of power needed, and you only pay for what you use. Instead of taking months to buy new machines or years to build new data centers, teams can simply rent space in someone else’s infrastructure and make adjustments as needed. 

If you’re thinking about getting on the cloud, we can help you get started. Visit the [cloud solutions]({{ site.baseurl }}/cloud-solutions) page to see a list of cloud products and services split up by business function, or learn more about building a business case in our [implementation]({{ site.baseurl }}/implementation) guidance.

<div class="project-container">
<div class="usa-grid">
    <article class="card usa-width-one-third">
      <a class="card-link" href="{{ site.baseurl }}/cloud-solutions" aria-hidden="true" tabindex="-1"></a>
      <div class="card-image"
        style="background-image: url(
        {% if project.image_thumbnail %}
          {{ project.image_thumbnail | prepend: site.baseurl }}
        {% else %}
          {{ project.image | prepend: site.baseurl }}
        {% endif %}
        );">
      </div>
      <div class="card-banner">
        <h3 class="card-description">
          <span>Cloud Solutions</span>
        </h3>
        <p class="card-summary">A list of FedRAMP-authorized products and services arranged by business function</p>
      </div>
    </article>
    <article class="card usa-width-one-third">
      <a class="card-link" href="{{ site.baseurl }}/acquisition" aria-hidden="true" tabindex="-1"></a>
      <div class="card-image"
        style="background-image: url(
        {% if project.image_thumbnail %}
          {{ project.image_thumbnail | prepend: site.baseurl }}
        {% else %}
          {{ project.image | prepend: site.baseurl }}
        {% endif %}
        );">
      </div>
      <div class="card-banner">
        <h3 class="card-description">
          <span>Acquisition</span>
        </h3>
        <p class="card-summary">How to compare vendors and procure the right solution</p>
      </div>
    </article>
    <article class="card usa-width-one-third">
      <a class="card-link" href="{{ site.baseurl }}/implementation" aria-hidden="true" tabindex="-1"></a>
      <div class="card-image"
        style="background-image: url(
        {% if project.image_thumbnail %}
          {{ project.image_thumbnail | prepend: site.baseurl }}
        {% else %}
          {{ project.image | prepend: site.baseurl }}
        {% endif %}
        );">
      </div>
      <div class="card-banner">
        <h3 class="card-description">
          <span>Implementation</span>
        </h3>
        <p class="card-summary">How to build a cloud-ready culture at your agency</p>
      </div>
    </article>
  </div>
</div>

