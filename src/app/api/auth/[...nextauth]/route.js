import axios from "axios";
import nextAuth from "next-auth";
import NextAuth from "next-auth/next";
import GitHubProvider from 'next-auth/providers/github';


const handler= NextAuth({
  providers: [
    GitHubProvider({
      // clientId: "Ov23lik7u6cdw1QLF8N0",
      // clientSecret: "5e94d86ea9164062b54355157e82c6ce50d83ee4",

      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
 
});

export { handler as GET, handler as POST };
