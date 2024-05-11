import { JSDOM } from 'jsdom';
import axios from 'axios'


export type IRepository = {
  id: string,
  name: string;
  homepage: string;
  description: string;
  repo_url: string;
  image: string;
}


export class Github {

  async getRepositoryPinned() {
    const { data: html } = await axios.get('https://github.com/josue-js');
    const { document } = new JSDOM(html).window;
    const repositories = document.querySelectorAll('.d-flex.flex-wrap.list-style-none.gutter-condensed.mb-2.js-pinned-items-reorder-list > li');
    const repositoriesPinnedNames = new Array();
    repositories.forEach(repository => {
      const name = repository.querySelector('span.repo')?.textContent
      repositoriesPinnedNames.push(name);
    });

    const allRepositories = await this.getRepositoryDetails();
    const repositoriesPinned = allRepositories.filter(repository => repositoriesPinnedNames.includes(repository.name))
      .map(async (repository) => {
        const image = await this.getImage(repository.name)
        return {
          id: repository.id,
          name: repository.name.replaceAll('-', ' '),
          description: repository.description,
          homepage: repository.homepage,
          repo_url: repository.html_url,
          image: image
        }
      })

    return (await Promise.all(repositoriesPinned).then(r => r))
  }


  async getRepositoryDetails() {
    const { data: html } = await axios.get('https://api.github.com/users/Josue-Js/repos');
    return html
  }


  async getImage(repo: string) {
    const { data: html } = await axios.get(`https://github.com/Josue-Js/${repo}`);
    const { document } = new JSDOM(html).window;

    const image = document.querySelector('img')
    const path = image?.getAttribute('src')

    const url = `https://raw.githubusercontent.com${path}`.replace('raw/', '');
    return url
  }
}