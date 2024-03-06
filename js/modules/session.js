let globalSession = new Map()

////////////////////>-- Coockie Functions --<////////////////////

const SetCookie = (uid, u) => {
    let exp = Date.now()

    globalSession.set(uid,{
        uuid: uid,
        user: u,
        expiration: exp + 3600000,
    })
}

const CheckCookie = (uid) => globalSession.has(uid)
const RemoveCookie = (uid) => globalSession.delete(uid)


////////////////////>-- Login Functions --<////////////////////

// const submitForm = (data) => {
const submitForm = (e) => {
    e.preventDefault()

    console.log("trying to login");
    let form = new FormData(e.target)
    console.log("Username = ", form.get('username'));
    console.log("password = ", form.get('password'));
    console.log(`${form.get('username')}:${form.get('password')}`)
    let creds = btoa(`${form.get('username')}:${form.get('password')}`)
    // let form = new FormData(data)

    fetch("https://zone01normandie.org/api/auth/signin", {
        method: "POST",
        headers: {
            'Authorization': `Basic ${creds}`
        }
    }).then(resp => resp.json())
    .then(console.log)
}

export { submitForm }