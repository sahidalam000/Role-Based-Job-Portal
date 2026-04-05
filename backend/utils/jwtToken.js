// export const sendToken = (user, statusCode, res, message) => {
//   const token = user.getJWTToken();

//   const cookieExpireDays = Number(process.env.COOKIE_EXPIRE) || 1; // ✅ Ensure it's a valid number


//   const options = {
//     expires: new Date(
//       Date.now() +  cookieExpireDays* 24 * 60 * 60 * 1000
//     ),
//     httpOnly: true, // Set httpOnly to true
//     secure: process.env.NODE_ENV === "production", // Secure in production
//     sameSite: "strict",
//   };

//   res.status(statusCode).cookie("token", token, options).json({
//     success: true,
//     user,
//     message,
//     token,
//   });
// };


export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();

  const cookieExpireDays = Number(process.env.COOKIE_EXPIRE) || 1;

  const options = {
    expires: new Date(
      Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: true,           // 🔥 ALWAYS true in production
    sameSite: "None",       // 🔥 CRITICAL FIX
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};