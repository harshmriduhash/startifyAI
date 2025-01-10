import Link from "next/link";
import { ChartBarIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

export default function FeaturesTilesSection() {
  return (
    <section id="features" className="container mx-auto text-center py-16 px-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-8">Discover More Features ✨</h2>
      <p className="text-gray-600 mb-12">
        Powerful tools designed to drive your startup's growth and success.
      </p>

      {/* Feature Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tile 1 - Startup Health Check */}
        <Link href="/startup-health-check">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center gap-4 mb-4">
              <ChartBarIcon className="w-10 h-10 text-blue-600" />
              <h3 className="text-xl font-bold">Startup Health Check</h3>
            </div>
            <p className="text-gray-600">
              Analyze your startup's key metrics and identify growth
              opportunities.
            </p>
            <p className="mt-4 text-blue-600 font-semibold">
              Click to give it a try! →
            </p>
          </div>
        </Link>

        {/* Tile 2 - Pitch Deck Generator */}
        <Link href="/pitch-deck-generator">
          <div className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center gap-4 mb-4">
              <DocumentTextIcon className="w-10 h-10 text-green-600" />
              <h3 className="text-xl font-bold">Pitch Deck Generator</h3>
            </div>
            <p className="text-gray-600">
              AI-powered pitch deck creation tailored to your startup's vision.
            </p>
            <p className="mt-4 text-green-600 font-semibold">
              Click to give it a try! →
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
