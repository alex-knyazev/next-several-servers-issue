import React from 'react'

import style from './style.module.css'

const Home = () => (
  <div>
    <h1>Welcome!</h1> 
    <p>Development is available on several hosts. But "Fast refresh" works only on the first opened host.</p>
    <p>There is a fix for the case with several hosts:</p>
    <ol className={style.list}>
      <li>Clone <a href="https://github.com/alex-knyazev/next.js/tree/fast-refresh-for-several-hosts">next.js repo fork</a> in the same folder where the current repo is located.</li> 
      <li>In cloned repo go to branch <a href="https://github.com/alex-knyazev/next.js/tree/fast-refresh-for-several-hosts">fast-refresh-for-several-hosts</a></li>
      <li>Run next.js for development using <a href="https://github.com/vercel/next.js/blob/canary/contributing/core/developing.md">contributing instruction</a></li>
      <li>In current repo go to branch "use-local-version-with-fix"</li>
      <li>Run `pnpm dev` again, open several hosts by links below and see that fast refresh work in each browser tab.</li>
    </ol>
    <ul className={style.list}>
      <li><a href="http://localhost:3000">http://localhost:3000</a></li>
      <li><a href="http://localhost:3001">http://localhost:3001</a></li>
      <li><a href="http://localhost:3002">http://localhost:3002</a></li>
      <li><a href="http://localhost:3003">http:///localhost:3003</a></li>
    </ul>
  </div>
)

export default Home
