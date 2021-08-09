import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
 return (
  <Helmet>
   <title>{title}</title>
   <meta name='description' content={description} />
   <meta name='keyword' content={keywords} />
  </Helmet>
 );
};

Meta.defaultProps = {
 title: 'Welcome To WeBroker',
 description: 'We Do Best Web For You',
 keywords: 'electronics, buy electronics. cheap electronic.',
};

export default Meta;
