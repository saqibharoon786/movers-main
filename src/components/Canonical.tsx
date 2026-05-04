import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface CanonicalProps {
  canonical?: string;
  title?: string;
}

const Canonical: React.FC<CanonicalProps> = ({ canonical, title }) => {
  const location = useLocation();
  const defaultCanonical = `https://bestintlmovers.com${location.pathname}`;

  const finalCanonical = canonical || defaultCanonical;

  return (
    <Helmet>
      <link rel="canonical" href={finalCanonical} />
      <meta name="robots" content="index, follow" />
      {title && <title>{title}</title>}
    </Helmet>
  );
};

export default Canonical;