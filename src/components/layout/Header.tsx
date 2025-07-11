import data from "../../../data.json";
import BrandName from "../ui/BrandName";

export default function Header() {
  return (
    <header className="fixed top-0 w-full border-b border-dashed border-zinc-300 bg-white">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
        <span className="cursor-pointer text-xl font-medium text-gray-700 transition-colors hover:text-black">
          {data.nickname}
        </span>
        <BrandName />
      </div>
    </header>
  );
}
