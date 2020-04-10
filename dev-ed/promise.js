// FIRST CASE

console.log("Start - 1");

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("We have a data");
      resolve({ userEmail: email });
    }, 2000);
  });
}

function getUserVideos(email, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video 1", "video 2"]);
    }, 2000);
  });
}

function videoDetails(video, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is the craziest video that I have never watched before!");
    }, 1000);
  });
}

// loginUser("adamfahmil@goomail.com", 123456)
//   .then((user) => getUserVideos(user.email))
//   .then((videos) => videoDetails(videos[0]))
//   .then((detail) => console.log(detail));

console.log("Finish -1 ");

// SECOND CASE

const ytb = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Getting videos from YouTube");
    resolve({ videos: [1, 2, 3] });
  }, 2000);
});

const fb = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Profile from Facebook");
    resolve({ user: "Adam Fahmil" });
  }, 3000);
});

Promise.all([ytb, fb]).then((result) => console.log(result));
