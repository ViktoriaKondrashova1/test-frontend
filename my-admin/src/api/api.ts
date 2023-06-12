export const getToken = async () => {
  const token = await fetch("http://3.65.149.62/test-api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "test@nyblecraft.com",
      password: "12345678qQ",
    }),
  });
  return await token.json();
};
