---
layout: sidenav-page
title: Test environments
permalink: /implementation/technical/test-environments/
sidenav_ref: implementation
parent: /implementation/technical/
---

Through the 2000s, releases of software were infrequent and painful because there was no way to guarantee everything would work like it was meant to. Thankfully, things have changed — thanks to cloud computing, test environments are simple and constant small-batch releases have become the norm.

A test environment is exactly what it sounds like: a cloned version of your production environment, a “mirror universe” that exists completely separately. You can deploy anything you think is production-ready onto the test universe and see what happens — no matter what happens, your entire production system is completely untouched.

Some of this is possible on-prem or in private clouds, but it’s considerably more difficult. In private clouds you’ll have to effectively run your own infrastructure as a service (IaaS); on-prem, you’ll need separate hardware, operating systems, virtual machines, etc. 

Designed and implemented properly, your test environments can mimic your production environment in every way except their capacity. (There’s no point to making them completely identical — you can do all the tests you need in a fraction of the space.) The disposability of cloud makes it possible to spin up and then destroy environments only when you need them, freeing up your resources to be used elsewhere the rest of the time; in public clouds, you’ll be able to use APIs to make the ways your test and production systems are built identical. 

It’s easy to create and then get rid of a new cloud infrastructure, but it’s difficult to make sure the data you use within it is appropriate. For example, if your production environment processes personally identifiable information (PII), you shouldn’t replicate that data without tight controls and a well-thought-out plan for who gets to access it. A simpler choice is to create a mock dataset that can be used in your test environment — that way it doesn’t matter who accesses it, and you don’t need to worry about any sensitive information potentially being exposed.
