'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';

interface FooterLinksProps {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <motion.li 
            key={link.href}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link 
              href={link.href}
              className="text-slate-300 hover:text-white text-sm transition-all hover:translate-x-1 inline-block"
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}