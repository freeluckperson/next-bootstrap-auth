// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.DB_URL); //Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
//     Type 'undefined' is not assignable to type 'string'.
//     console.log("→ Connection to Db successful");
//   } catch (error) {
//     console.log(error);
//   }
// };

import mongoose, { ConnectOptions } from "mongoose";

interface MongoUrl {
  url: string;
}

export const connectDB = async () => {
  const url: MongoUrl = {
    url: process.env.DB_URL as string,
  };

  try {
    await mongoose.connect(url.url, {
      useNewUrlParser: true,
    } as ConnectOptions);
    console.log("→ Connection to Db successful");
  } catch (error) {
    console.log(error);
  }
};
