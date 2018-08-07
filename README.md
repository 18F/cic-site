# What is this?

This repository organizes project activity for development and operation of the [Cloud Information Center (CIC) site](https://federalist-proxy.app.cloud.gov/site/18f/cic-site/). The CIC site is for blah blah blah.

The CIC is a joint creation of the GSA's Technology Transformation Services team and the FAS ITC in GSA (expand acronyms, link, etc).

## Where is the site?
The latest version is available at ...
 
Previews for changes in progress are noted in the pull-requests where they're being proposed and discussed.

## What's here
- Version control for the Jekyll code for actually generating the site
- Issues and stories related to development of the site
- The backend content management system for the site, in the form of pull-requests on the code stored here.

## What's elsewhere
- Story Map (mural)
- Mockups (invision)
- Richer text stuff
  - Research artifacts (gdrive)
  - presentations (gdrive)
  - project budget and burndown (gdrive)

---
# How do I set up and run the site locally?

This is a Jekyll site. It is a simple site to showcase the work of an organization with a few different page types.

This particular site is made for use with the [Federalist](https://github.com/18f/federalist) in mind.

This template uses the CSS and JavaScript from [U.S. Web Design System](https://standards.18f.gov). To update the version of the system, [download the code](https://standards.usa.gov/getting-started/download/) from the website. Unzip the download and drop the entire folder (which should be named something like `uswds-1.1.0`) into `assets/vendor`.

In your `_config.yml`, update the `wds-version` value to the new version number. This should match the version number in the name of the folder you just downloaded. In the case of our example, it would look like this: `wds-version: 1.1.0`. You'll need to restart your Jekyll server to see the new code take effect.

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
