import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Icon from '../../components/common/Icon';

/* ─────────────────────────────────────────────
   GUIDE CONTENT DATABASE
───────────────────────────────────────────── */
const GUIDES = {
  'digital-privacy-act-2024-framework': {
    title: 'Digital Privacy Act: 2024 Framework',
    subtitle: 'A practitioner-grade analysis of compliance obligations, enforcement mechanisms and enterprise risk under the DPDP Act 2023.',
    category: 'Compliance',
    readTime: '12 min',
    publishedDate: 'March 14, 2024',
    updatedDate: 'April 2, 2024',
    author: {
      name: 'Elena Volkov',
      title: 'Senior Partner, Data Governance Practice',
      firm: 'LexArchitect Advisory',
      bio: 'Elena Volkov leads the Data Governance and Emerging Technology practice at LexArchitect. She has advised over 80 Indian enterprises on data protection compliance and has represented clients before the Data Protection Board of India.',
      initials: 'EV',
      accentColor: '#1e4d8c',
    },
    tags: ['DPDP Act 2023', 'Data Fiduciary', 'Consent Management', 'Enforcement', 'Enterprise Risk'],
    heroGradient: 'from-[#00152a] via-[#0a2744] to-[#1e4d8c]',
    accentColor: '#1e4d8c',
    sections: [
      {
        id: 'overview',
        title: 'Executive Overview',
        icon: 'flag',
        content: [
          {
            type: 'paragraph',
            text: 'The Digital Personal Data Protection Act, 2023 (DPDP Act) represents India\'s most consequential legislative intervention in the digital economy since the Information Technology Act, 2000. Receiving Presidential assent on August 11, 2023, the Act fundamentally reframes how personal data is collected, processed, and governed across both public and private sector data fiduciaries.'
          },
          {
            type: 'paragraph',
            text: 'Unlike its predecessor — the aborted Personal Data Protection Bill of 2019 — the DPDP Act takes a consent-first, rights-forward approach modeled on global best practices while adapting obligations to the Indian contextual realities of vernacular consent and the scale of the Aadhaar-linked digital economy.'
          },
          {
            type: 'alert',
            variant: 'warning',
            title: 'Enforcement Trigger',
            text: 'While the Act has received Presidential assent, most operative provisions are notified via subordinate legislation. The Data Protection Board (DPB) is expected to be operationally constituted by Q3 2024, marking the commencement of formal enforcement windows.'
          }
        ]
      },
      {
        id: 'key-obligations',
        title: 'Key Obligations for Data Fiduciaries',
        icon: 'checklist',
        content: [
          {
            type: 'paragraph',
            text: 'Any entity that determines the purpose and means of processing digital personal data qualifies as a Data Fiduciary under the Act. This encompasses SaaS platforms, fintech operators, e-commerce entities, healthcare providers, and government bodies alike.'
          },
          {
            type: 'list',
            style: 'numbered',
            heading: 'Core Statutory Duties',
            items: [
              'Obtain free, specific, informed, unconditional, and unambiguous consent before processing personal data — in the language specified by the Data Principal.',
              'Appoint a Data Protection Officer (DPO) if classified as a Significant Data Fiduciary (SDF) by the Central Government.',
              'Conduct Data Protection Impact Assessments (DPIAs) prior to processing that may result in high risk to Data Principals.',
              'Ensure data accuracy, completeness, and consistency through the period of storage.',
              'Implement technical and organizational measures to prevent personal data breaches; notify DPB and affected Data Principals within 72 hours of breach detection.',
              'Erase personal data upon withdrawal of consent or on fulfillment of processing purpose, unless retention is mandated by law.',
              'Comply with cross-border data transfer restrictions and Government-issued blacklist of jurisdictions.'
            ]
          },
          {
            type: 'callout',
            icon: 'corporate_fare',
            title: 'Significant Data Fiduciaries (SDFs)',
            text: 'SDFs face elevated obligations including mandatory DPO appointment, periodic audits by an independent data auditor, algorithmic accountability frameworks, and restrictions on cross-border data flows. Classification criteria are based on volume of data processed, sensitivity, national security implications, and risk to electoral democracy.'
          }
        ]
      },
      {
        id: 'rights',
        title: 'Rights of Data Principals',
        icon: 'person_check',
        content: [
          {
            type: 'paragraph',
            text: 'The DPDP Act codifies a robust set of rights for individuals (Data Principals) that enterprises must operationally accommodate. These rights must be exercisable through a simple, accessible mechanism — with responses due within 30 days.'
          },
          {
            type: 'grid',
            items: [
              { icon: 'info', title: 'Right to Information', text: 'Access a summary of personal data held and its processing basis.' },
              { icon: 'edit_note', title: 'Right to Correction', text: 'Demand correction, completion, or updating of inaccurate personal data.' },
              { icon: 'delete_sweep', title: 'Right to Erasure', text: 'Withdraw consent and demand deletion of personal data.' },
              { icon: 'support_agent', title: 'Right to Grievance Redress', text: 'Raise grievances with a designated officer within 30 days; escalate to DPB.' },
              { icon: 'how_to_reg', title: 'Right to Nomination', text: 'Nominate an individual to exercise rights in case of death or incapacity.' }
            ]
          }
        ]
      },
      {
        id: 'penalties',
        title: 'Penalties and Enforcement',
        icon: 'gavel',
        content: [
          {
            type: 'paragraph',
            text: 'The DPDP Act introduces a tiered penalty structure administered by the Data Protection Board of India, which functions as a quasi-judicial body with adjudicatory powers and the ability to impose civil penalties without criminal prosecution.'
          },
          {
            type: 'table',
            headers: ['Violation Category', 'Maximum Penalty'],
            rows: [
              ['Failure to implement reasonable data security safeguards', '₹250 Crore'],
              ['Failure to notify DPB of personal data breach', '₹200 Crore'],
              ['Non-compliance with children\'s data processing obligations', '₹200 Crore'],
              ['Obstruction of the Data Protection Board', '₹150 Crore'],
              ['Breach of any other provision of the Act or Rules', '₹50 Crore'],
            ]
          },
          {
            type: 'alert',
            variant: 'critical',
            title: 'No Vicarious Liability Cap',
            text: 'Unlike earlier drafts, the 2023 Act removed the aggregate penalty cap. Each breach event is an independent cause of action — enterprises operating with millions of Data Principals face multiplicative exposure. Penalty mitigation depends on the Board\'s assessment of promptness of disclosure, remediation, and prior compliance record.'
          }
        ]
      },
      {
        id: 'compliance-roadmap',
        title: 'Enterprise Compliance Roadmap',
        icon: 'route',
        content: [
          {
            type: 'paragraph',
            text: 'A phased, risk-prioritized implementation approach is advisable for most enterprises. The regulatory runway — between assent and DPB operationalization — must be used to build durable compliance infrastructure, not minimal checkbox compliance.'
          },
          {
            type: 'phases',
            items: [
              {
                phase: 'Phase 1',
                title: 'Data Mapping & Gap Analysis',
                duration: '0–60 Days',
                steps: ['Inventory all personal data categories and processing flows', 'Map lawful bases for each processing activity', 'Identify which vendor/processor relationships require DPA amendments']
              },
              {
                phase: 'Phase 2',
                title: 'Consent Architecture',
                duration: '60–120 Days',
                steps: ['Re-engineer consent capture UX for all touchpoints', 'Implement consent preference management (CPM) infrastructure', 'Translate consent notices into 8 scheduled Indian languages']
              },
              {
                phase: 'Phase 3',
                title: 'Rights Fulfillment Engine',
                duration: '120–180 Days',
                steps: ['Build Data Principal request handling portal', 'Establish 30-day SLA tracker and escalation protocol', 'Integrate with CRM, data warehouse, and marketing systems']
              },
              {
                phase: 'Phase 4',
                title: 'Governance & Audit',
                duration: '180+ Days',
                steps: ['Appoint or contract DPO with requisite qualifications', 'Commission first-cycle DPIA across high-risk processing activities', 'Schedule independent data audit (mandatory for SDFs)']
              }
            ]
          }
        ]
      },
      {
        id: 'conclusion',
        title: 'Strategic Counsel',
        icon: 'lightbulb',
        content: [
          {
            type: 'paragraph',
            text: 'The DPDP Act should not be treated as a compliance cost center but as an opportunity to differentiate on trust. Indian consumers — increasingly exposed to data breach news and global privacy discourse — are beginning to factor data practices into purchase and platform loyalty decisions.'
          },
          {
            type: 'paragraph',
            text: 'Enterprises that build privacy by design into their product and procurement cycles will be positioned to obtain SDF classification review waivers, negotiate favorable cyber insurance terms, and build the institutional credibility needed to navigate India\'s evolving data governance landscape.'
          },
          {
            type: 'callout',
            icon: 'star',
            title: 'LexArchitect Assessment',
            text: 'India\'s DPDP Act, while lighter in extraterritorial scope than the GDPR, is architecturally sound enough to anchor a serious enterprise privacy program. Enterprises that invest in genuine compliance — not just paper policies — will hold a structural advantage as Indian regulators increase enforcement intensity post-2024.'
          }
        ]
      }
    ],
    takeaways: [
      'The DPDP Act creates enforceable consent obligations for all digital personal data processing.',
      'Significant Data Fiduciaries face mandatory DPO appointment and independent audits.',
      'Penalties reach ₹250 Crore per violation event with no aggregate cap.',
      'A consent preference management (CPM) system is the most urgent operational priority.',
      'Data Principals\' rights must be fulfilled within 30 days through an accessible mechanism.',
    ],
    relatedGuides: [
      { slug: 'ip-protection-age-of-ai', title: 'IP Protection in the Age of AI', category: 'Intellectual Property' },
      { slug: 'modern-boardroom-protocol', title: 'The Modern Boardroom Protocol', category: 'Governance' }
    ]
  },

  'strategizing-your-series-a': {
    title: 'Strategizing Your Series A',
    subtitle: 'A boardroom-level framework for navigating term sheets, investor due diligence, and equity structuring in Indian venture capital rounds.',
    category: 'Investment',
    readTime: '25 min',
    publishedDate: 'February 8, 2024',
    updatedDate: 'March 28, 2024',
    author: {
      name: 'Dr. Alistair Thorne',
      title: 'Managing Partner, Capital Markets',
      firm: 'LexArchitect Advisory',
      bio: 'Dr. Alistair Thorne has structured over ₹2,400 Crore in venture and growth equity transactions across Indian and cross-border deals. With a D.Phil. in Law from Oxford, he specializes in SEBI-registered investment structures and FEMA-compliant foreign investment architecture.',
      initials: 'AT',
      accentColor: '#7c3aed',
    },
    tags: ['Venture Capital', 'Term Sheet', 'FEMA', 'SEBI', 'Cap Table', 'Anti-Dilution'],
    heroGradient: 'from-[#1e0a3c] via-[#3b1f6b] to-[#7c3aed]',
    accentColor: '#7c3aed',
    sections: [
      {
        id: 'overview',
        title: 'The Series A Landscape',
        icon: 'trending_up',
        content: [
          {
            type: 'paragraph',
            text: 'A Series A round in the Indian startup ecosystem is a high-stakes capital event that fundamentally transforms the relationship between founders and their company. Beyond securing growth capital, it establishes the corporate governance architecture, valuation precedent, and investor rights framework that will govern the company\'s trajectory through growth, re-financing, and eventual exit.'
          },
          {
            type: 'paragraph',
            text: 'The Indian Series A market in 2024 remains selective. Despite macroeconomic normalization, institutional investors — from Sequoia to Tiger Global to domestic funds like Nexus and Kalaari — are deploying capital with heightened scrutiny on unit economics, regulatory posture, and founder track record. The average Series A in India in 2023-24 was $7.2M, down from $11.4M in 2021 — reflecting valuation recalibration and investor preference for smaller, milestone-linked tranches.'
          }
        ]
      },
      {
        id: 'term-sheet',
        title: 'Anatomy of the Term Sheet',
        icon: 'description',
        content: [
          {
            type: 'paragraph',
            text: 'The term sheet is a non-binding letter of intent that establishes the commercial and governance framework for the investment. While non-binding (except for exclusivity and confidentiality provisions), it is the foundational negotiating document — and what is conceded here flows into binding legal agreements.'
          },
          {
            type: 'grid',
            items: [
              { icon: 'attach_money', title: 'Pre-Money Valuation', text: 'Sets dilution denominator. Negotiate on fully diluted basis. Unissued ESOP pool should be pre-money.' },
              { icon: 'pie_chart', title: 'Liquidation Preference', text: '1x non-participating preferred is market standard. Avoid participating preferred or stacked preferences that compress founder returns.' },
              { icon: 'shield', title: 'Anti-Dilution Rights', text: 'Broad-based weighted average is acceptable. Full ratchet anti-dilution is highly founder-unfavorable and should be resisted.' },
              { icon: 'how_to_vote', title: 'Voting Rights', text: 'Investor board seat, reserved matters (veto rights), and drag-along/tag-along provisions are standard but scope must be negotiated tightly.' },
              { icon: 'lock_clock', title: 'Vesting Schedules', text: '4-year vest with 1-year cliff is standard. Negotiate for acceleration on change of control (double-trigger preferred).' },
              { icon: 'event_repeat', title: 'Pro-rata Rights', text: 'Right to participate in future rounds. Major investor pro-rata is acceptable; avoid broad participation rights for all investors.' }
            ]
          }
        ]
      },
      {
        id: 'fema-compliance',
        title: 'FEMA & RBI Compliance for Foreign Investment',
        icon: 'account_balance',
        content: [
          {
            type: 'paragraph',
            text: 'Foreign Direct Investment (FDI) in Indian startups is governed by FEMA 1999 and the DPIIT FDI Policy. Most early-stage investments flow under the automatic route — bypassing RBI or Government approval — but require strict post-investment compliance.'
          },
          {
            type: 'list',
            style: 'bullet',
            heading: 'Critical FEMA Compliance Checklist',
            items: [
              'File Form FC-GPR with the AD Category-I Bank within 30 days of allotting shares to a foreign investor.',
              'Ensure pricing compliance — shares must not be issued below the Fair Market Value determined by a SEBI-registered Category-I Merchant Banker.',
              'Maintain contemporaneous documentation: term sheet, shareholders agreement, cap table, board resolution, and valuation report.',
              'If the investor entity is from a FATF non-compliant jurisdiction, Government approval (FIPB successor) is mandatory.',
              'Monitor downstream investment implications if the company holds investments in subsidiaries or associates.',
              'File Annual FEMA Return (FC-TRS, FLA Return) with RBI\'s FIRMS portal by July 15 of each financial year.'
            ]
          },
          {
            type: 'alert',
            variant: 'warning',
            title: 'Pakistan & China — Prior Approval Mandatory',
            text: 'Any investment — direct or beneficial — from entities incorporated in or citizens of Pakistan and China requires mandatory Government approval regardless of sector. Beneficial ownership of more than 10% triggers disclosure obligations that founders must proactively investigate for all foreign LPs.'
          }
        ]
      },
      {
        id: 'due-diligence',
        title: 'Surviving Investor Due Diligence',
        icon: 'search',
        content: [
          {
            type: 'paragraph',
            text: 'Institutional investors at Series A conduct comprehensive legal, financial, and technical due diligence before executing definitive agreements. Unresolved issues discovered during diligence become investor leverage — resulting in price chips, escrow arrangements, or deal break. Proactive diligence preparation is the founder\'s primary defensive strategy.'
          },
          {
            type: 'phases',
            items: [
              {
                phase: 'Legal DD',
                title: 'Corporate & IP Health Check',
                duration: '2–3 Weeks',
                steps: ['Cap table clean-up: resolve any ghost shares, unsigned agreements, or lapsed warrants', 'IP assignment: all founder and employee IP must be formally assigned to the company', 'Pending litigation, notices from SEBI/MCA/IT Department must be fully disclosed', 'Shareholder agreements from prior rounds: review for ROFR, ROFO, tag/drag provisions']
              },
              {
                phase: 'Financial DD',
                title: 'Unit Economics & Burn Analysis',
                duration: '1–2 Weeks',
                steps: ['Reconcile management accounts with statutory financials', 'CAC, LTV, payback period, and gross margin benchmarked against comparable cohorts', 'Deferred revenue, contingent liabilities, and related-party transactions disclosure', 'GST filing compliance — GSTR-1/3B reconciliation, any demand notices']
              },
              {
                phase: 'Technical DD',
                title: 'Product & Infrastructure',
                duration: '1 Week',
                steps: ['Code base quality, third-party library licenses (GPL contamination risk)', 'Data security architecture and pen test reports', 'SLA compliance with key enterprise customers', 'Scalability architecture for 10x growth assumptions']
              }
            ]
          }
        ]
      },
      {
        id: 'conclusion',
        title: 'Negotiation Philosophy',
        icon: 'handshake',
        content: [
          {
            type: 'paragraph',
            text: 'Series A negotiations are not a zero-sum game. The best outcomes — for both founders and investors — emerge from a principled framework: founders retain operational autonomy and economic upside, investors secure appropriate governance rights, downside protection, and exit mechanisms. The adversarial model of negotiation produces agreements that neither party can execute effectively.'
          },
          {
            type: 'callout',
            icon: 'star',
            title: 'LexArchitect Principle',
            text: 'Do not sign a term sheet you cannot read aloud to your co-founders and explain in plain language. If you cannot explain every clause, you do not understand the deal. Every ambiguity in a term sheet becomes a dispute in a definitive agreement.'
          }
        ]
      }
    ],
    takeaways: [
      'Negotiate ESOP pool as pre-money to minimize dilution before the round closes.',
      'Avoid participating preferred — insist on 1x non-participating liquidation preference.',
      'File FC-GPR within 30 days of allotment; late filing attracts compounding penalties.',
      'Proactively clean up IP assignments, cap table, and litigation risk before diligence.',
      'Double-trigger acceleration for founders on change-of-control events is negotiable and worth securing.',
    ],
    relatedGuides: [
      { slug: 'modern-boardroom-protocol', title: 'The Modern Boardroom Protocol', category: 'Governance' },
      { slug: 'digital-privacy-act-2024-framework', title: 'Digital Privacy Act: 2024 Framework', category: 'Compliance' }
    ]
  },

  'ip-protection-age-of-ai': {
    title: 'IP Protection in the Age of AI',
    subtitle: 'How Indian intellectual property law is adapting — and where it is failing — to address AI-generated works, model training, and algorithmic inventions.',
    category: 'Intellectual Property',
    readTime: '18 min',
    publishedDate: 'January 22, 2024',
    updatedDate: 'April 5, 2024',
    author: {
      name: 'Marcus Sterling',
      title: 'Head of IP & Technology Law',
      firm: 'LexArchitect Advisory',
      bio: 'Marcus Sterling has over 15 years of experience in Indian and cross-border intellectual property law, with particular expertise in patent prosecution, trade secret protection, and the rapidly evolving intersection of AI and IP. He has filed over 200 patent applications before the Indian Patent Office.',
      initials: 'MS',
      accentColor: '#065f46',
    },
    tags: ['Patents', 'Copyright', 'AI-Generated Works', 'Trade Secrets', 'Indian Patent Office', 'Training Data'],
    heroGradient: 'from-[#022c22] via-[#064e3b] to-[#065f46]',
    accentColor: '#065f46',
    sections: [
      {
        id: 'overview',
        title: 'The IP Paradox of AI',
        icon: 'psychology',
        content: [
          {
            type: 'paragraph',
            text: 'Artificial intelligence presents the Indian intellectual property regime with a paradox it was never designed to resolve: who owns an invention created by a machine? Who holds copyright in a novel written by a language model? Who bears liability when a model trained on copyrighted data outputs protected expression?'
          },
          {
            type: 'paragraph',
            text: 'India\'s IP statutes — the Patents Act 1970, the Copyright Act 1957, and the Trade Marks Act 1999 — are artifacts of a human-centric creative and inventive economy. Courts and the Indian Patent Office are now being asked to apply them to AI systems that generate, invent, and create at massive scale with minimal human creative input.'
          },
          {
            type: 'alert',
            variant: 'warning',
            title: 'Regulatory Vacuum',
            text: 'As of April 2024, India has no AI-specific IP legislation. The Ministry of Commerce and Industry\'s DPIIT has initiated stakeholder consultations, but there is no legislative timeline. Enterprises operate in a legal grey zone, relying on judicial interpretation of century-old doctrine applied to 21st-century technology.'
          }
        ]
      },
      {
        id: 'patents',
        title: 'AI-Generated Inventions & Patent Law',
        icon: 'lightbulb',
        content: [
          {
            type: 'paragraph',
            text: 'The Indian Patents Act 1970 requires an "inventor" to be a natural person. The Indian Patent Office has not yet formally ruled on an AI-named inventor application, but the global precedent from DABUS — where courts in the US, UK, and the EPO uniformly rejected AI inventorship — signals the direction of Indian jurisprudence.'
          },
          {
            type: 'list',
            style: 'bullet',
            heading: 'Current Indian Patent Office Practice for AI-Assisted Inventions',
            items: [
              'Disclose the human inventor(s) who directed or collaborated with the AI system — not the AI itself.',
              'Document the degree of human creative contribution: prompt engineering, output selection, and post-generation modification all strengthen inventorship claims.',
              'AI-generated inventions that require no human creative oversight are presumptively non-patentable under current Indian doctrine.',
              'Section 3(k) of the Patents Act excludes "mathematical methods, business methods, algorithms, and computer programs per se" — AI-implemented inventions must demonstrate technical effect to escape this exclusion.',
              'Machine learning models trained on patented methods may themselves constitute infringing use — the "learned function" problem is unresolved in Indian courts.'
            ]
          }
        ]
      },
      {
        id: 'copyright',
        title: 'Copyright & AI-Generated Works',
        icon: 'copyright',
        content: [
          {
            type: 'paragraph',
            text: 'Section 2(d) of the Indian Copyright Act defines "author" for computer-generated works as "the person who causes the work to be created." This human-causation requirement — while broader than US "human authorship" doctrine — is being tested as generative AI reduces human causation to a text prompt.'
          },
          {
            type: 'grid',
            items: [
              { icon: 'image', title: 'AI-Generated Images', text: 'Copyright belongs to the prompter if substantial creative direction is documented. Minimal-prompt outputs face validity challenges.' },
              { icon: 'code', title: 'AI-Written Code', text: 'Copyright in code generated by tools like GitHub Copilot vests in the user under most license agreements, but training data infringement liability remains contested.' },
              { icon: 'music_note', title: 'AI-Composed Music', text: 'Human arrangement, selection, and curation of AI outputs is the safest copyright basis. Pure AI composition has uncertain protectability.' },
              { icon: 'article', title: 'AI-Written Text', text: 'Substantial human editorial input (beyond prompting) is the threshold for copyright vesting. Pure ChatGPT output is legally vulnerable.' }
            ]
          },
          {
            type: 'callout',
            icon: 'policy',
            title: 'Training Data Liability',
            text: 'The use of copyrighted works to train AI models is the most commercially critical unresolved IP question in India. There is no "text and data mining" exception in the Indian Copyright Act (unlike the EU\'s DSM Directive). Systematic scraping of copyrighted content for AI training is a substantive infringement risk that Indian courts have not yet adjudicated.'
          }
        ]
      },
      {
        id: 'trade-secrets',
        title: 'Trade Secret Protection for AI Systems',
        icon: 'lock',
        content: [
          {
            type: 'paragraph',
            text: 'For AI enterprises, trade secrets — governed by contract law, the IT Act, and common law equity in India — are often a more commercially valuable and strategically appropriate protection mechanism than patents. Model weights, training data pipelines, and proprietary fine-tuning datasets are classic trade secret candidates.'
          },
          {
            type: 'list',
            style: 'numbered',
            heading: 'Building a Defensible AI Trade Secret Portfolio',
            items: [
              'Identify the specific technical elements that constitute the competitive advantage — model architecture choices, training data curation methodology, RLHF protocols.',
              'Implement need-to-know access controls, version-controlled model repositories, and authenticated API gateways.',
              'Require all employees, contractors, and collaborators with model access to execute NDAs with clearly defined scope and specific model version identification.',
              'Log all access events to model weights, training data, and evaluation infrastructure.',
              'Conduct annual trade secret audits to confirm protective measures remain proportionate to secrecy value.',
              'Register key employee NDAs under Indian Stamp Act — unstamped agreements face evidentiary challenges before Indian courts.'
            ]
          }
        ]
      },
      {
        id: 'conclusion',
        title: 'Strategic IP Architecture for AI Companies',
        icon: 'architecture',
        content: [
          {
            type: 'paragraph',
            text: 'AI companies in India must adopt a layered IP strategy: patents where technical effect can be demonstrated for human-directed AI inventions; copyright for curated AI-assisted outputs with documented human editorial control; trade secrets for model weights, training pipelines, and proprietary datasets; and contractual shields through robust MSAs, API terms, and employee IP assignment agreements.'
          },
          {
            type: 'callout',
            icon: 'star',
            title: 'LexArchitect Position',
            text: 'The window for establishing favorable judicial precedent in Indian AI-IP law is open. Enterprises that proactively document human creative and inventive contributions, maintain robust trade secret hygiene, and engage with DPIIT consultations as stakeholders will shape the regulatory environment rather than merely adapt to it.'
          }
        ]
      }
    ],
    takeaways: [
      'AI cannot be named as an inventor or author under current Indian law — human contribution must be documented.',
      'AI-implemented inventions must demonstrate technical effect to overcome the Section 3(k) exclusion.',
      'Training data scraping for AI is a substantive infringement risk with no safe harbour in Indian copyright law.',
      'Trade secrets are often a superior IP strategy to patents for AI model weights and training pipelines.',
      'Unstamped NDAs face evidentiary challenges — register key agreements under the Stamp Act.',
    ],
    relatedGuides: [
      { slug: 'digital-privacy-act-2024-framework', title: 'Digital Privacy Act: 2024 Framework', category: 'Compliance' },
      { slug: 'strategizing-your-series-a', title: 'Strategizing Your Series A', category: 'Investment' }
    ]
  },

  'modern-boardroom-protocol': {
    title: 'The Modern Boardroom Protocol',
    subtitle: 'A definitive governance framework for independent directors, board committees, and fiduciary obligations under the Companies Act 2013 and SEBI LODR.',
    category: 'Governance',
    readTime: '15 min',
    publishedDate: 'March 1, 2024',
    updatedDate: 'April 10, 2024',
    author: {
      name: 'Alistair Thorne',
      title: 'Managing Partner, Capital Markets',
      firm: 'LexArchitect Advisory',
      bio: 'Alistair Thorne advises boards of listed and unlisted Indian companies on corporate governance, regulatory compliance, and boardroom disputes. He has represented independent directors in SEBI enforcement proceedings and has served as an NCLT-appointed administrator in insolvency matters.',
      initials: 'AT',
      accentColor: '#92400e',
    },
    tags: ['Corporate Governance', 'Independent Directors', 'Companies Act', 'SEBI LODR', 'Board Committees', 'Fiduciary Duty'],
    heroGradient: 'from-[#1c0a00] via-[#451a03] to-[#92400e]',
    accentColor: '#92400e',
    sections: [
      {
        id: 'overview',
        title: 'The Governance Imperative',
        icon: 'domain',
        content: [
          {
            type: 'paragraph',
            text: 'Indian corporate governance has undergone seismic transformation over the past decade. The Companies Act 2013, SEBI\'s Listing Obligations and Disclosure Requirements (LODR) Regulations 2015, and the IICA\'s Code for Independent Directors have collectively created one of the world\'s most demanding governance frameworks for listed entities — and a rapidly evolving standard for unlisted companies as well.'
          },
          {
            type: 'paragraph',
            text: 'The failures of governance at IL&FS, Satyam, and more recently at Yes Bank and Byju\'s have accelerated both regulatory action and institutional investor expectations. For boards, genuine governance is no longer a compliance cost — it is the difference between institutional capital at scale and retail-only investor bases.'
          }
        ]
      },
      {
        id: 'board-composition',
        title: 'Board Composition Requirements',
        icon: 'groups',
        content: [
          {
            type: 'paragraph',
            text: 'Companies Act 2013, read with SEBI LODR for listed entities, mandates specific minimum standards for board composition. These requirements exist to ensure diversity of perspective, independence of oversight, and elimination of concentration of control.'
          },
          {
            type: 'table',
            headers: ['Entity Type', 'Min. Board Size', 'Independent Directors', 'Woman Director', 'MD/WTD Required'],
            rows: [
              ['Listed Public Company', '6 directors', '1/3rd of total strength', 'At least 1', 'Yes'],
              ['Unlisted Public Company (paid-up capital ≥ ₹10 Cr)', '3 directors', '2 Independent Directors', 'No', 'No'],
              ['Private Company', '2 directors', 'Not mandatory', 'No', 'No'],
              ['One Person Company', '1 director', 'Not applicable', 'No', 'No']
            ]
          },
          {
            type: 'alert',
            variant: 'warning',
            title: 'Listed Entity Penalty for Non-Compliance',
            text: 'SEBI LODR Regulation 17 non-compliance triggers fines of ₹5 lakh per day for the first 60 days and ₹10 lakh per day thereafter for continued non-compliance with board composition requirements. Stock exchange-driven suspension of trading is a further sanction for persistent non-compliance.'
          }
        ]
      },
      {
        id: 'committees',
        title: 'Mandatory Board Committees',
        icon: 'account_tree',
        content: [
          {
            type: 'paragraph',
            text: 'Companies Act 2013 and SEBI LODR mandate the constituted of independent board committees with defined compositions, quorums, and MoE (Minutes of Evidence) protocols. These are not delegatory mechanisms — they are primary governance structures with direct fiduciary responsibility.'
          },
          {
            type: 'phases',
            items: [
              {
                phase: 'Audit Committee',
                title: 'Financial Oversight & Internal Control',
                duration: 'Min. 4 Meetings / Year',
                steps: [
                  'Review quarterly and annual financial statements before board approval',
                  'Appoint, evaluate, and recommend removal of internal and statutory auditors',
                  'Oversee related-party transactions beyond materiality thresholds',
                  'Review adequacy of internal control systems and risk management framework',
                  'Investigate whistleblower complaints referred by the Board'
                ]
              },
              {
                phase: 'NRC',
                title: 'Nomination & Remuneration Committee',
                duration: 'As Required (Min. 1/Year)',
                steps: [
                  'Frame and review remuneration policy for directors, KMPs, and senior management',
                  'Evaluate independence criteria for proposed independent directors',
                  'Recommend board succession planning and talent pipeline protocols',
                  'Assess performance of individual board members and the board as a whole'
                ]
              },
              {
                phase: 'SRC',
                title: 'Stakeholders Relationship Committee',
                duration: 'Quarterly',
                steps: [
                  'Oversee redress of shareholder and investor grievances',
                  'Monitor transfer of unclaimed dividends to IEPF',
                  'Review demat request processing timelines and NSDL/CDSL interface',
                  'Report on grievance resolution metrics to the Board'
                ]
              },
              {
                phase: 'CSR Committee',
                title: 'Corporate Social Responsibility',
                duration: 'As Required',
                steps: [
                  'Formulate and recommend the annual CSR policy (2% of average net profit)',
                  'Recommend activities, beneficiary identification, and implementing agency selection',
                  'Monitor CSR expenditure and review impact assessments',
                  'Oversee reporting in the Board\'s Annual Report (CSR Report format)'
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'independent-directors',
        title: 'Independent Director Obligations',
        icon: 'person_check',
        content: [
          {
            type: 'paragraph',
            text: 'Independent Directors bear the heaviest governance burden in the modern Indian boardroom. They are simultaneously the primary protection mechanism for minority shareholders, the regulator\'s enforcement lever (via MCA/SEBI actions against non-compliant boards), and the audit trail for institutional investors in governance controversies.'
          },
          {
            type: 'list',
            style: 'bullet',
            heading: 'The Independent Director\'s Protocol',
            items: [
              'Register on the Indian Institute of Corporate Affairs (IICA) databank and pass requisite assessments — failure to register is now a disqualification condition under the Companies Act.',
              'Attend at least 75% of board meetings annually — persistent non-attendance triggers automatic disqualification without the company\'s ability to waive it.',
              'Any transaction between the company and an entity with any family or financial connection to the ID must be disclosed immediately and recused from voting.',
              'On becoming aware of an ongoing fraud, immediately notify the Audit Committee and, if unaddressed within 45 days, report directly to the Board and thereafter to the MCA.',
              'Maintain personal liability insurance (Directors & Officers — D&O) as a risk management non-negotiable.',
              'Under Section 166, fiduciary duty to the company supersedes duty to nominating shareholders — this must be operationally lived, not just stated.'
            ]
          }
        ]
      },
      {
        id: 'conclusion',
        title: 'Building a Governance Culture',
        icon: 'lightbulb',
        content: [
          {
            type: 'paragraph',
            text: 'Governance frameworks are only as effective as the culture in which they operate. A board that complies with every LODR requirement but fails to ask hard questions, challenge management assumptions, or protect minority interests is constitutionally compliant but governance-deficient. The objective of the Modern Boardroom Protocol is not tick-box compliance — it is the institutionalization of accountability as a competitive asset.'
          },
          {
            type: 'callout',
            icon: 'star',
            title: 'LexArchitect Recommendation',
            text: 'Invest in a board effectiveness evaluation conducted by an independent external facilitator at least once every three years. Listed companies are required to do this; unlisted companies that do so voluntarily signal the quality of governance that attracts long-term institutional capital at premium valuations.'
          }
        ]
      }
    ],
    takeaways: [
      'Listed companies must have at least 1/3rd independent directors and at least one woman director.',
      'SEBI LODR non-compliance on board composition attracts penalties of up to ₹10 lakh per day.',
      'Independent Directors must register on the IICA databank — failure is a statutory disqualification.',
      'All four mandatory committees (Audit, NRC, SRC, CSR) must have independent chairpersons.',
      'D&O liability insurance is a non-negotiable protection for independent directors, not a luxury.',
    ],
    relatedGuides: [
      { slug: 'strategizing-your-series-a', title: 'Strategizing Your Series A', category: 'Investment' },
      { slug: 'digital-privacy-act-2024-framework', title: 'Digital Privacy Act: 2024 Framework', category: 'Compliance' }
    ]
  },

  'pvt-ltd-incorporation': {
    title: 'Incorporating a Private Limited Company in India',
    subtitle: 'A foundational walkthrough of the MCA V3 portal registration, DIN filing, and constitutional drafting for Indian startups.',
    category: 'Corporate',
    readTime: '10 min',
    publishedDate: 'April 5, 2024',
    updatedDate: 'April 11, 2024',
    author: {
      name: 'Elena Volkov',
      title: 'Senior Partner, Data Governance',
      firm: 'LexArchitect Advisory',
      bio: 'Elena specializes in corporate formation and governance architecture for tech-driven enterprises in the Indian market.',
      initials: 'EV',
      accentColor: '#1e4d8c',
    },
    tags: ['Companies Act 2013', 'MCA V3', 'SPICe+', 'Pvt Ltd', 'Digital Signatures'],
    heroGradient: 'from-[#00152a] via-[#0a2744] to-[#1e4d8c]',
    accentColor: '#1e4d8c',
    sections: [
      {
        id: 'overview',
        title: 'The Incorporation Lifecycle',
        icon: 'apartment',
        content: [
          {
            type: 'paragraph',
            text: 'Incorporating a Private Limited Company is the most robust way to build a scalable business in India. It provides limited liability protection, a distinct legal identity, and the ability to raise institutional capital through equity issuance.'
          },
          {
            type: 'phases',
            items: [
              {
                phase: 'Filing 1',
                title: 'DSC & DIN Issuance',
                duration: '1-2 Days',
                steps: ['Apply for Class 3 Digital Signature Certificate (DSC)', 'Obtain Director Identification Number (DIN) for all proposed directors']
              },
              {
                phase: 'Filing 2',
                title: 'RUN Name Approval',
                duration: '2-3 Days',
                steps: ['File Reserve Unique Name (RUN) application with MCA', 'Ensure name compliance with Rule 8 of Company Incorporation Rules']
              },
              {
                phase: 'Filing 3',
                title: 'SPICe+ Registration',
                duration: '3-5 Days',
                steps: ['Draft MoA and AoA via e-forms INC-33 and INC-34', 'Submit integrated SPICe+ form for PAN and TAN issuance']
              }
            ]
          }
        ]
      }
    ],
    takeaways: [
      'Pvt Ltd offers the best structure for raising venture capital.',
      'A minimum of 2 directors and 2 shareholders is required.',
      'Class 3 DSC is mandatory for all electronic filings on the MCA portal.',
    ],
    relatedGuides: [
      { slug: 'esop-guide', title: 'ESOP Guide for Indian Startups', category: 'Employment & Equity' },
      { slug: 'strategizing-your-series-a', title: 'Strategizing Your Series A', category: 'Investment' }
    ]
  },

  'esop-guide': {
    title: 'ESOP Guide for Indian Startups',
    subtitle: 'Designing equity-based compensation structures that align founder and employee interests under Indian regulatory frameworks.',
    category: 'Employment & Equity',
    readTime: '15 min',
    publishedDate: 'January 10, 2024',
    updatedDate: 'April 1, 2024',
    author: {
      name: 'Dr. Alistair Thorne',
      title: 'Managing Partner, Capital Markets',
      firm: 'LexArchitect Advisory',
      bio: 'Dr. Thorne has structured employee equity pools for over 100 Indian startups, from seed to pre-IPO stages.',
      initials: 'AT',
      accentColor: '#7c3aed',
    },
    tags: ['Equity', 'Employee Stock Options', 'Vesting', 'Income Tax', 'SEBI'],
    heroGradient: 'from-[#1e0a3c] via-[#3b1f6b] to-[#7c3aed]',
    accentColor: '#7c3aed',
    sections: [
      {
        id: 'overview',
        title: 'Equity Alignment Strategy',
        icon: 'pie_chart',
        content: [
          {
            type: 'paragraph',
            text: 'Employee Stock Option Plans (ESOPs) are critical for attracting top-tier talent in the competitive Indian tech landscape. They provide a mechanism for employees to participate in the value creation they help drive.'
          },
          {
            type: 'list',
            style: 'numbered',
            heading: 'Key Structural Elements',
            items: [
              'ESOP Pool Sizing: Typically 10-15% of the fully diluted cap table.',
              'Vesting Schedule: Standard 4-year vesting with a 1-year cliff.',
              'Exercise Price: The strike price at which options convert to equity.',
              'Tax Implications: Perquisite tax at exercise and Capital Gains at sale.'
            ]
          }
        ]
      }
    ],
    takeaways: [
      'Grant letters must clearly define vesting and exercise protocols.',
      'Options are taxed as perquisites at the time of exercise based on FMV.',
      'A 1-year cliff is standard to ensure long-term alignment.',
    ],
    relatedGuides: [
      { slug: 'strategizing-your-series-a', title: 'Strategizing Your Series A', category: 'Investment' },
      { slug: 'pvt-ltd-incorporation', title: 'Incorporating a Pvt Ltd', category: 'Corporate' }
    ]
  },

  'gst-audit': {
    title: 'GST Compliance Audit Checklist',
    subtitle: 'Internal protocols for reconciling GSTR-2B with GSTR-3B and maintaining a clean compliance record for GST scrutiny.',
    category: 'Taxation',
    readTime: '20 min',
    publishedDate: 'January 25, 2024',
    updatedDate: 'March 15, 2024',
    author: {
      name: 'Marcus Sterling',
      title: 'Head of IP & Technology Law',
      firm: 'LexArchitect Advisory',
      bio: 'Marcus oversees multi-jurisdictional compliance audits for high-growth enterprises.',
      initials: 'MS',
      accentColor: '#065f46',
    },
    tags: ['GST', 'Compliance', 'Audit', 'Taxation', 'Reconciliation'],
    heroGradient: 'from-[#022c22] via-[#064e3b] to-[#065f46]',
    accentColor: '#065f46',
    sections: [
      {
        id: 'overview',
        title: 'The Audit Protocol',
        icon: 'fact_check',
        content: [
          {
            type: 'paragraph',
            text: 'GST readiness is about continuous reconciliation. Discrepancies between input tax credits (ITC) claimed and supplier filings are the primary cause of GST scrutiny notices.'
          },
          {
            type: 'grid',
            items: [
              { icon: 'receipt_long', title: 'Inward Supplies', text: 'Verify all purchase invoices against GSTR-2B reflected on the portal.' },
              { icon: 'description', title: 'Outward Supplies', text: 'Ensure GSTR-1 sales data matches your ledger exactly.' },
              { icon: 'payments', title: 'Payment Liability', text: 'Calculate final liability after ITC adjustment in GSTR-3B.' },
              { icon: 'verified', title: 'Annual Return', text: 'Reconcile monthly filings with the Annual Return (GSTR-9).' }
            ]
          }
        ]
      }
    ],
    takeaways: [
      'ITC can only be claimed if reflected in the supplier\'s GSTR-1.',
      'E-invoicing is mandatory for entities exceeding specified turnover thresholds.',
      'Maintain an internal audit log of all reconciliation adjustments.',
    ],
    relatedGuides: [
      { slug: 'companies-act-annual-return', title: 'Companies Act Annual Return', category: 'Compliance' },
      { slug: 'digital-privacy-act-2024-framework', title: 'Digital Privacy Act', category: 'Compliance' }
    ]
  },

  'companies-act-annual-return': {
    title: 'Companies Act 2013 — Annual Return Filing',
    subtitle: 'Section 92 compliance: A comprehensive guide to filing MGT-7 and avoiding MCA penalties for late disclosure.',
    category: 'Compliance',
    readTime: '15 min',
    publishedDate: 'October 10, 2023',
    updatedDate: 'April 5, 2024',
    author: {
      name: 'Alistair Thorne',
      title: 'Managing Partner, Capital Markets',
      firm: 'LexArchitect Advisory',
      bio: 'Alistair advises boards on statutory disclosure and corporate secretarial excellence.',
      initials: 'AT',
      accentColor: '#92400e',
    },
    tags: ['ROC', 'MGT-7', 'Annual Return', 'Compliance', 'Penalty Matrix'],
    heroGradient: 'from-[#1c0a00] via-[#451a03] to-[#92400e]',
    accentColor: '#92400e',
    sections: [
      {
        id: 'overview',
        title: 'Statutory Disclosure Matrix',
        icon: 'assignment_turned_in',
        content: [
          {
            type: 'paragraph',
            text: 'Filing the Annual Return (MGT-7) is a mandatory requirement for all companies under Section 92 of the Companies Act 2013. It provides the Registrar of Companies (ROC) with a detailed snapshot of the company\'s shareholding and governance at the close of the financial year.'
          },
          {
            type: 'list',
            style: 'bullet',
            heading: 'Key Filing Requirements',
            items: [
              'Data on shareholding patterns and changes during the financial year.',
              'Indebtedness details and registered charges.',
              'Promoter and director details including remuneration.',
              'Certification by a practicing Company Secretary for large entities.'
            ]
          }
        ]
      }
    ],
    takeaways: [
      'MGT-7 must be filed within 60 days of the Annual General Meeting (AGM).',
      'The penalty for late filing is ₹100 per day of delay.',
      'Accuracy in shareholding data is critical to avoid compounding of offences.',
    ],
    relatedGuides: [
      { slug: 'modern-boardroom-protocol', title: 'The Modern Boardroom Protocol', category: 'Governance' },
      { slug: 'gst-audit', title: 'GST Compliance Audit Checklist', category: 'Taxation' }
    ]
  },

  'dpiit-recognition': {
    title: 'Startup India DPIIT Recognition Guide',
    subtitle: 'Navigating the Startup India portal to secure DPIIT recognition, tax benefits, and regulatory exemptions.',
    category: 'Startup',
    readTime: '12 min',
    publishedDate: 'March 1, 2024',
    updatedDate: 'April 11, 2024',
    author: {
      name: 'Elena Volkov',
      title: 'Senior Partner, Data Governance',
      firm: 'LexArchitect Advisory',
      bio: 'Elena leads our startup acceleration desk, focusing on non-dilutive funding and regulatory recognition.',
      initials: 'EV',
      accentColor: '#b45309',
    },
    tags: ['Startup India', 'DPIIT', '80-IAC', 'Tax Exemption', 'Self-Certification'],
    heroGradient: 'from-[#2e1c0c] via-[#78350f] to-[#b45309]',
    accentColor: '#b45309',
    sections: [
      {
        id: 'overview',
        title: 'The Startup Advantage',
        icon: 'rocket_launch',
        content: [
          {
            type: 'paragraph',
            text: 'DPIIT recognition is the gateway for Indian startups to access the government\'s flagship benefits, including tax holidays, self-certification for labor laws, and fast-track patent processing.'
          },
          {
            type: 'phases',
            items: [
              {
                phase: 'Step 1',
                title: 'Portal Registration',
                duration: '1 Day',
                steps: ['Register on the Startup India portal with business details', 'Upload Certificate of Incorporation and innovation write-up']
              },
              {
                phase: 'Step 2',
                title: 'Innovation Assessment',
                duration: '10-15 Days',
                steps: ['Demonstrate innovation or improvement of existing processes', 'Submit supporting documents like pitch decks or patent filings']
              },
              {
                phase: 'Step 3',
                title: 'Benefit Application',
                duration: '30+ Days',
                steps: ['Apply for Section 80-IAC tax exemption', 'Utilize self-certification for EPF and Gratuity compliance']
              }
            ]
          }
        ]
      }
    ],
    takeaways: [
      'Entities must be less than 10 years old from the date of incorporation.',
      'The company must not be a result of splitting up or reconstruction of an existing business.',
      '80-IAC provides a tax holiday for 3 consecutive years out of 10.',
    ],
    relatedGuides: [
      { slug: 'strategizing-your-series-a', title: 'Strategizing Your Series A', category: 'Investment' },
      { slug: 'pvt-ltd-incorporation', title: 'Incorporating a Pvt Ltd', category: 'Corporate' }
    ]
  },
};

/* ─────────────────────────────────────────────
   SECTION RENDERERS
───────────────────────────────────────────── */
function ParagraphBlock({ text }) {
  return (
    <p className="text-[#374151] text-[17px] leading-[1.85] mb-6 font-body">
      {text}
    </p>
  );
}

function AlertBlock({ variant, title, text }) {
  const styles = {
    warning: { bg: 'border-amber-400', icon: 'warning', iconColor: 'text-amber-600', titleColor: 'text-amber-800', textColor: 'text-amber-700' },
    critical: { bg: 'border-red-400', icon: 'error', iconColor: 'text-red-600', titleColor: 'text-red-800', textColor: 'text-red-700' },
    info: { bg: 'border-blue-400', icon: 'info', iconColor: 'text-blue-600', titleColor: 'text-blue-800', textColor: 'text-blue-700' },
  };
  const s = styles[variant] || styles.info;
  return (
    <div className={`${s.bg} border-l-4 rounded-r-sm p-5 mb-6 flex gap-4`}>
      <Icon name={s.icon} size={20} className={`${s.iconColor} flex-shrink-0 mt-0.5`} />
      <div>
        <p className={`font-bold text-sm mb-1 ${s.titleColor}`}>{title}</p>
        <p className={`text-sm leading-relaxed ${s.textColor}`}>{text}</p>
      </div>
    </div>
  );
}

function CalloutBlock({ icon, title, text, accentColor }) {
  return (
    <div className="relative bg-[#00152a] text-white rounded-sm p-8 mb-6 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="relative z-10 flex gap-5">
        <div className="flex-shrink-0 w-10 h-10 rounded-sm flex items-center justify-center bg-white/10">
          <Icon name={icon} size={20} className="text-white" />
        </div>
        <div>
          <p className="font-headline font-bold text-base mb-2 text-white">{title}</p>
          <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}

function ListBlock({ style, heading, items, accentColor }) {
  return (
    <div className="mb-6">
      {heading && <p className="font-bold text-[#00152a] text-sm mb-4 uppercase tracking-widest">{heading}</p>}
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 items-start">
            {style === 'numbered' ? (
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full border border-clinical/10 text-xs font-bold flex items-center justify-center mt-0.5"
                style={{ color: accentColor }}
              >
                {i + 1}
              </span>
            ) : (
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5" style={{ backgroundColor: accentColor }} />
            )}
            <span className="text-[#374151] text-[15px] leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function GridBlock({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      {items.map((item, i) => (
        <div key={i} className="bg-transparent border border-[rgba(0,21,42,0.08)] rounded-sm p-5 flex gap-4 hover:border-[rgba(0,21,42,0.15)] transition-colors">
          <div className="w-8 h-8 rounded flex items-center justify-center bg-transparent border border-clinical/10 flex-shrink-0">
            <Icon name={item.icon} size={16} className="text-[#00152a]" />
          </div>
          <div>
            <p className="font-bold text-[#00152a] text-sm mb-1">{item.title}</p>
            <p className="text-slate-500 text-xs leading-relaxed">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function TableBlock({ headers, rows }) {
  return (
    <div className="overflow-x-auto mb-6 rounded-sm border border-[rgba(0,21,42,0.08)]">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#00152a] text-white">
            {headers.map((h, i) => (
              <th key={i} className="px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-widest">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'}>
              {row.map((cell, ci) => (
                <td key={ci} className={`px-5 py-4 text-[#374151] text-[13px] leading-relaxed ${ci === 0 ? 'font-medium' : ''}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PhasesBlock({ items, accentColor }) {
  return (
    <div className="space-y-4 mb-6">
      {items.map((item, i) => (
        <div key={i} className="border border-[rgba(0,21,42,0.08)] rounded-sm overflow-hidden">
          <div className="flex items-center gap-4 px-6 py-4 border-b border-[rgba(0,21,42,0.06)] bg-transparent">
            <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded border border-clinical/10" style={{ color: accentColor }}>
              {item.phase}
            </span>
            <p className="font-bold text-[#00152a] text-sm">{item.title}</p>
            <span className="ml-auto text-xs text-slate-400 font-medium hidden sm:block">{item.duration}</span>
          </div>
          <ul className="px-6 py-4 space-y-2">
            {item.steps.map((step, si) => (
              <li key={si} className="flex gap-2.5 items-start">
                <Icon name="check_circle" size={14} className="flex-shrink-0 mt-0.5" style={{ color: accentColor }} />
                <span className="text-[#374151] text-sm leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function renderContentBlock(block, accentColor, i) {
  switch (block.type) {
    case 'paragraph': return <ParagraphBlock key={i} text={block.text} />;
    case 'alert': return <AlertBlock key={i} {...block} />;
    case 'callout': return <CalloutBlock key={i} {...block} accentColor={accentColor} />;
    case 'list': return <ListBlock key={i} {...block} accentColor={accentColor} />;
    case 'grid': return <GridBlock key={i} {...block} />;
    case 'table': return <TableBlock key={i} {...block} />;
    case 'phases': return <PhasesBlock key={i} {...block} accentColor={accentColor} />;
    default: return null;
  }
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function GuideAnalysis() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);
  const [progress, setProgress] = useState(0);

  const guide = GUIDES[slug];

  useEffect(() => {
    if (!guide) return;
    setActiveSection(guide.sections[0]?.id);

    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? Math.round((scrolled / total) * 100) : 0);

      // Update active section based on scroll
      for (const section of guide.sections) {
        const el2 = document.getElementById(`section-${section.id}`);
        if (el2) {
          const rect = el2.getBoundingClientRect();
          if (rect.top <= 120) setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [guide]);

  if (!guide) {
    return (
      <main className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <Icon name="menu_book" size={48} className="text-primary/20 mx-auto mb-4" />
          <h1 className="text-2xl font-headline font-bold text-primary mb-2">Guide Not Found</h1>
          <p className="text-slate-400 mb-6">This analysis guide does not exist.</p>
          <Link to="/guides" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-sm text-sm font-bold hover:bg-primary/90 transition-colors">
            <Icon name="arrow_back" size={16} /> Back to Guides
          </Link>
        </div>
      </main>
    );
  }

  const scrollToSection = (id) => {
    document.getElementById(`section-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const CATEGORY_COLORS = {
    Compliance: '#1e4d8c',
    Investment: '#7c3aed',
    'Intellectual Property': '#065f46',
    Governance: '#92400e',
  };
  const accentColor = guide.accentColor || CATEGORY_COLORS[guide.category] || '#00152a';

  return (
    <main className="bg-[#f9fafb] min-h-screen">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-transparent">
        <div
          className="h-full transition-all duration-100"
          style={{ width: `${progress}%`, backgroundColor: accentColor }}
        />
      </div>

      {/* ── HERO ─────────────────────────────── */}
      <header className={`relative bg-gradient-to-br ${guide.heroGradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="max-w-[1200px] mx-auto px-8 py-16 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8">
            <Link to="/guides" className="text-white/50 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1.5">
              <Icon name="arrow_back" size={12} /> Guides
            </Link>
            <Icon name="chevron_right" size={12} className="text-white/30" />
            <span className="text-white/50 text-xs font-bold uppercase tracking-widest">{guide.category}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest text-white border border-white/20 bg-white/10">
                  {guide.category}
                </span>
                <span className="flex items-center gap-1.5 text-white/50 text-xs font-medium">
                  <Icon name="schedule" size={13} /> {guide.readTime} read
                </span>
                <span className="flex items-center gap-1.5 text-white/50 text-xs font-medium">
                  <Icon name="update" size={13} /> Updated {guide.updatedDate}
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-headline font-extrabold text-white tracking-tight mb-6 leading-tight">
                {guide.title}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl font-body">
                {guide.subtitle}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {guide.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-white/10 backdrop-blur-sm text-white/70 text-[10px] font-bold uppercase tracking-wider rounded-sm border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-sm p-6">
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-sm flex items-center justify-center text-white font-headline font-bold text-xl flex-shrink-0"
                  style={{ backgroundColor: accentColor }}
                >
                  {guide.author.initials}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{guide.author.name}</p>
                  <p className="text-white/60 text-xs mt-0.5">{guide.author.title}</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider mt-0.5">{guide.author.firm}</p>
                </div>
              </div>
              <p className="text-white/60 text-xs leading-relaxed">{guide.author.bio}</p>
              <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-2 gap-3">
                <div>
                  <p className="text-white/40 text-[9px] uppercase tracking-widest mb-1">Published</p>
                  <p className="text-white/70 text-xs font-medium">{guide.publishedDate}</p>
                </div>
                <div>
                  <p className="text-white/40 text-[9px] uppercase tracking-widest mb-1">Read Time</p>
                  <p className="text-white/70 text-xs font-medium">{guide.readTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── BODY ─────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">

          {/* ── SIDEBAR TOC ─── */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {/* TOC */}
              <div className="bg-white border border-[rgba(0,21,42,0.07)] rounded-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-[rgba(0,21,42,0.06)]">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Contents</p>
                </div>
                <ul className="py-2">
                  {guide.sections.map((sec) => (
                    <li key={sec.id}>
                      <button
                        onClick={() => scrollToSection(sec.id)}
                        className={`w-full flex items-center gap-3 px-5 py-3 text-left text-xs font-medium transition-all ${
                          activeSection === sec.id
                            ? 'font-bold'
                            : 'text-slate-500 hover:text-[#00152a]'
                        }`}
                        style={activeSection === sec.id ? { color: accentColor } : {}}
                      >
                        {activeSection === sec.id && (
                          <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: accentColor }} />
                        )}
                        {activeSection !== sec.id && <span className="w-1 h-1 rounded-full bg-transparent flex-shrink-0" />}
                        {sec.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progress */}
              <div className="bg-white border border-[rgba(0,21,42,0.07)] rounded-sm p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Progress</p>
                  <p className="text-xs font-bold" style={{ color: accentColor }}>{progress}%</p>
                </div>
                <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{ width: `${progress}%`, backgroundColor: accentColor }}
                  />
                </div>
              </div>

              {/* CTA */}
              <div className="bg-white border border-[rgba(0,21,42,0.07)] rounded-sm p-5">
                <Icon name="headset_mic" size={20} className="text-slate-300 mb-3" />
                <p className="text-[#00152a] font-bold text-sm mb-2">Need Legal Counsel?</p>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">Our advisors can apply this framework directly to your business structure.</p>
                <Link
                  to="/consultation-booking"
                  className="block text-center text-white text-xs font-bold py-2.5 rounded-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: accentColor }}
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </aside>

          {/* ── ARTICLE ─── */}
          <article className="min-w-0">
            {guide.sections.map((section) => (
              <section
                key={section.id}
                id={`section-${section.id}`}
                className="mb-16 scroll-mt-24"
              >
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-8 pb-5 border-b border-[rgba(0,21,42,0.06)]">
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center border border-clinical/10 bg-transparent">
                    <Icon name={section.icon} size={18} style={{ color: accentColor }} />
                  </div>
                  <h2 className="text-2xl font-headline font-bold text-[#00152a] tracking-tight">
                    {section.title}
                  </h2>
                </div>

                {/* Section Content */}
                <div>
                  {section.content.map((block, i) => renderContentBlock(block, accentColor, i))}
                </div>
              </section>
            ))}

            {/* ── KEY TAKEAWAYS ─── */}
            <section className="mb-16 bg-white border border-[rgba(0,21,42,0.08)] rounded-sm overflow-hidden">
              <div className="px-8 py-5 border-b border-[rgba(0,21,42,0.06)] bg-transparent">
                <div className="flex items-center gap-3">
                  <Icon name="format_list_bulleted" size={18} style={{ color: accentColor }} />
                  <h3 className="font-headline font-bold text-[#00152a] text-lg">Key Takeaways</h3>
                </div>
              </div>
              <ul className="divide-y divide-[rgba(0,21,42,0.04)]">
                {guide.takeaways.map((point, i) => (
                  <li key={i} className="flex items-start gap-5 px-8 py-5">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full border border-clinical/10 text-xs font-bold flex items-center justify-center"
                      style={{ color: accentColor }}
                    >
                      {i + 1}
                    </span>
                    <p className="text-[#374151] text-sm leading-relaxed">{point}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── RELATED GUIDES ─── */}
            <section className="mb-12">
              <h3 className="font-headline font-bold text-[#00152a] text-lg mb-6">Related Analyses</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {guide.relatedGuides.map((rel) => (
                  <Link
                    key={rel.slug}
                    to={`/guides/${rel.slug}`}
                    className="group bg-white border border-[rgba(0,21,42,0.08)] rounded-sm p-6 hover:border-[rgba(0,21,42,0.2)] hover:shadow-clinical-hover transition-all flex items-center gap-5"
                  >
                    <div className="w-10 h-10 rounded-sm bg-transparent border border-clinical/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <Icon name="menu_book" size={18} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{rel.category}</p>
                      <p className="font-bold text-[#00152a] text-sm leading-tight group-hover:text-primary transition-colors">{rel.title}</p>
                    </div>
                    <Icon name="arrow_forward" size={16} className="ml-auto text-slate-300 group-hover:text-primary flex-shrink-0 transition-colors group-hover:translate-x-1 duration-200" />
                  </Link>
                ))}
              </div>
            </section>

            {/* ── BOTTOM CTA ─── */}
            <section
              className="rounded-sm p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white"
              style={{ background: `linear-gradient(135deg, #00152a, ${accentColor})` }}
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">LexArchitect Advisory</p>
                <h3 className="font-headline font-bold text-2xl leading-tight mb-2">Apply this framework to your business.</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-md">Speak with a specialist who can translate this analysis into actionable strategy for your specific regulatory context.</p>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <Link
                  to="/consultation-booking"
                  className="bg-white text-[#00152a] px-7 py-3.5 font-bold text-sm rounded-sm flex items-center gap-2 hover:bg-slate-100 transition-colors whitespace-nowrap"
                >
                  Book a Consultation <Icon name="arrow_forward" size={16} />
                </Link>
                <Link
                  to="/guides"
                  className="border border-white/20 text-white/70 px-7 py-3.5 font-bold text-sm rounded-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                  <Icon name="arrow_back" size={16} /> All Guides
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
