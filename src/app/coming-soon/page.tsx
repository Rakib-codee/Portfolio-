import { permanentRedirect } from "next/navigation";

/**
 * The old "Coming soon" placeholder page is retired. Any inbound link is sent
 * home. Delete this route folder when convenient.
 */
export default function ComingSoonPage() {
  permanentRedirect("/#projects");
}
