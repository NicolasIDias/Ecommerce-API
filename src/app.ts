import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import routes from './routes'

import dotenv from 'dotenv';

dotenv.config();

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    const url: any = process.env.MONGOURL
    mongoose.connect(url)
    console.log("🏦 Connected to the database")
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express