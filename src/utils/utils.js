import axios from 'axios';

export async function apiReq(
    endPoint,
    method,
) {

    return new Promise(function(resolve,reject){
        axios[method](endPoint)
            .then(result => {
                console.log("my resluult++++++", result)
                const { data } = result;
                if (data.status === false) 
                {
                    return reject(data);
                }
                return resolve(data);
            })
            .catch(error => {
                console.log(error ,"erororrrrrrrrrr")
            });
    });
}

export function apiGet(endPoint) {
    return apiReq(endPoint, 'get');
}






