import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = 'http://192.168.0.19:8080';

const authHeader = (accessToken) => {
    return {
        "Authorization": `Bearer: ${accessToken}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}

const noneAuthHeader = {
    "Content-Type": "application/json",
    "Accept" : "application/json"
}

const getHeader = (accessToken) => {
    if (accessToken) {
        return authHeader(accessToken);
    }
    else {
        return noneAuthHeader;
    }
}

export const GetFetch = async ({ uri }) => {
    const url = baseUrl + uri;
    const accessToken = await AsyncStorage.getItem("accessToken");
    const headers = getHeader(accessToken);

    return fetch(url, {
        method: 'GET',
        headers: headers,
    })
        .then(async (response) => {
            if(response.status === 200){
                return response.json();
            }
            if (response.status === 403) {
                const result = await reissueToken({ url: url, method: "GET" });
                if(result.status === 401) {
                    throw "need authorize";
                }
                return result.json();
            }
            throw "bad request";
        })
        .catch((error) => {
            throw error;
        });
}

export const PostFetch = async ({uri, body}) => {
    const url = baseUrl + uri;
    const accessToken = await AsyncStorage.getItem("accessToken");
    const headers = getHeader(accessToken);

    return fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    })
    .then(async (response) => {
        if(response.status === 200){
            return response;
        }
        if(response.status === 403){
            const result = await reissueToken({url: url, body: body, method: "method"});
            if(result.status === 401){
                throw "need authorize";
            }
            
            return result.json();
        }
        throw "bad request";
    })
    .catch((error) => {
        throw error;
    })
}

export const PutFetch = async ({uri, body}) => {
    const url = baseUrl + uri;
    const accessToken = await AsyncStorage.getItem("accessToken");
    const headers = getHeader(accessToken);

    return fetch(url, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(body)
    })
    .then(async (response) => {
        if(response.status === 200){
            return response;
        }
        if(response.status === 403){
            const result = await reissueToken({url: url, body: body, method: "method"});
            if(result.status === 401){
                throw "need authorize";
            }
            
            return result;
        }
        throw "bad request";
    })
    .catch((error) => {
        console.log(error);
        throw error;
    })
}

const reissueToken = async ({ url, body, method }) => {
    const refreshToken = await AsyncStorage.getItem("refreshToken");
    let accessToken = await AsyncStorage.getItem("accessToken");

    const data = await fetch(baseUrl + "/api/auth/reload", {
        method: 'POST',
        headers: noneAuthHeader,
        body: JSON.stringify({
            accessToken: accessToken,
            refreshToken: refreshToken
        })
    });
    if (data.status === 401) {
        return data;
    }
    const res = await data.json();
    accessToken = res.accessToken;
    await AsyncStorage.setItem("accessToken", accessToken);

    const result = await fetch(url, {
        method: method,
        headers: authHeader,
        body: JSON.stringify(body)
    })

    return result;
}
