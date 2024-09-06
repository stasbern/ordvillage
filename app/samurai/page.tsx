import NFTBuilder from "../../components/SamuraiBuilder";

export default function ImageBuilder() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <main className="w-full flex flex-col items-center pt-40 text-white">
        <NFTBuilder />
        <div className="image-preview">
        </div>
      </main>
    </div>
  );
}