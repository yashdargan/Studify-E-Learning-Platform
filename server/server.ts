import { app } from './app';
require( "dotenv" ).config();

//creating server
app.listen(process.env.PORT, () => {
  console.log(`server is connected!!! to port ${process.env.PORT}`)
}
)