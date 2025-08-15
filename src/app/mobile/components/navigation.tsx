import { Menu } from "./menu";
import UserButton from "./user-button";

export default function Navigation() {
  return (
    <div className="border-input flex h-[50px] items-center justify-between border-b">
      <div className="text-[1rem] font-bold">Music Listen</div>
      <Menu />
      <UserButton />
    </div>
  );
}
