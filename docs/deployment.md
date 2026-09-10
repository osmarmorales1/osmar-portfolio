# Deploy the frontend

Build once with Node.js 24+:

```sh
npm ci
npm run typecheck
npm test
npm run build
```

Publish only `dist/` to a static host. No server-side model key, subscription cookie, SSH credential, or private package registry is needed. The committed `vercel.json` supplies a build command, output directory, and public JSON route aliases. Netlify-style hosts can use `public/_redirects`, which is copied into the build.

For another static host, serve the three API aliases as JSON:

| Request | Static file |
| --- | --- |
| `/api/portfolio` | `/agent/profile.json` |
| `/api/portfolio/projects` | `/agent/projects.json` |
| `/api/portfolio/experience` | `/agent/experience.json` |

The files also work at their direct `.json` paths. `npm run dev` and `npm run preview` implement these aliases locally. Ensure your host returns `application/json` for them and does not route missing JSON files to the HTML page.

Example Caddy configuration for a domain and directory **you control**:

```caddyfile
portfolio.example.com {
    root * /srv/portfolio/dist
    @profile path /api/portfolio
    rewrite @profile /agent/profile.json
    @projects path /api/portfolio/projects
    rewrite @projects /agent/projects.json
    @experience path /api/portfolio/experience
    rewrite @experience /agent/experience.json
    file_server
    encode zstd gzip
}
```

For a fork, update the canonical URL, social links, identity, résumé, image rights, and public API documentation before deploying it as your own site. The content intentionally describes Osmar Morales. The original domain is not provisioned by this repository.

## Optional guest backend

The default build has no connected model backend. If you operate your own compatible, bounded service, configure the following **public build setting** in your hosting dashboard:

```text
VITE_PUBLIC_AGENT_ORIGIN=https://your-agent-service.example.com
```

Never put tokens, cookies, provider credentials, or subscription details in a `VITE_` setting; these values are shipped to every browser. A setting alone does not implement authentication, quotas, session isolation, browser egress control, or speech. Those requirements belong to the separate backend described in [guest-interface.md](guest-interface.md).

## Verify after deployment

1. Read the page with JavaScript disabled; the professional record should be present.
2. Confirm gallery, dashboard tabs, capacity inputs, and mobile navigation after hydration.
3. Fetch the three public profile aliases and inspect their JSON content type.
4. Confirm no cloud-agent iframe or session request starts in an unconfigured build.
5. Verify any explicitly configured agent backend as its own service before advertising that it works.
