import { LinearMediaPlayer } from "@/components/linear-player/components/media-player"

export default function Page() {
  return (
    <section className="dark flex h-dvh w-dvw bg-black">
      <LinearMediaPlayer src="https://decent-over.vercel.app/videos/854224-hd_1280_720_30fps.mp4" />
    </section>
  );
}
