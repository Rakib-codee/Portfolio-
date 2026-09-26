/**
 * Single source of truth for personal facts.
 *
 * Every value here was supplied by the site owner or taken from data that
 * already existed in this repo. Anything marked TODO(PROFILE.md) was not
 * provided; it renders as a placeholder in development and is omitted in
 * production. Do not invent.
 */

export const profile = {
  name: "Md Mahfujur Rahman Rakib",
  shortName: "Rakib",
  /** Shown under the name in the hero and in metadata. */
  role: "Software Engineering Student · Researcher · Builder",
  /** One-line positioning used in the hero, OG image and metadata. */
  positioning:
    "Software Engineering undergraduate building AI-assisted, data-driven systems, with research interests in LLM security and explainable machine learning.",
  /** "Currently:" line in the hero. */
  currently: "B.Eng. Software Engineering, Zhengzhou University (2023 – 2027) · 7th semester",

  email: "rakibislam4913@gmail.com",
  github: "https://github.com/Rakib-codee",
  githubUser: "Rakib-codee",
  linkedin: "https://www.linkedin.com/in/md-mahfujur-rahman-rakib-944057196/",
  /** External CV (Google Drive). The /cv route renders an HTML version too. */
  cvUrl:
    "https://drive.google.com/file/d/1LIPFlrDV2Tm7E3mAVKTqm7sOrhcjw2Ct/view?usp=drive_link",

  /**
   * TODO(PROFILE.md): city / country and IANA timezone. Not provided.
   * Left null on purpose so nothing wrong is rendered.
   */
  location: null as string | null,
  timezone: null as string | null,

  /** Master's application target. */
  mastersPlan: "Applying for a Master's in Software Engineering focused on LLM security, 2027 intake.",

  /** Short bio. Only claims supported by the projects and papers on this site. */
  bio: [
    "I am a Software Engineering student at Zhengzhou University who likes building systems end to end: from data models and APIs to the interface people actually touch.",
    "My shipped work spans UrbanAI, an AI-assisted urban-planning platform recognised with a Certificate of Honor at the China International College Students' Innovation Competition (2025), an offline-first Android safety network for elderly users, a LAN-based real-time face-recognition system, and full-stack web apps built with React, Next.js and Firebase.",
    "I am currently writing on explainable machine learning and on how Internet video streaming works, and I am applying for a Master's in Software Engineering focused on LLM security (2027 intake).",
  ],

  /**
   * Research interests. Chosen to match the Master's plan and the two
   * papers in progress; the owner asked for this recommendation.
   */
  researchInterests: [
    "LLM security and adversarial robustness",
    "Trustworthy and explainable machine learning",
    "AI-assisted software engineering",
    "Computer vision systems",
    "Data-driven smart-city platforms",
  ] as string[],

  /**
   * Languages and standardised tests. The owner chose not to publish these,
   * so the array stays empty and the card is omitted rather than shown as a
   * placeholder.
   */
  languages: [] as { label: string; detail: string }[],
} as const;

export type Profile = typeof profile;
