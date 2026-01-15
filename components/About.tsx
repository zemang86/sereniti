import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
          Our Brands
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <a
              href="https://damaura.ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/damaura-logo.png"
                alt="Damaura AI"
                width={120}
                height={145}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              <a
                href="https://damaura.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Damaura AI
              </a>
              {" "}— your compassionate companion for mental wellness, rooted in Islamic wisdom.
            </p>
            <p>
              We bridge the gap between modern psychology and timeless spiritual guidance,
              delivering culturally-attuned support that speaks to the heart.
            </p>
            <p className="text-gray-500">
              Because healing should honour who you are.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
