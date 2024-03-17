import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached?.conn) return cached.conn;
  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");
  const opts = {
    dbName: "event_horizon",
    bufferCommands: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // bufferMaxEntries: 0,
    // useFindAndModify: true,
    // useCreateIndex: true
  };
  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, opts);
  cached.conn = await cached.promise;

  return cached.conn;
};
