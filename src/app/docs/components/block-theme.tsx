"use client"
import { useState } from "react"

export default function BlockTheme() {
    const [theme,setTheme] = useState()
    return (
      <div className={`h-[80px] w-[300px]`}>
        <h1>Experiesdnce the theme switch animation yourself.</h1>
        <p>
          This technique is using clip-path, this element is duplicated and
          overlayed on top of the original one. The duplicated elements have
          different themes and we just reveal the one underneath by animating
          the clip-path property.
        </p>
      </div>
    );
}