## Overview

![A screenshot of the Manage your vehicle testing app](cvs)

This is undoubtedly one of the most complex services I've ever had to work on. The DVSA is responsible for safety on Britain's roads and tests hundreds of thousands of vehicles every year to ensure they meet safety standards. The existing business processes were complex and inefficient, the existing software packages slow and outdated, and a previous supplier had failed to deliver the project, meaning we had to pull on a lot of existing loose threads to get the job done.

As part of a wider initiative to modernise legacy processes at the Driver and Vehicle Standards Agency (DVSA), I contributed to the development of **"Manage Your Vehicle Testing"**, a GOV.UK-compliant service for Authorised Testing Facilities (ATFs). This project aimed to deliver a cloud-hosted solution that streamlined administrative tasks, provided real-time test data visibility, and ensured compliance with the GOV.UK Service Standard. The service passed its GOV.UK BETA service standard assessment in September 2022.

The service users include commercial customers – haulage operators and bus companies – private vehicle owners and importers, and staff members within the DVSA across multiple departments.

![A zoomed out look at the first draft of a CVS service blueprint](cvs_1)

I later returned to the project in 2024 to complete the Approvals Transformation Implementation, which covered applications for vehicle approvals.

## Project objectives  

The "Manage Your Vehicle Testing" service was created with the following objectives:  
- **Service compliance with GOV.UK standards:** Provide a user-centred service for ATFs to monitor testing activity at their sites.  
- **Legacy system modernisation:** Transition decades-old systems, encompassing vehicle technical and test data, financial transactions, and contractual information, to a secure, cloud-hosted platform.  

The service also supported DVSA’s broader goals, including enabling applications for vehicle tests, approvals, and replacement certificates.  

---

## Understanding the users: ATFs and their challenges  

ATFs are garages, typically run by haulage companies or bus operators, contracted by the DVSA to provide facilities for vehicle testing. These facilities rely on **pre-funded accounts (PFAs)** to manage payments for each test conducted.  

Before this service, ATFs faced numerous inefficiencies, relying heavily on direct communication with the DVSA for everyday administrative tasks. These included monitoring account balances, checking completed tests, and searching past transactions.  

The new service empowered ATFs to:  
- View their PFA balance and a running total of completed tests.  
- Access a detailed breakdown of transactions.  
- Manage top-ups directly through the portal.  
- Add or remove staff members in their organisation.  

I worked closely with the team to ensure these features addressed both user needs and technical requirements, making the service practical and intuitive.  

![One of many photos taken of different whiteboard planning sessions in which we attempted to breakdown a clear path to the future service](roadmap-planning)

---

## Designing a service blueprint for the DVSA  

The project began with an in-depth analysis of existing research and user insights. My team and I identified gaps in previous supplier documentation and conducted additional interviews with service users, including ATF operators, vehicle owners, and DVSA internal teams.  

We collaboratively developed a **service blueprint**, mapping end-to-end processes for the new system while accounting for interactions with other government agencies such as the DVLA, VCA, and HMRC.  

This blueprint evolved to include decision trees and documentation for complex workflows, such as vehicle certification and application processes. I contributed by helping translate these insights into actionable technical requirements for the development team.  

---

## Iterative design and accessibility

![A view of "Today's completed tests" within "Manage your vehicle testing"](cvs_2)

I led efforts to revisit the existing designs, which featured accessibility issues and a confusing information architecture. My key contributions included:  
- Aligning designs with user research findings.  
- Conducting A/B testing to evaluate changes, resulting in improved **System Usability Scale (SUS)** scores.  
- Ensuring compliance with **WCAG 2.1 AA standards** by manually testing with assistive technology, planning a full WCAG audit, and contributing as a web developer.  

By focusing on accessibility, I ensured the service could be used effectively by a wide range of users, including those with disabilities.  

---

## Research-driven multi-factor authentication 

<video src="/cvs.webm" caption="A walkthrough of our authentication prototypes, created in Figma"></video>

To meet security requirements, users accessing the service were required to use **multi-factor authentication (MFA)**. Recognising the diversity of ATF operators – who varied widely on the **digital inclusion scale** – I worked on designing and testing authentication pathways that accommodated varying levels of digital confidence.  

Through extensive user testing, we identified potential barriers, such as limited phone signal at remote ATF sites. I contributed to the design of an [assisted digital pathway](https://www.gov.uk/service-manual/helping-people-to-use-your-service/assisted-digital-support-introduction), allowing users to temporarily disable MFA via a landline. This approach balanced security with inclusivity, ensuring users could access the service without unnecessary friction.  

---

## Impact and legacy  

My contributions to the "Manage Your Vehicle Testing" service have transformed how ATFs interact with the DVSA. The service replaced outdated, manual processes with a streamlined, user-centred digital experience, empowering users and reducing administrative overhead for both ATFs and the DVSA.  

This project has been a rewarding example of how effective design, accessibility, and technical expertise can come together to deliver lasting value in the public sector.

![A zoomed out look at some of the more complex decision trees](branching)
