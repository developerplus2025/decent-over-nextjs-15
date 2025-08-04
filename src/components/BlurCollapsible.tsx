// components/BlurCollapsible.tsx
"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function BlurCollapsible() {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <button className="p-2">
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown />
            </motion.div>
          </button>
        </CollapsibleTrigger>
      </div>

      <AnimatePresence>
        {open && (
          <CollapsibleContent forceMount>
            <motion.div
              key="blur-content"
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="rounded-md border px-4 py-2 font-mono text-sm"
            >
              @radix-ui/colors
            </motion.div>
            <motion.div
              key="blur-content"
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="rounded-md border px-4 py-2 font-mono text-sm"
            >
              @stitches/react
            </motion.div>
          </CollapsibleContent>
        )}
      </AnimatePresence>
    </Collapsible>
  );
}
