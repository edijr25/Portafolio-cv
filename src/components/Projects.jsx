"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/profile";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Proyectos</h2>
          <div className="w-16 h-1 bg-emerald-500 rounded-full mb-8" />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-emerald-400 dark:hover:border-emerald-500 transition-all"
              >
                <div className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                  <span className="text-4xl font-bold text-white/30 select-none">
                    {project.title.charAt(0)}
                  </span>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-3 right-3 p-2 bg-black/30 backdrop-blur-sm rounded-lg text-white hover:bg-black/50 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                <div className="p-5 bg-white dark:bg-zinc-900">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      <GithubIcon size={18} />
                    </a>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
