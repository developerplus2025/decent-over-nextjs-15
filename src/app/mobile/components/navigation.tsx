import UserButton from "./user-button";

export default function Navigation() {
  return (
    <div className="border-input flex h-[50px] items-center justify-between border-b">
        <div className="font-bold text-[2rem]">
            Music Listen
        </div>
      <UserButton />
    </div>
  );
}
