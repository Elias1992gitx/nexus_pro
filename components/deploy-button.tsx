import Link from "next/link";
import { Button } from "./ui/button";

export default function DeployButton() {
  return (
    <>
      <Link
        href="#"
        target="_blank"
      >
        <Button className="flex items-center gap-2" size={"sm"}>
          <p>Deploy</p>
        </Button>
      </Link>
    </>
  );
}
