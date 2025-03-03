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

        const { country, city, street, streetNumber, ...postData } = userData;

        postData.address = { country, city, street, streetNumber };
        postData.createdAt = new Date().toISOString();
        postData.updatedAt = new Date().toISOString();


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


}