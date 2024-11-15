'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Newsletter subscription:', email);
    
    setIsSubmitting(false);
    setEmail('');
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
        Stay Updated
      </h3>
      <motion.form 
        onSubmit={handleSubmit} 
        className="flex flex-col gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="bg-slate-800/50 px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-500"
          required
        />
        <Button 
          type="submit" 
          variant="default"
          className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 transition-all"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </motion.form>
    </div>
  );
}