import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from 'path'
import helmet from 'helmet'

import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import couponRoutes from "./routes/coupon.route.js";
import paymentRoutes from "./routes/payment.route.js";
import analyticsRoutes from "./routes/analytics.route.js";

import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve()

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

app.use(helmet());

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "https://static.cloudflareinsights.com", "https://js.stripe.com"], // Разрешаем скрипты с этого домена
    frameSrc: ["'self'", "https://js.stripe.com"]
  }
}));




if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/dist')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  })
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  connectDB();
});
