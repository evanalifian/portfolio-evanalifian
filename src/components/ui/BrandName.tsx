import data from "../../../data.json";
import getLastTwoDigit from "../../utils/getlastTwoDigit";

export default function BrandName() {
  const year = new Date().getFullYear();
  return (
    <span className="font-mono text-sm inline-flex items-center justify-baseline">
      {data.alias}
      <span className="ms-1 inline-block rounded-md border border-zinc-700 px-1 py-0.5 text-[10px]">
        {getLastTwoDigit(year)}
      </span>
    </span>
  );
}
