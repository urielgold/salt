import styles from './Header.module.scss';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BreadCrumbs}  from './BreadCrumbs/BreadCrumbs';

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        <FontAwesomeIcon icon={faChevronLeft} className={styles.chevron}/>
        {title}
      </h1>
      <div className={styles.breadcrumbs}>
        <BreadCrumbs path={['inventory', 'Endpoints Group', 'Endpoints Details']}/>
      </div>
    </div>
  );
}