import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/Elements/Button/button";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-xl text-gray-600">Oops! Halaman yang Anda cari tidak ditemukan.</p>
        <br />
        <Link to="/">
          <Button className="mt-6 px-6 py-3 text-lg">Kembali ke Beranda</Button>
        </Link>
      </motion.div>
    </div>
  );
}
