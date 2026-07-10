"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { personalInfo } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Sobre mí</h2>
          <div className="w-16 h-1 bg-emerald-500 rounded-full mb-8" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <a
                href={personalInfo.cvUrl}
                download="cv 2026 edi.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors"
              >
                <Download size={18} />
                Descargar CV
              </a>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-semibold mb-4">Datos rápidos</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-zinc-500">Nombre</span>
                  <span>{personalInfo.name}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-500">Ubicación</span>
                  <span>{personalInfo.location}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-500">Idiomas</span>
                  <span>Español, Inglés técnico</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
