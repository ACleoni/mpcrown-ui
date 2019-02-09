
// EMAIL AND PASS VALIDATOR
export const validate = (source, type) => {
    let regex = '';
    
    if (type === 'email') {
        regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    } else if (type === 'password') {
        regex = /^(?=.*\d).{4,8}$/
    }

    return regex.test(source);
}