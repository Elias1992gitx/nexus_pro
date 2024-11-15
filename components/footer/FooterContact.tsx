import { Mail, MapPin, Phone } from 'lucide-react';

export function FooterContact() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
        Contact Info
      </h3>
      <ul className="space-y-4">
        <li className="flex items-center gap-4 group">
          <div className="p-2 rounded-lg bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors">
            <MapPin size={18} className="text-blue-400" />
          </div>
          <span className="text-slate-300 text-sm">
            123 Tech Street, Silicon Valley, CA 94025
          </span>
        </li>
        <li className="flex items-center gap-4 group">
          <div className="p-2 rounded-lg bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors">
            <Phone size={18} className="text-teal-400" />
          </div>
          <a 
            href="tel:+14155552671" 
            className="text-slate-300 text-sm hover:text-white transition-colors"
          >
            +1 (415) 555-2671
          </a>
        </li>
        <li className="flex items-center gap-4 group">
          <div className="p-2 rounded-lg bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors">
            <Mail size={18} className="text-purple-400" />
          </div>
          <a 
            href="mailto:contact@techsolutions.com" 
            className="text-slate-300 text-sm hover:text-white transition-colors"
          >
            contact@techsolutions.com
          </a>
        </li>
      </ul>
    </div>
  );
}