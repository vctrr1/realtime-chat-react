import { useState } from "react";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="bg-[#64748b] h-screen flex items-center">
      <form className="w-64 mx-auto mb-12">
        <input
          value={userName}
          onChange={(ev) => setUserName(ev.target.value)}
          type="text"
          placeholder="Usuário"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <input
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          type="text"
          placeholder="Senha"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <button className="bg-[#2d5ee6] text-white block w-full rounded-md p-2">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
