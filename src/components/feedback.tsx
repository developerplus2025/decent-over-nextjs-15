import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

export default function FeedBack() {
  return (
    <div className="flex flex-col gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <div className="relative">
            <div className="absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 rounded-lg bg-gradient-to-r from-transparent via-zinc-700 to-transparent dark:via-zinc-300"></div>
            <Button variant="outline" className="h-fit px-3 py-1">
              Feed Back
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <h2 className="mb-2 text-sm font-semibold">Send us feedback</h2>
          <form className="space-y-3">
            <Textarea
              className="resize-none"
              id="feedback"
              placeholder="How can we improve Decent VF?"
              aria-label="Send feedback"
            />
            <div className="flex flex-col sm:flex-row sm:justify-end">
              <Button size="sm">Send feedback</Button>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
