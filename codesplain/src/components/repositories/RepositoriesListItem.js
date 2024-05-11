import { Link } from 'react-router-dom';
import FileIcon from '../tree/FileIcon';
import RepositoriesSummary from './RepositoriesSummary';
import { MarkGithubIcon } from '@primer/octicons-react';

function RepositoriesListItem({ repository }) {
  const { full_name, language, description, owner, name, html_url } = repository;

  //debug fix to find the property that is missing
  console.log('repository list item: ', repository)

  return (
    <div className="py-3 border-b flex">
      <FileIcon name={language} className="shrink w-6 pt-1" />
      <div>
        <Link to={`/repositories/${full_name}`} className="text-xl">
          {owner.login}/<span className="font-bold">{name}</span>
        </Link>
        <p className="text-gray-500 italic py-1">{description}</p>
        <RepositoriesSummary repository={repository} />
      </div>
      
      {/* bugfix */}
      <div className="grow flex items-center justify-end pr-2">
        <a target="_blank" href={html_url} aria-label='github repository'>
            <MarkGithubIcon/>
        </a>
      </div>
    </div>
  );
}

export default RepositoriesListItem;
