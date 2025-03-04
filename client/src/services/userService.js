const baseUrl = 'http://localhost:3030/jsonstore/users'

export default {
    async getAll() {
        const responce = await fetch(baseUrl);
        const result = await responce.json();
        const users = Object.values(result)

        return users;
    },

    async getOne(userId) {
        const responce = await fetch(`${baseUrl}/${userId}`);
        const user = await responce.json();

        return user;
    },

    async create(userData) {

        const postData = transformUserData(userData);

        const responce = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(postData)
        });

        const result = responce.json();

        return result;
    },

    async delete(userId) {
        const responce = await fetch(`${baseUrl}/${userId}`, {
            method: 'DELETE'
        });
        const result = await responce.json();

        return result;

    },

    async update(userId, userData) {
        const postData = transformUserData(userData);
        postData._id = userId;


        const responce = await fetch(`${baseUrl}/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });

        const result = await responce.json();

        return result;
    }


}


function transformUserData(userData) {
    const { country, city, street, streetNumber, ...transformedData } = userData;
    transformedData.address = { country, city, street, streetNumber };

    transformedData.createdAt = new Date().toISOString();
    transformedData.updatedAt = new Date().toISOString();;

    return transformedData;
}