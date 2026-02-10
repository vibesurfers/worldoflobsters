import { Hero } from "@/components/hero";
import { VideoGallery } from "@/components/video-gallery";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-volcanic-bg">
      <Hero />
      <VideoGallery />
      <Footer />
    </main>
  );
}
