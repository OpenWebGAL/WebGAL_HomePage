const fs = require('fs')

const repos = [
  'OpenWebGAL/WebGAL',
  'OpenWebGAL/WebGAL_Terre',
  'OpenWebGAL/WebGAL_Doc',
  'OpenWebGAL/WebGAL_HomePage'
]

const contributorsList = repos.map(repo => `https://api.github.com/repos/${repo}/contributors`)

const getInfo = async (url) => fetch(url).then(res => res.json())

let allContributors = []

const filterContributors = (contributors) => contributors.map(contributor => {
  if (contributor.login !== 'dependabot[bot]') {
    const newContributor = {
      login: contributor.login,
      avatarUrl: contributor.avatar_url,
      url: contributor.html_url,
      contributions: contributor.contributions,
    }
    const test = allContributors.find(item => item.login === newContributor.login)
    if (test)
      allContributors = [...allContributors.filter(item => item.login !== test.login), { ...test, contributions: test.contributions + newContributor.contributions }]
    else
      allContributors = [...allContributors, newContributor]
  }
})

const getContributors = async () => {
  await Promise.all(contributorsList.map(url => getInfo(url).then(contributors => filterContributors(contributors))))

  allContributors = await Promise.all(
    [...allContributors]
      .sort((a, b) => b.contributions - a.contributions)
      .map(async item => {
        const name = await getInfo(`https://api.github.com/users/${item.login}`).then(res => res.name)
        return {
          name: name ? name : item.login,
          avatarUrl: item.avatarUrl,
          url: item.url,
        }
      })
  )

  console.log(allContributors)

  fs.readFile('./data/contributiors.ts', 'utf-8', (err, data) => {
    if (err) throw err
    else {
      newFile = data.replace(/contributiors: Contributor\[\] = \[.*\]/s, `contributiors: Contributor[] = ${JSON.stringify(allContributors)}`).replaceAll('"', '\'')
      fs.writeFile('./data/contributiors.ts', newFile, (err) => {
        if (err) throw err
        else console.log('Successfully!')
      })
    }
  })
}

getContributors()