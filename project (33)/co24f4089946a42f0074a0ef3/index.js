
// syncronising function
const photos = [];

function photoUpload() {
    let uploadStatus = new Promise( (resolve, reject) => {
        setTimeout( () => {
            photos.push("Profile Pic");
            resolve("Photo Uploaded")
        }, 3000)
    })
    
    let result = uploadStatus;
    
    console.log(result);
    console.log(photos.length);
}

photoUpload();

// asyncronous function
const photos = [];

async function photoUpload() {
    let uploadStatus = new Promise( (resolve, reject) => {
        setTimeout( () => {
            photos.push("Profile Pic");
            resolve("Photo Uploaded")
        }, 3000)
    })
    
    let result = await uploadStatus;
    
    console.log(result);
    console.log(photos.length);
}

photoUpload();