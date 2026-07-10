export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto text-center text-sm text-zinc-500">
        <p>
          &copy; {new Date().getFullYear()} Edicilio López. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
