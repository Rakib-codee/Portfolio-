import { profile } from "./profile";

/** Kept for backwards compatibility; profile.ts is the source of truth. */
export const links = {
  github: profile.github,
  linkedin: profile.linkedin,
  email: profile.email,
  resume: profile.cvUrl,
};
