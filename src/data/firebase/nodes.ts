export const FirebaseDBNodes = {
  users: () => "users/",
  user: (username: string) => FirebaseDBNodes.users() + username,
};
