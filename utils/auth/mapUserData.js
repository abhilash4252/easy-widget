export const mapUserData = (user) => {
  const { uid, email, xa, photoURL, displayName } = user;

  return {
    id: uid,
    email,
    name: displayName,
    token: xa,
    profilePicUrl: photoURL,
  };
};
