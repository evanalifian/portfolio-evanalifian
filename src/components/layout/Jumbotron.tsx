import { FileUser } from "lucide-react";
import data from "../../../data.json";

export default function Jumbotron() {
  return (
    <section className="border-x border-dashed border-zinc-300 px-4 pt-32 pb-16 space-y-6">
      <h1 className="text-4xl font-medium">{data.tagline}</h1>
      <a
        href="/cv.pdf"
        target="_blank"
        className="flex h-12 w-max items-center gap-x-2 rounded-xl bg-zinc-950 px-4 text-sm font-medium text-gray-50 transition-colors hover:bg-zinc-900"
      >
        <FileUser />
        Download CV
      </a>
    </section>
  );
}
