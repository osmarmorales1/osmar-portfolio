import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile, readdir} from 'node:fs/promises';
import {publicAgentOrigin, guestOrigin} from '../lib/deployment-config.ts';
import {machineProfile, buzzCommunity} from '../lib/machine-profile.ts';
const root=new URL('../',import.meta.url);

test('unconfigured clone has no connected agent backend',()=>{
  assert.equal(guestOrigin,null);
  assert.equal(publicAgentOrigin(undefined),null);
  for(const value of ['http://example.com','https://user:secret@example.com','https://example.com/path','https://example.com?key=secret','https://example.com#token','javascript:alert(1)']) assert.equal(publicAgentOrigin(value),null);
  assert.equal(publicAgentOrigin('https://agent.example.com/'),'https://agent.example.com');
});
test('public identity and community handoff contain no expiring invitation',()=>{
  assert.equal(buzzCommunity.inviteUrl,'https://osmarmorales.io/#community');
  const profile=JSON.stringify(machineProfile);
  assert.ok(profile.includes('github.com/osmarmorales1'));
  assert.ok(!profile.includes('xtranger51'));
  assert.ok(!profile.includes('/invite/v2.'));
});
test('manifest uses public dependencies only',async()=>{
  const pkg=JSON.parse(await readFile(new URL('package.json',root),'utf8'));
  assert.ok(!JSON.stringify(pkg).includes('@openai/'));
  const lock=JSON.parse(await readFile(new URL('package-lock.json',root),'utf8'));
  for(const p of Object.values(lock.packages)) if(p.resolved) assert.ok(p.resolved.startsWith('https://registry.npmjs.org/'),p.resolved);
});
test('public root excludes operational state and secret files',async()=>{
  const files=await readdir(root);
  for(const name of files) assert.ok(!/^\.env(?:\.|$)|^\.(?:openai|vercel)$|credential|broker|signer/i.test(name),name);
});
