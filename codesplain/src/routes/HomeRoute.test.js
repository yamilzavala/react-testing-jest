import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomeRoute from './HomeRoute';
import { createServer } from '../test/server';

//GOAL REFACTOR
createServer([
    {
      path: '/api/repositories',
      res: (req) => {
        const language = req.url.searchParams.get('q').split('language:')[1];
        return {
          items: [
            { id: 1, full_name: `${language}_one` },
            { id: 2, full_name: `${language}_two` },
          ],
        };
      },
    },
  ]);

//OLD helper
// const handlers = [
//     //intercep request to '/api/repositories'
//     rest.get('/api/repositories', (req, res, ctx) => {
//         const query = req.url.searchParams.get('q');
//         const language = query.split('language:')[1];

//         //return a context
//         return res(
//             ctx.json({
//               items: [
//                 { id: 1, full_name: `${language}_one` },
//                 { id: 2, full_name: `${language}_two` },
//               ],
//             })
//           );
//     })
// ]



//test 1
test('renders two links for each language', async () => {
    render(
      <MemoryRouter>
        <HomeRoute />
      </MemoryRouter>
    );
  
    // Loop over each language
    const languages = [
      'javascript',
      'typescript',
      'rust',
      'go',
      'python',
      'java',
    ];
    for (let language of languages) {
      // For each language, make sure we see two links
      const links = await screen.findAllByRole('link', {
        name: new RegExp(`${language}_`),
      });
  
      expect(links).toHaveLength(2);
      expect(links[0]).toHaveTextContent(`${language}_one`);
      expect(links[1]).toHaveTextContent(`${language}_two`);
      expect(links[0]).toHaveAttribute('href', `/repositories/${language}_one`);
      expect(links[1]).toHaveAttribute('href', `/repositories/${language}_two`);
    }
  });

//emulate await
const pause = () => {
    return new Promise(resolve => setTimeout(resolve, 1000))
}