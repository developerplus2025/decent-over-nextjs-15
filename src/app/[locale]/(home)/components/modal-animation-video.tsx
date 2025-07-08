import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/animate-ui/radix/dialog';
 import Video from "next-video";
 import awesomeVideo from "/videos/get-started.mp4";
export const ModalAnimationVideo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[25rem] h-[18rem]" from="left">
       
      <div className="flex h-full w-full items-center justify-center">
              <Video
                aria-errormessage=""
                aria-hidden="false"
                className="host rounded-lg"
                src={awesomeVideo}
              />
              {/* <video src={"../../../../videos/vercel-ship.mp4"}></video> */}
            </div>
       
      </DialogContent>
    </Dialog>
  );
};