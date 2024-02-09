import 'dotenv/config'
import { app } from '.'

const PORT: number = Number(process.env.PORT) || 3333

app.listen(PORT, (): void=> {
  console.log(`App is runnig at port ${PORT}`)
})