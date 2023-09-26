const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true }, //dessa forma o db nao permite dois usernames iguais, diferente do jeito implementado abaixo
    password: String,
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("User", UserSchema);
