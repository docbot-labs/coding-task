import { Client } from '@notionhq/client';

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

(async () => {
  //   let resp = await notion.pages.retrieve({
  //     page_id: '9b7230c4b0c84a2eb226110fd9b0963f',
  //   });

  //   console.log(resp);

  //   if (resp.object === 'page') {
  //     console.log(resp.properties.title.title);
  //   }

  //   // Read page content
  //   console.log(
  //     await notion.blocks.children.list({
  //       block_id: '9b7230c4b0c84a2eb226110fd9b0963f',
  //     }),
  //   );

  const results: string[] = [];
  let resp: Awaited<ReturnType<typeof notion.search>>;
  let cursor;
  do {
    resp = await notion.search({
      start_cursor: cursor,
    });
    results.push(...resp.results.map(({ url }) => url));
    cursor = resp.next_cursor;
  } while (resp.has_more);

  console.log(results);

  //   console.log('Search', await notion.search({}));
})();
