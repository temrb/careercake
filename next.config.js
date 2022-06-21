/** @type {import('next').NextConfig} */

if (!process.env.NEXTAUTH_URL) {
  console.warn(
    "\x1b[33mwarn",
    "\x1b[0m",
    "NEXTAUTH_URL environment variable is not set."
  );
}

module.exports = {
  reactStrictMode: true,
}
