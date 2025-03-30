import { createMcpServer } from '@modelcontextprotocol/sdk';
import { searchContent } from './tools/search-content';
import { allSpaces } from './tools/all-spaces';
import { getPagesInSpace } from './tools/get-pages-in-space';
import { getPageById } from './tools/get-page-by-id';
import { createPage } from './tools/create-page';
import { updatePage } from './tools/update-page';

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

async function main() {
  const server = createMcpServer({
    tools: [
      searchContent,
      allSpaces,
      getPagesInSpace,
      getPageById,
      createPage,
      updatePage
    ]
  });

  await server.listen(Number(PORT), HOST);
  console.log(`🚀 Confluence MCP server started at http://${HOST}:${PORT}`);
}

main().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
