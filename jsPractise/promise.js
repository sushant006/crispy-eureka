function fun(task) {
    return new Promise((resolve, reject) => {
        if (task) {
            resolve("completed");
        } else {
            reject("not completed");
        }
    });
}
let onResolve = (res) => {
    console.log(res);
};
let onReject = (err) => {
    console.log(err);
};

fun(false).then(onResolve).catch(onReject);
