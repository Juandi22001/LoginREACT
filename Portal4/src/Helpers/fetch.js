export const Fetch_sin_Token = async (endpoint, data, method = 'GET') => {


    const url = 'http://34.125.59.69:5000/' + endpoint

    if (method === 'GET') {
        const resp = await fetch(url);



        return await resp.json()

    }
    else {

        const resp = await fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return await resp.json();


    }



}
export const FetchPostSesion = async (endpoint, data, method = 'GET') => {

    console.log(data)
    const url = 'http://34.125.59.69:5000/' + endpoint

    if (method === 'GET') {
        const resp = await fetch(url);

        return await resp.json()

    }
    else { 

        const resp = await fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return await resp.json();


    }



}

export const FetchSesion = async (endpoint, method = 'GET') => {


    const url = 'http://34.125.59.69:5000/' + endpoint
    
    if (method === 'GET') {
        const resp = await fetch(url);

        console.log("respuesta",resp)
       
        return await resp.json()

    }
    



}

export const FetchToken = async (endpoint, method = 'GET') => {




    const pruebaToken= await FetchSesion('Sesion','GET')
  

    const url = 'http://34.125.59.69:5000/' + endpoint

    if (method === 'GET') {

     

        const resp = await fetch(url, {
            headers: {
                'xtoken': pruebaToken.token
            }

        }

        );

     
        return await resp.json()

    }





}


