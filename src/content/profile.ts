/**
 * Single source of truth for personal facts.
 *
 * Every value here was taken from data that already existed in this repo
 * (previous src/content files and README). Anything marked TODO(PROFILE.md)
 * was NOT available and must be filled in by the site owner. Do not invent.
 */

export const profile = {
  name: "Md Mahfujur Rahman Rakib",
  shortName: "Rakib",
  /** Shown under the name in the hero and in metadata. */
  role: "Software Engineering Student · Researcher · Builder",
  /** One-line positioning used in the hero, OG image and metadata. */
  positioning:
    "Software Engineering undergraduate building AI-assisted, data-driven systems across the web, computer vision and Java.",
  /** "Currently:" line in the hero. Derived from the verified education entry. */
  currently: "B.Eng. Software Engineering, Zhengzhou University (2023 – 2027)",

  email: "rakibislam4913@gmail.com",
  github: "https://github.com/Rakib-codee",
  githubUser: "Rakib-codee",
  linkedin: "https://www.linkedin.com/in/md-mahfujur-rahman-rakib-944057196/",
  /** External CV (Google Drive). The /cv route renders an HTML version too. */
  cvUrl:
    "https://drive.google.com/file/d/1LIPFlrDV2Tm7E3mAVKTqm7sOrhcjw2Ct/view?usp=drive_link",

  /**
   * TODO(PROFILE.md): city / country and IANA timezone.
   * The old site said "Bangladesh (GMT+6)" but the degree is in Zhengzhou, China.
   * Left null on purpose so nothing wrong is rendered.
   */
  location: null as string | null,
  timezone: null as string | null,

  /**
   * TODO(PROFILE.md): target intake and programme focus for the Master's
   * application (e.g. "Applying for MSc Computer Science, Fall 2027").
   */
  mastersPlan: null as string | null,

  /** Short bio. Only claims supported by the projects on this site. */
  bio: [
    "I am a Software Engineering student at Zhengzhou University who likes building systems end to end: from data models and APIs to the interface people actually touch.",
    "My shipped work spans an AI-assisted urban-planning platform, a LAN-based real-time face-recognition system, a Java inventory application, and full-stack web apps built with React, Next.js and Firebase.",
  ],

  /**
   * TODO(PROFILE.md): research interests, ideally 3 to 5 short phrases
   * (e.g. "Applied machine learning", "Human–computer interaction").
   * Empty array renders a clearly marked placeholder card.
   */
  researchInterests: [] as string[],

  /**
   * TODO(PROFILE.md): languages and standardised tests, with scores and dates.
   * Example shape: { label: "English", detail: "IELTS 7.5 (2025)" }
   */
  languages: [] as { label: string; detail: string }[],
} as const;

export type Profile = typeof profile;
