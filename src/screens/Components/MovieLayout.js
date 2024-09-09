import React from 'react';

const MovieLayout = (props) => (
<div className='flex justify-center mt-[10px]'>
  <section className="movie-layout">
    <div className="container">
      {props.children}
    </div>
  </section>
  </div>
);

export default MovieLayout;