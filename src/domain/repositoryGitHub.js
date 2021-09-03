const axios = require("axios");
module.exports = class RepositoryGitHub {
    async search(date) {
        const quantityItem = 100;
        try {
            const repositories = await axios.get(
                `https://api.github.com/search/repositories?q=null&created_at:%3E=${date}&sort=stars&order=desc&per_page=${quantityItem}`
            );
            return this.show(repositories.data.items);
        } catch (e) {
            return console.log(e);
        }
    }

    show(repositories) {
        let languages = {};
        repositories.forEach((rep) => {
            if (languages[rep.language]) {
                const current = languages[rep.language];
                current.numberItems++;
                current.repositories.push(rep.name);
                languages[rep.language] = current;
            } else {
                const current = { numberItems: 1, repositories: [rep.name] };
                languages[rep.language] = current;
            }
        });

        return languages;
    }
};