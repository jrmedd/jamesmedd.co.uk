## Overview

When I joined Blue Prism, there hadn't been a dedicated UX team for the entirety of the organisation's 20 year history. I was the second person to join the newly formed UX team, reporting directly to the head of experience.

Blue Prism's software is industry-leading in [Robotic Process Automation (RPA)](https://en.wikipedia.org/wiki/Robotic_process_automation) and allows businesses to automate repetitive tasks, increasing efficiency and reducing margin for error.

As part of the UX team, I helped to instigate several major organisational changes to the way the product team worked.

## Creation of a design system

![An example of a UI component – a checkbox – as a shared, reusable Figma component, with multiple variants and themes](bp-design-system)

* As the organisation moved away from Windows-only desktop software to the web, we pushed for a bespoke design system that was lightweight, modern, and accessible.
* We crafted a consistent design language that considered everything from colour choices (and combinations of colours) and fonts that were internationally consistent (for customers in Europe and Asia).
* A design backlog was generated based on user needs and use-cases. We collaboratively worked on components in Figma, then worked closely with front-end developers to ensure all requirements were met.
* Components were documented so that use cases and applications could be understand by all team members.
* As an experienced designer and developer of accessible web interfaces, I also provided examples of accessible attributes for developers.

![An example of a new component – a combobox – with suggested ARIA attributes and keyboard control behaviour prepared for UI developers](bp-aria)

## User research programme

* To support the design and development of the first web-enabled release, I worked with the product owner to recruit over 20 customers globally to participate in a user-centred design approach ([double diamond](https://en.wikipedia.org/wiki/Double_Diamond_(design_process_model))).
* Over the course of a month, I conducted individual ethnographic studies with each customer, observing their workflows and interviewing users to establish in detail how they used the existing software.
* After analysing the behaviours of each customer, we focused on key areas that we could improve in the web, including incident management for companies with thousands of automated processes and complex scheduling of automated processes.
* For the first time in the organisation's history, we invited developers and other members of the product team to attend user sessions, and played back key findings to the team so that everyone better understood how the software was used in practice and what user frustrations existed.
* With a better understanding of what we could improve for our users, we iterated over various design approaches, taking user feedback to see how they found each design, giving confidence and clarity to our development approach.

## Examples

### Complex process scheduling

![An example the existing scheduler user interface which, while capable, was not optimised for the complex process branching our customers demanded of it.](scheduler-legacy)
![The first draft of a scheduler interface, built using elements of our design system, to better reflect the logic applied by our customers.](scheduler-proposed-draft)

* We observed in multiple user sessions that our highest-performing customers were leveraging the software's scheduling functionality to do more than just scheduling.
* Customers were modularising their processes into groups of tasks that provided logical execution of authentication, queue-loading, spawning multiple simultaneous automations, and fault-reporting, all using an interface that was never optimally designed for this purpose.
* The sub-optimal interface meant that users had to use additional workarounds to restart failed schedules, maintain complex external documentation to understand the flow and operation of each of the scheduled automations, and, in some cases, create additional custom software to help manage the operation of these flows.
* Our proposed approach was to have an interface that better-reflected the logic our users were configuring, with the ability to "drop-in" at any point to execute tasks and quickly reconfigure each step if necessary.

### Proposing components in the design system

![An explainer of datepicker use cases in the context of our software, based on research.](datepicker-basics)
![Extended examples of how a datepicker might function in other locales.](datepicker-variations)

* Each time a component was proposed for a design system, we presented a specific use-case example that was particular to the software, such as a datepicker, or combobox.
* Figma greatly simplified development, as developers could inspect elements in our design system documents and see their attributes. At a certain point, colours, typography, focus states and line-weights were all modular elements of our theme that developers could consume without needing to know specific values and hex numbers etc.
* Beyond visual elements, behavioural and interactive controls were something I would document with additional slides for developers, and I would occasionally provide more detailed interactive examples using richer prototyping tools such as Framer.

![An example of a rich prototype created to demonstrate use cases of a number of components in the context of a new design.](bp-rich-prototype)
