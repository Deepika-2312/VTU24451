import axios from 'axios';

function Log(stack, level, pkg, message) {
    const logData={stack, level, package:pkg, message};
    axios.post('http://4.224.186.213/evaluation-service/logs', logData)
        .then(() => console.log('Logged : ${level}-${message}'))
            .catch(err => console.error('Logging Failed: ', err.message));

}
export default Log;