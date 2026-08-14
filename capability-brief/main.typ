// Institutional Precision — Advanced Creation Studio capability brief.
// A one-page commercial brief using the prepared report theme for formal, readable document structure.
#import "report-theme.typ": report-theme

#show: report-theme.with(
  title: "Capability Brief",
  author: "Advanced Creation Studio",
  rhythm: "report",
  running-header: false,
)

#set page(
  paper: "us-letter",
  margin: (x: 0.58in, y: 0.48in),
  header: none,
  footer: none,
  numbering: none,
)
#set text(font: "Noto Serif", size: 9pt, fill: rgb("#162333"))
#set par(leading: 0.98em, spacing: 0.55em)

#let navy = rgb("#111C2B")
#let vermilion = rgb("#DD493C")
#let paper = rgb("#F5F1E9")
#let soft = rgb("#E8E2D6")

#align(left)[
  #text(font: "Noto Serif", size: 8pt, weight: "bold", fill: vermilion, tracking: 1.4pt)[ADVANCED CREATION STUDIO]
  #v(0.35em)
  #grid(
    columns: (1fr, 0.38fr),
    gutter: 1.2em,
    [
      #text(font: "Noto Serif", size: 27pt, weight: "black", fill: navy)[
        CAPABILITY
        #linebreak()
        BRIEF.
      ]
      #v(0.5em)
      #text(size: 11pt, fill: navy)[AI-powered workflow systems for consequential work.]
    ],
    [
      #align(right)[
        #text(size: 7.5pt, weight: "bold", fill: vermilion, tracking: 1pt)[CURRENT FOCUS]
        #v(0.55em)
        #text(size: 8.5pt)[Structured note-to-action, administrative, and legal-assistant-friendly workflows.]
      ]
    ],
  )
]

#v(0.9em)
#line(length: 100%, stroke: 0.9pt + navy)
#v(0.85em)

#grid(
  columns: (0.82fr, 1.18fr),
  gutter: 1.25em,
  [
    #text(size: 7.5pt, weight: "bold", fill: vermilion, tracking: 1pt)[WHAT WE BUILD]
    #v(0.55em)
    #text(size: 14pt, weight: "bold", fill: navy)[
      Systems that turn recorded information into practical, reviewable next steps.
    ]
    #v(0.85em)
    #text(size: 8.9pt)[
      Advanced Creation Studio is building responsible AI support systems for teams that need clearer handoffs, stronger follow-through, and less administrative friction—without replacing professional judgment.
    ]
  ],
  [
    #box(
      width: 100%,
      inset: 0.75em,
      fill: paper,
      stroke: 0.6pt + soft,
    )[
      #text(size: 7.5pt, weight: "bold", fill: vermilion, tracking: .9pt)[DESIGNED FOR]
      #v(0.3em)
      #text(size: 10pt, weight: "bold", fill: navy)[Operators · legal support teams · public-benefit organizations]
      #v(0.32em)
      #text(size: 8.4pt)[A measured product-and-partnership approach for real workflows where organization and accountability matter.]
    ]
  ],
)

#v(0.9em)
#grid(
  columns: (1fr, 1fr),
  gutter: 0.95em,
  [
    #box(width: 100%, inset: 0.85em, fill: navy)[
      #text(size: 7.5pt, weight: "bold", fill: vermilion, tracking: 1pt)[01 / NOTE-TO-ACTION WORKFLOW]
      #v(0.45em)
      #text(size: 13pt, weight: "bold", fill: white)[From a working note to a clear action map.]
      #v(0.5em)
      #text(size: 8.25pt, fill: rgb("#E8EBED"))[Extract commitments, dates, people, and next steps from meeting notes, case notes, or intake material. Produce a prioritized, human-review-ready action list with traceability to the original source.]
      #v(0.75em)
      #text(size: 7.2pt, weight: "bold", fill: rgb("#E8EBED"), tracking: .65pt)[OUTPUTS: ACTION MAPS · OWNER FLAGS · FOLLOW-UP SUMMARIES]
    ]
  ],
  [
    #box(width: 100%, inset: 0.85em, fill: soft)[
      #text(size: 7.5pt, weight: "bold", fill: vermilion, tracking: 1pt)[02 / LEGAL-ASSISTANT WORKFLOW]
      #v(0.45em)
      #text(size: 13pt, weight: "bold", fill: navy)[A better-organized starting point for legal support work.]
      #v(0.5em)
      #text(size: 8.25pt, fill: navy)[Organize matter context, document lists, deadlines, questions, and preparation tasks into usable work packets. The system supports attorney and staff review; it does not provide legal advice or make legal decisions.]
      #v(0.75em)
      #text(size: 7.2pt, weight: "bold", fill: navy, tracking: .65pt)[OUTPUTS: MATTER SUMMARIES · TASK PACKETS · DEADLINE CHECKLISTS]
    ]
  ],
)

#v(0.9em)
#grid(
  columns: (0.72fr, 1.28fr),
  gutter: 1.25em,
  [
    #text(size: 7.5pt, weight: "bold", fill: vermilion, tracking: 1pt)[RESPONSIBLE BY DESIGN]
  ],
  [
    #text(size: 9pt, weight: "bold", fill: navy)[Human review stays visible. Source context remains accessible. Workflow decisions remain attributable.]
    #v(0.32em)
    #text(size: 8.4pt)[Our approach is designed to assist people doing consequential work—not to conceal uncertainty behind automation.]
  ],
)

#v(0.85em)
#line(length: 100%, stroke: 0.55pt + soft)
#v(0.55em)
#grid(
  columns: (1fr, auto),
  [
    #text(size: 7.3pt, weight: "bold", fill: vermilion, tracking: .95pt)[MISSION HORIZON] #text(size: 7.8pt, fill: navy)[Building practical systems that can contribute to stronger reentry outcomes over time.]
  ],
  [
    #text(size: 8.3pt, weight: "bold", fill: navy)[advancedcreation.studio]
  ],
)
