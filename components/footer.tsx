'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-[#022d54] bg-[radial-gradient(circle_at_top,#0a3d6d_0%,#022d54_50%,#0a3d6d_100%)] text-white pt-16 pb-4 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <Image
              src="/images/logo.png"
              alt="Legal Door"
              width={50}
              height={50}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/70">
              Your trusted partner in legal excellence and business success.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              {['Corporate Law', 'IP Protection', 'Employment Law', 'Litigation'].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-white/70">
              {['About Us', 'Our Team', 'Blog', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex gap-2 items-start">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex gap-2 items-start">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>hello@legaldoor.com</span>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>123 Legal Ave, Suite 100, Business City, BC 12345</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/50 text-sm">
              © {currentYear} Legal Door. All rights reserved.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Facebook, href: '#' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <social.Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
