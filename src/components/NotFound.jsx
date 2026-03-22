import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="notfound-page">

      <motion.div
        className="notfound-box"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* GIF IMAGE */}
        <motion.img
          src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
          alt="404"
          className="notfound-img"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* TEXT */}
        <h1 className="notfound-title">404</h1>

        <h3>Oops! Page Not Found 😢</h3>

        <p>
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* BUTTON */}
        <a href="/" className="btn back-btn">
          ⬅ Back to Home
        </a>

      </motion.div>

    </div>
  );
}