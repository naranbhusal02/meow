import CatGallery from "@/components/cat-gallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 text-amber-900">
          Cat Gallery
        </h1>
        <p className="text-center text-amber-700 mb-12 text-lg">
          Click on any card to reveal fun cat facts!
        </p>
        <CatGallery />
      </div>
    </main>
  );
}
