import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-[70vh] items-center justify-center px-4 pt-24">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">404</p>
        <Heading level={1} className="mt-3">
          Nothing here.
        </Heading>
        <p className="mt-4 text-muted">The page you asked for does not exist.</p>
        <div className="mt-8">
          <Button href="/">Back home</Button>
        </div>
      </div>
    </main>
  );
}
