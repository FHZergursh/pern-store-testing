import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import dotenv from "dotenv"
import cors from "cors"

import productRoutes from "./routes/productRoutes.js"

dotenv.config()
const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan("dev"))


const PORT = process.env.PORT

app.use("/api/products", productRoutes)

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT)
})