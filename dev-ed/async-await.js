console.log("Start");

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

async function displayUser() {
  try {
    const loggedUser = await loginUser("adamfahmil@goomail.com", 123456);
    const videos = await getUserVideos(loggedUser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
  } catch (err) {
    console.log("We could not get the videos");
  }
}

displayUser();

console.log("Finish");
