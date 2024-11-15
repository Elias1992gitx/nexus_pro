import { FooterNewsletter } from '@/components/footer/FooterNewsletter';
import { FooterLinks } from '@/components/footer/FooterLinks';
import { FooterContact } from '@/components/footer/FooterContact';
import { FooterLogo } from '@/components/footer/FooterLogo';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Company Info Section */}
          <div className="space-y-8">
            <FooterLogo />
            <p className="text-slate-300 text-sm leading-relaxed">
              TechSolutions is a leading software development company dedicated to transforming businesses through innovative digital solutions.
            </p>
            <FooterNewsletter />
          </div>

          {/* Links Sections with Animation */}
          <FooterLinks
            title="General"
            links={[
              { label: 'About Us', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Case Studies', href: '/case-studies' },
              { label: 'Careers', href: '/careers' },
            ]}
          />

          <FooterLinks
            title="Resources"
            links={[
              { label: 'Blog', href: '/blog' },
              { label: 'Documentation', href: '/docs' },
              { label: 'Support', href: '/support' },
              { label: 'API Reference', href: '/api' },
            ]}
          />

          {/* Contact Section */}
          <FooterContact />
        </div>

        {/* Copyright with Gradient Border */}
        <div className="mt-16 pt-8 border-t border-gradient-to-r from-slate-800 via-slate-700 to-slate-800">
          <div className="text-center text-sm text-slate-400">
            <p>© {new Date().getFullYear()} TechSolutions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}