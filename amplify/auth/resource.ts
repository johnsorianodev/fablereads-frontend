import { defineAuth } from "@aws-amplify/backend";

export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  userAttributes: {
    locale: {
      required: false,
      mutable: true,
    },
  },
  groups: ["admin"],
});
