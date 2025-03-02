const baseUrl = 'http://localhost:3030/jsonstore/users'

export default {
    async getAll() {
        const responce = await fetch(baseUrl);
        const result = await responce.json();
        const users = Object.values(result)

        return users;
    }
}