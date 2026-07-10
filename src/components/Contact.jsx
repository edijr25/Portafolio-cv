"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { personalInfo } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Contacto</h2>
          <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mb-8" />

          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? Estoy abierto a nuevas oportunidades.
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <a
              href={"mailto:lopez.edicilio@gmail.com"}
              className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors"
            >
              <Mail size={18} />
              Enviar correo
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-sm"
            >
              <GithubIcon size={18} />
              GitHub
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-sm"
            >
              <LinkedinIcon size={18} />
              LinkedIn
            </a>
            <a
              href={personalInfo.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-sm"
            >
              <TwitterIcon size={18} />
              Twitter
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
