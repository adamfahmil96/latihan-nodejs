console.log("Start");

function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log("We have a data");
    callback({ userEmail: email });
  }, 2000);
}

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(["video 1", "video 2"]);
  }, 2000);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    callback("This is the craziest video that I have never watched before!");
  }, 1000);
}

const user = loginUser("adamfahmil@goomail.com", 123456, (user) => {
  console.log(user);
  getUserVideos(user.userEmail, (videos) => {
    console.log(videos);
    videoDetails(videos[0], (detail) => {
      console.log(detail);
    });
  });
});

console.log("Finish");
