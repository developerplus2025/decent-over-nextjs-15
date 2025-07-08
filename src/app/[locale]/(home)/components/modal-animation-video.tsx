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
import { useTranslations } from 'next-intl';
export const ModalAnimationVideo = () => {
   const b = useTranslations('ButtonText');
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button
          className="min-[300px]:w-full md:w-fit xl:w-fit"
          
          variant={"default"}
        >
          <svg
            className="mr-2 h-4 w-4"
            data-testid="geist-icon"
            height={16}
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            width={16}
            style={{ color: "currentcolor" }}
          >
            <path
              fill="#666"
              fillRule="evenodd"
              d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6 11l5.5-3L6 5v6Z"
              clipRule="evenodd"
              style={{ fill: "currentColor" }}
            />
          </svg>
          {b('WatchText')}
        </Button>
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