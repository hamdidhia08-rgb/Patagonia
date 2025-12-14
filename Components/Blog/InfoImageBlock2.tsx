import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function InfoImageBlock2() {
  return (
    <div className="mt-12">
      {/* Ligne top */}
      <div className="border-t border-gray-200 mb-6" />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        
        {/* TAGS */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-gray-900 font-semibold text-sm">
            Tags:
          </span>

          <span className="px-4 py-1.5 text-sm rounded-lg bg-orange-100 text-orange-600 font-medium">
            #Social Media
          </span>

          <span className="px-4 py-1.5 text-sm rounded-lg bg-orange-100 text-orange-600 font-medium">
            #Travel
          </span>
          <span className="px-4 py-1.5 text-sm rounded-lg bg-orange-100 text-orange-600 font-medium">
            #Turkey
          </span>
        </div>

        {/* SHARE */}
        <div className="flex items-center gap-4">
          <span className="text-gray-900 font-semibold text-sm">
            Share:
          </span>

          <div className="flex items-center gap-3 text-gray-700">
            <Facebook className="w-4 h-4 cursor-pointer hover:text-orange-600 transition" />
            <Twitter className="w-4 h-4 cursor-pointer hover:text-orange-600 transition" />
            <Instagram className="w-4 h-4 cursor-pointer hover:text-orange-600 transition" />
            <Youtube className="w-4 h-4 cursor-pointer hover:text-orange-600 transition" />
          </div>
        </div>
      </div>

      {/* Ligne bottom */}
      <div className="border-b border-gray-200 mt-6" />
    </div>
  );
}
