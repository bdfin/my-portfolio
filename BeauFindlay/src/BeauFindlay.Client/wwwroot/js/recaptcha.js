window.executeRecaptcha = function () {
    return new Promise((resolve, reject) => {
        grecaptcha.ready(function () {
            grecaptcha
                .execute("6LcvxZIpAAAAAOIP5L6kGngwDZRpwkTdMezPn06x", {
                    action: "submit",
                })
                .then(
                    function (token) {
                        resolve(token);
                    },
                    function (error) {
                        reject(error);
                    }
                );
        });
    });
};