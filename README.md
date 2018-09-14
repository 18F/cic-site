# What is this?

This repository organizes project activity for development and operation of the [Cloud Information Center (CIC) site](https://federalist-proxy.app.cloud.gov/site/18f/cic-site/).

The CIC is a joint creation of the GSA's [Technology Transformation Services](https://www.gsa.gov/about-us/organization/federal-acquisition-service/technology-transformation-services) (TTS) team and GSA's [FAS Office of Information Technology Category](https://www.gsa.gov/about-us/organization/federal-acquisition-service/office-of-information-technology-category) (ITC).

GSA is a trusted partner for federal agencies seeking to buy goods and services. This creates an opportunity for GSA to help fellow agencies navigate early steps into cloud platforms and services, by providing guidance on how and where to get started. We're planning to a deliver a web-based prototype of a solution containing self-service information about cloud migration and acquisition options that is designed based on real user needs and which meets the stated business goals of ITC. The intent at this time is to create new content for `gsa.gov` informed by research into needs and goals of government agency cloud acquirers and industry cloud providers. This content will replace and improves on existing content currently on the GSA.gov site.

## Where is the site?
The latest version is available at https://federalist-proxy.app.cloud.gov/site/18f/cic-site/

Previews for changes in progress are noted in the pull-requests where they're being proposed and discussed.

## What's here
- Version control for the Jekyll code for actually generating the site
- Issues and stories related to development of the site
- The backend content management system for the site, in the form of pull-requests on the code stored here.

## What's elsewhere
- [Story Map](https://app.mural.co/invitation/mural/gsa6/1533622577595?sender=bretmogilefsky&key=f26d46a8-6fbf-4fe7-83c9-6f50878490e5) (Mural.ly)
- Mockups (InVision) - Links will be added when these resources exist
- Richer text artifacts
  - [User research](https://drive.google.com/drive/u/0/folders/1K4iDVkXgmyhHdF7YOJl62uyXHZGYH_IK) (Google Drive, accessible only to the project team)
  - [Presentations](https://drive.google.com/drive/u/0/folders/10UKDyLK1p7wSANPrPkE8sLcm_AJX5MlX) (Google Drive, accessible only to the project team)

---
## How do I set up and run the site locally?

This is a Jekyll site. It is a simple prototype site to showcase the work of an organization with a few different page types.

This particular site is made for use with [Federalist](https://github.com/18f/federalist) in mind.

This template uses the CSS and JavaScript from the [U.S. Web Design System](https://standards.18f.gov). To update the version of the system, [download the code](https://standards.usa.gov/getting-started/download/) from the website. Unzip the download and drop the entire folder (which should be named something like `uswds-1.1.0`) into `assets/vendor`.

In your `_config.yml`, update the `wds-version` value to the new version number. This should match the version number in the name of the folder you just downloaded. In the case of our example, it would look like this: `wds-version: 1.1.0`. You'll need to restart your Jekyll server to see the new code take effect.

### 
Things you'll want to have:

* An account on [Federalist](https://federalist.18f.gov/).
* [Jekyll](https://jekyllrb.com/docs/installation/) installed on your computer.

Fork this repo, and then clone to your local machine. Create a new branch for your changes:

```bash
~$ git clone https://github.com/18F/cic-site.git
~$ git checkout -b <your-branch-name>
```

When you have made your changes, you can test them locally using Jekyll. From the directory where you are working, simply type: `jekyll serve`. You should be able to view your changes at `http://127.0.0.1:4000/`.

Commit your changes and push to your forked repo:

```bash
~$ git commit -am 'My new changes!'
~$ git push origin <your-branch-name>
```

You can now submit a [pull request](https://help.github.com/articles/about-pull-requests/) to the 18F repo with your changes.


### Templates
#### Page 
Just a normal template that pulls in the global nav

### Sidebar Page
Has a sidebar layout that pulls from the `_data/navbar.yml` for the relavant section. That section is specified with the page metada key of `sidenav_ref: SITESECTION`

### Overview Page
Also includes the page sidbar basedo n the `sidenav_ref` key in the page meta data.

An overview page can also include option page cards. To add this you must include the `link_cards` key in the page metadata. A page can have as many cards as you would like.

For a card to be displayed it must be included as an yaml object item in the array. To do so please include the following. But please note that the link is optional:
```
link_cards:
  - 
    title: Item 1 Title
    summary: Summary of the item 1
    permalink: /item-1-link/
  - 
    title: Item 2 Title
    summary: Summary of the item 2

```
## 18F Open Source Policy

This repository contains the official [Open Source Policy](policy.md) of [18F](https://18f.gsa.gov/) (a digital delivery team within the [General Services Administration](http://gsa.gov)).

**[Read 18F's Open Source Policy.](policy.md)**

### 18F Team Guidance

For 18F team members, we have guidance on how 18F puts this policy into practice, and how we handle the narrow situations where we may delay or withhold the release of source code.

**[18F's open source team practices.](practice.md)**

### Credits

This policy was originally forked from the [Consumer Financial Protection Bureau's policy](https://github.com/cfpb/source-code-policy). Thanks also to [@benbalter](https://github.com/benbalter) for his [insights regarding CFPB's initial policy](http://ben.balter.com/2012/04/10/whats-missing-from-cfpbs-awesome-new-source-code-policy/).

### Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
