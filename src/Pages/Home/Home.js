import React from 'react';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
<div>
<Header></Header>
<h1>This is Home Page</h1>
<main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
</div>
   
    );
};

export default Home;