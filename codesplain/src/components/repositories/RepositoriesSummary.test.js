import { render, screen } from '@testing-library/react';
import RepositoriesSummary from './RepositoriesSummary'

//test 1
test('dispays information about of the repository', () => {
    //mock
    const repository = {
        language: 'Javascrit',
        stargazers_count: 29,
        open_issues: 1, 
        forks: 20
    }

    //render
    render (<RepositoriesSummary repository={repository}/>)

    //accertion
    for(let key in repository) {
        const value = repository[key];
        const el = screen.getByText(new RegExp(value))
        expect(el).toBeInTheDocument();
    }
})