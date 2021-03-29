// gatsby-node.js
exports.onCreatePage = ({ page, actions }, { suffix }) => {
  const { createPage, deletePage } = actions;

  return new Promise(resolve => {
    const oldPage = Object.assign({}, page);
    console.log(page)
    if (page.path.startsWith('/pages/')) {
      page.path += '.html';
    }
    if (page.path !== oldPage.path) {
      deletePage(oldPage);
      createPage(page);
    }
    resolve();
  });
};