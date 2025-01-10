import {
  RocketLaunchIcon,
  ChartBarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function FeaturesSection() {
  return (
    <section className="container mx-auto py-16 px-6">
      <div className="bg-EEFCF2 rounded-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Feature 1: Innovation First */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <RocketLaunchIcon className="h-12 w-12 text-343CFF" />
          <h3 className="text-xl font-semibold">Innovation First</h3>
          <p className="text-md text-gray-600">
            At StartifyAI, we leverage cutting-edge AI technologies to redefine
            decision-making. Our tools are built to adapt, learn, and drive
            smarter strategies tailored to your startup's unique needs.
          </p>
        </div>

        {/* Feature 2: Data-Driven Growth */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <ChartBarIcon className="h-12 w-12 text-43B660" />
          <h3 className="text-xl font-semibold">Data-Driven Growth</h3>
          <p className="text-md text-gray-600">
            Our AI models analyze complex datasets to provide actionable
            insights, helping you optimize every aspect of your business—from
            revenue growth to operational efficiency.
          </p>
        </div>

        {/* Feature 3: Founder-Focused */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <UsersIcon className="h-12 w-12 text-343CFF" />
          <h3 className="text-xl font-semibold">Founder-Focused</h3>
          <p className="text-md text-gray-600">
            Built specifically for startup founders, StartifyAI simplifies
            decision-making, reduces complexity, and empowers you to focus on
            what truly matters—building your vision.
          </p>
        </div>
      </div>
    </section>
  );
}
