import React from "react";
import { CheckCircle } from "lucide-react";

interface Certification {
  title: string;
  description: string;
}

interface CredentialsSectionProps {
  companyName?: string;
  customClassName?: string;
  onRequestQuote?: () => void;
}

const CredentialsSection: React.FC<CredentialsSectionProps> = ({
  companyName = "One Direction Australia",
  customClassName = "",
  onRequestQuote
}) => {
  const certifications: readonly Certification[] = [
    {
      title: "Industry-Recognized Standards",
      description:
        "Compliance with national and international cleaning and safety benchmarks."
    },
    {
      title: "Eco-Friendly Practices",
      description:
        "Accredited for sustainable cleaning solutions that prioritize environmental care."
    },
    {
      title: "Trusted Expertise",
      description:
        "Certification showcasing our skilled and reliable workforce."
    },
    {
      title: "Health & Safety Assurance",
      description:
        "Adherence to occupational health and safety regulations for client and staff well-being."
    },
    {
      title: "Commitment to Excellence",
      description:
        "Awards and recognitions for consistently delivering outstanding services."
    }
  ] as const;

  const handleRequestQuote = (): void => {
    onRequestQuote?.();
  };

  return (
    <div
      className={`flex flex-col lg:flex-row gap-8 items-center max-w-6xl mx-auto p-6 ${customClassName}`}
    >
      <div className="w-full lg:w-1/2">
        <img
          src="\images\Credentials\Accreditations-medal.png"
          alt="Trophy achievements"
          className="rounded-lg object-cover w-full h-full"
        />
      </div>

      <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">
            Our Credentials at a Glance
          </h2>
          <p className="text-gray-600">
            At {companyName}, we take immense pride in our certifications and
            achievements, which reflect our commitment to delivering exceptional
            cleaning services. Each certification represents our dedication to
            quality, safety, and environmental responsibility.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">
            Key Highlights of Our Certifications:
          </h3>

          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">{cert.title}</h4>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto">
            Request a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default CredentialsSection;
