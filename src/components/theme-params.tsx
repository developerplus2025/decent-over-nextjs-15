"use client";

import { useTheme } from "next-themes";
import { useQueryState } from "nuqs";
import { useEffect } from "react";

export function ThemeParams() {
    const { setTheme } = useTheme();
    const [name, setName] = useQueryState("theme");
    useEffect(() => {
      if ((name != "" && name == "light") || name == "dark") {
        return setTheme(String(name));
      }
    });
    return (
      <div className="hidden">
        <input value={name || ""} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setName(null)}>Clear</button>
        <p>Hello, {name || "anonymous visitor"}!</p>
      </div>
    );
}
